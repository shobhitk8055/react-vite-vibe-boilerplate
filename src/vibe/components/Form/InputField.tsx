import React, { useState } from "react";

import { TextField } from "@/vibe/components";
import { Controller, Control } from "react-hook-form";
import { TextFieldProps } from "../TextField/TextField";
import { Hide, Show } from "../Icon/Icons";

type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
  error?: any;
};

const InputField = (props: InputFieldProps): React.ReactElement => {
  const { name, control, error, type = 'text' } = props;
  const [showIcon, setShowIcon] = useState(true);

  const getIcon = () => {
    if (type && type === "password") {
      return showIcon ? Show : Hide;
    }
  };
  return (
    <div>
      <Controller
        name={name ?? ""}
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            {...props}
            type={(() => {
              if (type === "password") {
                return !showIcon ? 'text' : 'password'
              }
              return type
            })()}
            onChange={(value: string) => {
              onChange(type && type === "number" ? +value : value);
            }}
            validation={{
              status: error?.message ? "error" : "",
              text: error?.message ?? "",
            }}
            iconName={getIcon()}
            onIconClick={() => setShowIcon(!showIcon)}
          />
        )}
      />
    </div>
  );
};

export default InputField;
