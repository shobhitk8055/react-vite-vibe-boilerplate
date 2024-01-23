import React from "react";

import { Dropdown, TextField } from "@/vibe/components";
import { Controller, UseFormRegisterReturn, Control } from "react-hook-form";
import { TextFieldProps } from "../TextField/TextField";

type Option = {
  label: React.ReactNode;
  value: string | number;
};

type SelectFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
  error?: any;
  options: Option[];
};

const SelectField = (props: SelectFieldProps): React.ReactElement => {
  const { name, control, error, type, options } = props;

  return (
    <div>
      <Controller
        name={name ?? ""}
        control={control}
        render={({ field: { onChange } }) => (
          <>
            <Dropdown
              size={Dropdown.sizes.SMALL}
              onChange={onChange}
              placeholder="Medium"
              className="dropdown-stories-styles_spacing"
              {...props}
              validation={{
                status: error?.message ? "error" : "",
                text: error?.message ?? "",
              }}
              options={options}
            />
          </>
        )}
      />
    </div>
  );
};

export default SelectField;
