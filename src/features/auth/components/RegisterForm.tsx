import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { Form, InputField } from "@/vibe/components";
import { useLogin } from "@/lib/auth";
import "../routes/auth.css";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "./Layout";
import useAnimateFn from "@/hooks/animate";
import { Button } from "@/vibe/components";
import { useHookForm } from "@/hooks/useHookForm";
import { TextFieldTextType } from "@/vibe/components/TextField/TextFieldConstants";
import { Locked } from "@/vibe/components/Icon/Icons";

const schema = z.object({
  email: z.string().min(1, "Please enter email address"),
  password: z.string().min(1, "Please enter password"),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin();
  const navigate = useNavigate();
  const { animate, callAfterAnimateFn } = useAnimateFn();

  const { methods } = useHookForm<LoginValues, typeof schema>(schema);
  const { formState, control } = methods;

  return (
    <AnimatePresence>
      {animate && (
        <motion.div {...animations}>
          <div className="card p-4 mt-4 mx-4">
            <h5>Register</h5>
            <h6 className="mb-4 font-light">Please enter your detail to sign up</h6>
            <Form<LoginValues>
              onSubmit={async (values) => {
                login.mutate(values, { onSuccess });
              }}
              methods={methods}
            >
              <InputField
                control={control}
                title="Email Address"
                error={formState.errors["email"]}
                name="email"
              />
              <InputField
                control={control}
                type={TextFieldTextType.PASSWORD}
                title="Password"
                error={formState.errors["password"]}
                name="password"
                wrapperClassName="mt-3"
              />
              <div className="d-flex justify-content-center">
                <Button
                  leftIcon={Locked}
                  isLoading={login.isLoading}
                  type="submit"
                  className="w-100 mt-3"
                >
                  Sign up
                </Button>
              </div>

            </Form>
          </div>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link
              to="#"
              onClick={callAfterAnimateFn(() => navigate("/auth/login"))}
              className="forget-link"
            >
              Login
            </Link>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
