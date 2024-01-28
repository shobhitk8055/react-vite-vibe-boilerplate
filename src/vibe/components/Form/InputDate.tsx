import React, { useState } from "react";

import {
  Button,
  DatePicker,
  Dialog,
  DialogContentContainer,
  TextField,
} from "@/vibe/components";
import { Controller, UseFormRegisterReturn, Control } from "react-hook-form";
import { TextFieldProps } from "../TextField/TextField";
import useSwitch from "@/vibe/hooks/useSwitch";
import FieldLabel from "../FieldLabel/FieldLabel";
const EMPTY_OBJECT = { primary: "", secondary: "", layout: "" };

type InputDateProps = TextFieldProps & {
  name: string;
  control: Control<any>;
  title?: string;
  labelIconName?: string | React.FunctionComponent | null;
  requiredAsterisk?: boolean; // TODO: Deprecate in next major version.
  error?: any;
  id?: string;
  placeholder?: string;
};

const InputDate = (props: InputDateProps): React.ReactElement => {
  const {
    name,
    control,
    error,
    type,
    title = "",
    labelIconName,
    requiredAsterisk = false,
    iconsNames = EMPTY_OBJECT,
    id = "input",
    placeholder = "Choose a date"
  } = props;
  const [date, setDate] = useState({});
  const [formattedDate, setFormattedDate] = useState("");

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
    <div>
      <Controller
        name={name ?? ""}
        control={control}
        render={({ field: { value, onChange } }) => (
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
            <FieldLabel
              labelText={title}
              icon={labelIconName}
              iconLabel={iconsNames.layout}
              labelFor={id}
              requiredAsterisk={requiredAsterisk}
            />
            <Button
              kind={Button.kinds.SECONDARY}
              onClick={onChangeBottom}
              active={checkedBottom}
              className="w-100 justify-content-start"
              style={{ color: "#676879" }}
            >
              {formattedDate === "" ? placeholder : formattedDate}
            </Button>
          </Dialog>
        )}
      />
    </div>
  );
};

export default InputDate;
