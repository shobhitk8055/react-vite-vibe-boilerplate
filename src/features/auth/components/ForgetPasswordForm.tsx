import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { Button } from "@/vibe/components";
import { Form, InputField } from "@/vibe/components";
import "../routes/auth.css";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "./Layout";
import useAnimateFn from "@/hooks/animate";
import { useState } from "react";
import { useNotificationStore } from "@/stores/notifications";
import { useHookForm } from "@/hooks/useHookForm";
import { Locked } from "@/vibe/components/Icon/Icons";

const schema = z.object({
  email: ((msg: string) => z.string({ required_error: msg }).min(1, msg).email("Please enter a valid email address!"))(
    "Please enter email address"
  ),
});

type ForgetValues = {
  email: string;
};

export const ForgetPasswordForm = () => {
  const navigate = useNavigate();
  const { addNotification } = useNotificationStore();
  const { animate, callAfterAnimateFn } = useAnimateFn();
  const [loading, setLoading] = useState(false);

  const { methods } = useHookForm<ForgetValues, typeof schema>(schema);
  const { formState, control } = methods;

  const handleSubmit = async (values: ForgetValues) => {
    try {
      setLoading(true);
      values;
      // await forgetPassword(values);
      addNotification({
        type: "success",
        title: "Success",
        message: "Reset password link has been to sent to your email address!",
      });
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {animate && (
        <motion.div {...animations}>
          <div className="card p-4 mt-4 mx-4">
            <h5>Forget Password</h5>
            <h6 className="mb-4 font-light">Please enter your email address</h6>
            <Form<ForgetValues>
              onSubmit={handleSubmit}
              methods={methods}
            >
              <InputField
                control={control}
                title="Email Address"
                error={formState.errors["email"]}
                name="email"
                wrapperClassName="mt-3"
              />
              <div className="d-flex justify-content-center">
                <Button
                  leftIcon={Locked}
                  isLoading={loading}
                  type="submit"
                  className="w-100 mt-3"
                >
                  Submit
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
