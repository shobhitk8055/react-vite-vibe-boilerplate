/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import {
  Button,
  DatePicker,
  Dialog,
  DialogContentContainer,
  Text,
} from "@/vibe/components";
import { Controller, Control } from "react-hook-form";
import { TextFieldProps } from "../TextField/TextField";
import useSwitch from "@/vibe/hooks/useSwitch";
import FieldLabel from "../FieldLabel/FieldLabel";
import { Close } from "../Icon/Icons";
import { Moment } from "../DatePicker/types";
import moment from "moment";
import clsx from "clsx";

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
    title = "",
    labelIconName,
    requiredAsterisk = false,
    iconsNames = EMPTY_OBJECT,
    id = "input",
    placeholder = "Choose a date",
  } = props;
  const [date, setDate] = useState<Moment>();

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

  const getCurrentValue = (defaultValue: string) => {
    if (date) {
      return date;
    }
    if (defaultValue) {
      return moment(defaultValue, "YYYY-MM-DD");
    }
  };

  const getShowValue = (defaultValue: string) => {
    if (date) {
      return date.format("ll");
    }
    if (defaultValue) {
      return moment(defaultValue, "YYYY-MM-DD").format("ll");
    }
    return placeholder;
  };

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
                  date={getCurrentValue(value)}
                  data-testid="date-picker"
                  onPickDate={(d: Moment) => {
                    setDate(d);
                    onChange(d.format("YYYY-MM-DD"));
                    onChangeBottom();
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
            <div className="position-relative">
              <span
                className="close-btn"
                onClick={() => {
                  setDate(undefined);
                  onChange("");
                }}
              >
                <Close />
              </span>
              <Button
                kind={Button.kinds.SECONDARY}
                onClick={onChangeBottom}
                active={checkedBottom}
                className={clsx(
                  "w-100 justify-content-start",
                  error && error?.message && "inputErrorValidation"
                )}
                style={{ color: "#676879" }}
              >
                {getShowValue(value)}
              </Button>
              {error && (
                <Text
                  type={Text.types.TEXT2}
                  color={Text.colors.SECONDARY}
                  className={clsx(
                    error && error?.message && "inputErrorValidation",
                    "subTextContainer"
                  )}
                >
                  {error && error?.message && (
                    <span className={clsx("subTextContainerStatus")}>
                      {error?.message}
                    </span>
                  )}
                </Text>
              )}
            </div>
          </Dialog>
        )}
      />
    </div>
  );
};

export default InputDate;
