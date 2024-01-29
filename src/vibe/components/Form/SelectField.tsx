import React, { useState } from "react";

import { Dropdown } from "@/vibe/components";
import { Controller, Control } from "react-hook-form";
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
  const { name, control, error, options } = props;
  const [internalValue, setInternalValue] = useState<Option>();
  const getOption = (selectedOption: string) => {
    return options.find(i => i.value === selectedOption);
  }
  return (
    <div>
      <Controller
        name={name ?? ""}
        control={control}
        render={({ field: { value, onChange } }) => (
          <>
            <Dropdown
              value={internalValue ? internalValue : getOption(value)}
              onChange={(value: Option) => {
                setInternalValue(value);
                onChange(value?.value);
              }}
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
