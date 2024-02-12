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
import { TextFieldTextType } from "@/vibe/components/TextField/TextFieldConstants";

const schema = z.object({
  new_password: ((msg: string) => z.string({ required_error: msg }).min(1, msg))(
    "Please enter new password"
  ),
  confirm_password: ((msg: string) => z.string({ required_error: msg }).min(1, msg))(
    "Please enter confirm password"
  ),
}).superRefine(({ confirm_password, new_password }, ctx) => {
  if (confirm_password !== new_password) {
    ctx.addIssue({
      path: ['confirm_password'],
      code: 'custom',
      message: 'The passwords did not match',
    });
  }
});

type ForgetValues = {
  new_password: string;
  confirm_password: string;
};

export const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { addNotification } = useNotificationStore();
  const { animate, callAfterAnimateFn } = useAnimateFn();
  const [loading, setLoading] = useState(false);

  const { methods } = useHookForm<ForgetValues, typeof schema>(schema);
  const { formState, control } = methods;

  const handleSubmit = async (values: ForgetValues) => {
    try {
      setLoading(true);
      console.log(values);
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
            <h5>Reset Password</h5>
            <h6 className="mb-4 font-light">Please enter your new password</h6>
            <Form<ForgetValues>
              onSubmit={handleSubmit}
              methods={methods}
            >
              <InputField
                control={control}
                type={TextFieldTextType.PASSWORD}
                title="New Password"
                error={formState.errors["new_password"]}
                name="new_password"
                wrapperClassName="mt-3"
              />
              <InputField
                control={control}
                type={TextFieldTextType.PASSWORD}
                title="Confirm Password"
                error={formState.errors["confirm_password"]}
                name="confirm_password"
                wrapperClassName="mt-3"
              />
              <div className="d-flex justify-content-center">
                <Button
                  startIcon={<i className="fa-solid fa-lock" />}
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
