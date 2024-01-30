import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "@/components/Form/FieldWrapper";
import clsx from "clsx";
import { Controller, UseFormRegisterReturn, Control } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type InputFieldProps = FieldWrapperPassThroughProps & {
  registration: Partial<UseFormRegisterReturn>;
  value?: string;
  control: Control<any>;
};

const InputPhone = (props: InputFieldProps) => {
  const { error, label, control, name } = props;

  return (
    <Controller
      name={name ?? ""}
      control={control}
      render={({ field: { onChange, value } }) => (
        <PhoneInput
          className={clsx("form-control phone-control")}
          placeholder="Enter phone number"
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};

export default InputPhone;
