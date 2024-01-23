import React from "react";

import { TextField } from "@/vibe/components";
import { Controller, UseFormRegisterReturn, Control } from "react-hook-form";
import { TextFieldProps } from "../TextField/TextField";

type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
  error?: any;
};

const InputField = (props: InputFieldProps): React.ReactElement => {
  const { name, control, error, type } = props;

  return (
    <div>
      <Controller
        name={name ?? ""}
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            {...props}
            onChange={(value) => {
              if(type && type === "number"){
                onChange(+value);
              }else{
                onChange(value);
              }
            }}
            validation={{
              status: error?.message ? 'error' : '',
              text: error?.message ?? ''
            }}
          />
        )}
      />
    </div>
  );
};

export default InputField;
