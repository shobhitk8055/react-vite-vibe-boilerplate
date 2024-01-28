import React, { useState } from "react";

import { Dropdown } from "@/vibe/components";
import { Controller, Control } from "react-hook-form";
import { TextFieldProps } from "../TextField/TextField";

type Option = {
  label: React.ReactNode;
  value: string | number;
};

type MultiSelectFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
  error?: any;
  options: Option[];
};

const MultiSelectField = (props: MultiSelectFieldProps): React.ReactElement => {
  const { name, control, error, options } = props;
  const [internalValue, setInternalValue] = useState();
  const getOption = (selectedOption: string[]) => {
    return options.filter((i: Option) => selectedOption?.includes(i.value.toString()));
  };
  return (
    <div>
      <Controller
        name={name ?? ""}
        control={control}
        render={({ field: { value, onChange } }) => (
          <>
            {console.log(internalValue ? internalValue : getOption(value))}
            <Dropdown
              value={internalValue ? internalValue : getOption(value)}
              onChange={(value: any) => {
                setInternalValue(value);
                if (value) {
                  const selected = value.map((i: Option) => i.value);
                  onChange(selected)
                } else {
                  onChange([]);
                }
                // onChange(value?.value);
              }}
              className="dropdown-stories-styles_spacing"
              {...props}
              validation={{
                status: error?.message ? "error" : "",
                text: error?.message ?? "",
              }}
              multi
              options={options}
            />
          </>
        )}
      />
    </div>
  );
};

export default MultiSelectField;
