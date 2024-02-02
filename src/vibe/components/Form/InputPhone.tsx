import clsx from "clsx";
import { Controller, Control } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import FieldLabel from "../FieldLabel/FieldLabel";
import { Text } from "@/vibe/components";
const EMPTY_OBJECT = { primary: "", secondary: "", layout: "" };

type InputFieldProps = {
  name: string;
  value?: string;
  control: Control<any>;
  title?: string;
  labelIconName?: string | React.FunctionComponent | null;
  requiredAsterisk?: boolean; // TODO: Deprecate in next major version.
  error?: any;
  id?: string;
  iconsNames?: {
    layout: string;
    primary: string;
    secondary: string;
  };
};

const InputPhone = (props: InputFieldProps) => {
  const {
    error,
    control,
    name,
    title = "",
    labelIconName,
    requiredAsterisk = false,
    iconsNames = EMPTY_OBJECT,
    id = "input",
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <FieldLabel
            labelText={title}
            icon={labelIconName}
            iconLabel={iconsNames.layout}
            labelFor={id}
            requiredAsterisk={requiredAsterisk}
          />
          <PhoneInput
            className={clsx("form-control phone-control")}
            placeholder="Enter phone number"
            value={value}
            onChange={onChange}
          />
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
        </>
      )}
    />
  );
};

export default InputPhone;
