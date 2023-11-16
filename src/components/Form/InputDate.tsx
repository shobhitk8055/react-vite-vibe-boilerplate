import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapperPassThroughProps } from "./FieldWrapper";
import Flatpickr from "react-flatpickr";
import { useState } from "react";

type InputDateProps = FieldWrapperPassThroughProps & {
  className?: string;
  value?: string;
  label: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputDate = (props: InputDateProps) => {
  const { className, registration, error, value, label } = props;
  const [date, setDate] = useState();

  return <Flatpickr />;
};
