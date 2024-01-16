import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { Form, InputField } from "@/components/Form";
import { useLogin } from "@/lib/auth";
import "../routes/auth.css";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "./Layout";
import useAnimateFn from "@/hooks/animate";
import {
  DatePicker,
  Dialog,
  DialogContentContainer,
  Button,
} from "@/vibe/components";
import useSwitch from "@/vibe/hooks/useSwitch";
import { useState } from "react";

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

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin();
  const navigate = useNavigate();
  const [date, setDate] = useState({});
  const [formattedDate, setFormattedDate] = useState("");
  const { animate, callAfterAnimateFn } = useAnimateFn();
  const modifiers = [
    {
      name: "preventOverflow",
      options: {
        mainAxis: false,
      },
    },
  ];

  const { isChecked: checkedBottom, onChange: onChangeBottom } = useSwitch({
    defaultChecked: false,
  });


  return (
    <AnimatePresence>
      {animate && (
        <motion.div {...animations}>
          <div className="card p-4 mt-4 mx-4">
            <Form<LoginValues, typeof schema>
              onSubmit={async (values) => {
                values;
                // onSuccess();
                login.mutate(values, { onSuccess });
              }}
              options={{
                defaultValues: {
                  email: "baba@yopmail.com",
                  password: "@3",
                },
              }}
              schema={schema}
            >
              {({ register, formState }) => (
                <>
                  <InputField
                    type="email"
                    label="Email Address"
                    error={formState.errors["email"]}
                    registration={register("email")}
                  />
                  <InputField
                    type="password"
                    label="Password"
                    error={formState.errors["password"]}
                    registration={register("password")}
                  />
                  <Dialog
                    modifiers={modifiers}
                    onClickOutside={onChangeBottom}
                    position={Dialog.positions.BOTTOM}
                    showTrigger={[]}
                    hideTrigger={[]}
                    open={checkedBottom}
                    content={
                      <DialogContentContainer type="modal">
                        <DatePicker
                          date={date.startDate}
                          data-testid="date-picker"
                          onPickDate={(d) => {
                            setDate(d);

                            setFormattedDate(d.format("ll"));
                            setTimeout(() => {
                              onChangeBottom();
                            }, 200);
                          }}
                        />
                      </DialogContentContainer>
                    }
                  >
                    <Button
                      kind={Button.kinds.SECONDARY}
                      onClick={onChangeBottom}
                      active={checkedBottom}
                    >
                      {formattedDate === "" ? "Choose a date" : formattedDate}
                    </Button>
                  </Dialog>
                  <div className="d-flex justify-content-center">
                    <Button
                      startIcon={<i className="fa-solid fa-lock" />}
                      isLoading={login.isLoading}
                      type="submit"
                      className="w-100"
                    >
                      Log In
                    </Button>
                  </div>
                </>
              )}
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
