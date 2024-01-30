import { Meta, Story } from "@storybook/react";
import * as z from "zod";
import {
  optionalNum,
  optionalSelect,
  requiredNum,
  requiredSelect,
} from "@/lib/zodRules";
import { Form } from "./Form";
import { useHookForm } from "@/hooks/useHookForm";
import InputField from "./InputField";
import { Button, Dropdown } from "@/vibe/components";
import { useEffect, useState } from "react";
import { TextFieldTextType } from "../TextField/TextFieldConstants";
import SelectField from "./SelectField";
import MultiSelectField from "./MultiSelectField";
import InputDate from "./InputDate";
import InputDateRange from "./InputDateRange";
import InputPhone from "./InputPhone";

type FormValues = {
  string: string;
  password: string;
  numField: number;
  select: string;
  multi: string[];
  date: string;
  dateRange: string[];
  // creatable: string;
  // creatableMulti: string[];
  // areYouSure: boolean;
  // areYouSurePrivacy: boolean;
  // radioOptions: string;
  phone: string;
};

const schema = z.object({
  string: z.string().min(0, "Required"),
  password: z.string(),
  select: optionalSelect,
  numField: optionalNum,
  multi: z.string().array().min(0, "This field is required"),
  date: z.string().min(1, "This field is required"),
  dateRange: z.string().array(),
  // creatable: z.string().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  // creatableMulti: z.string().array().min(1, "Required"),
  // areYouSure: z.boolean(),
  // areYouSurePrivacy: z.boolean(),
  // radioOptions: z
  //   .string({ invalid_type_error: "Required " })
  //   .min(1, "Required"),
});

const options = [
  {
    label: "First option",
    value: "first_value",
  },
  {
    label: "Second option",
    value: "second_value",
  },
];

const multiOptions = [
  {
    label: "First multi option",
    value: "first_option_value",
  },
  {
    label: "Second multi option",
    value: "second_option_value",
  },
];

const MyForm = () => {
  const { methods, setValues } = useHookForm<FormValues, typeof schema>(schema);
  const { formState, control } = methods;

  const handleSubmit = (values: FormValues) => {
    console.log(values, formState.errors);

    // reset();
  };

  useEffect(() => {
    setValues({
      string: "",
      password: "ab",
      multi: [],
      date: "",
      dateRange: ["2023-01-01", "2023-02-22"],
    });
  }, []);

  return (
    <Form<FormValues> onSubmit={handleSubmit} methods={methods}>
      <div className="row">
        <div className="col-4">
          <InputField
            size="medium"
            control={control}
            name="string"
            title="String"
            placeholder="Enter string here"
            error={formState.errors["string"]}
          />
        </div>
        <div className="col-4">
          <InputField
            size="medium"
            type={TextFieldTextType.NUMBER}
            control={control}
            name="numField"
            title="Number"
            placeholder="Enter number here"
            error={formState.errors["numField"]}
          />
        </div>
        <div className="col-4">
          <InputField
            type={TextFieldTextType.PASSWORD}
            control={control}
            name="password"
            size="medium"
            title="Password"
            placeholder="Please enter password"
            error={formState.errors["password"]}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <SelectField
            control={control}
            name="select"
            options={options}
            placeholder="Select"
            title="Select single"
            error={formState.errors["select"]}
          />
        </div>
        <div className="col-4">
          <MultiSelectField
            control={control}
            name="multi"
            options={multiOptions}
            placeholder="Select"
            title="Multi single"
            error={formState.errors["multi"]}
          />
        </div>
        <div className="col-4">
          <InputDate
            control={control}
            name="date"
            size="medium"
            title="Choose date"
            placeholder="Please pick date"
            error={formState.errors["date"]}
          />
        </div>
        <div className="col-4 mt-3">
          <InputDateRange
            control={control}
            name="dateRange"
            size="medium"
            title="Choose date range"
            placeholder="Please pick date range"
            error={formState.errors["dateRange"]}
          />
        </div>
        <div className="col-4 mt-3">
            <InputPhone
              control={control}
              name="phone"
              placeholder="Please pick date range"
              error={formState.errors["phone"]}
            />
          </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </Form>
  );
};

const meta: Meta = {
  title: "Example/VibeForm",
  component: MyForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <MyForm />;

export const Default = Template.bind({});
Default.args = {};
