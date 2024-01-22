import React from "react";

import { TextField } from "@/vibe/components";
import { Controller, UseFormRegisterReturn, Control } from "react-hook-form";

type InputFieldProps = {
  name: string;
  control: Control<any>;
};

const InputField = (props: InputFieldProps) => {
  const { name, control } = props;

  return (
    <div>
      <Controller name={name ?? ""} control={control} render={() => <TextField />} />
    </div>
  );
};

export default InputField;
