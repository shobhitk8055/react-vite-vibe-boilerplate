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
import { useNotificationStore } from "@/stores/notifications";
import { Locked } from "@/vibe/components/Icon/Icons";

const schema = z.object({
  email: ((msg: string) => z.string({ required_error: msg }).min(1, msg))(
    "Please enter email address"
  ),
  password: ((msg: string) => z.string({ required_error: msg }).min(1, msg))(
    "Please enter password"
  ),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { methods } = useHookForm<LoginValues, typeof schema>(schema);
  const { formState, control } = methods;

  const login = useLogin();
  const navigate = useNavigate();
  const { animate, callAfterAnimateFn } = useAnimateFn();

  return (
    <AnimatePresence>
      {animate && (
        <motion.div {...animations}>
          <div className="card p-4 mt-4 mx-4">
            <Form<LoginValues>
              onSubmit={async (values) => {
                console.log(values);
                // values;
                // onSuccess();
                login.mutate(values, { onSuccess });
              }}
              methods={methods}
            >
              <InputField
                control={control}
                type={TextFieldTextType.TEXT}
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
                  Log In
                </Button>
              </div>
            </Form>
            <Link
              to="#"
              onClick={callAfterAnimateFn(() => navigate("/auth/forget"))}
              className="forget-link"
            >
              Forget Password
            </Link>
          </div>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <Link
              to="#"
              onClick={callAfterAnimateFn(() => navigate("/auth/register"))}
              className="forget-link"
            >
              Sign Up
            </Link>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
