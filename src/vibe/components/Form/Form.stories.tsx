import { Meta, Story } from "@storybook/react";
import * as z from "zod";
import { optionalNum, requiredNum } from "@/lib/zodRules";
import { Form } from "./Form";
import { useHookForm } from "@/hooks/useHookForm";
import InputField from "./InputField";
import { Button, Dropdown } from "@/vibe/components";
import { useEffect, useState } from "react";
import { TextFieldTextType } from "../TextField/TextFieldConstants";
import SelectField from "./SelectField";

type FormValues = {
  string: string;
  password: string;
  numField: number;
  // select: string;
  // date: Date;
  // dateRange: Date[];
  // multi: string[];
  // creatable: string;
  // creatableMulti: string[];
  // areYouSure: boolean;
  // areYouSurePrivacy: boolean;
  // radioOptions: string;
  // phone: string;
};

const schema = z.object({
  string: z.string().min(1, "This key is required!"),
  password: z.string().min(1, "Required"),
  select: z.any(),
  // date: z.date(),
  // dateRange: z.date().array(),
  numField: requiredNum("This key is required"),
  // creatable: z.string().min(1, "Required"),
  // phone: z.string().min(1, "Required"),
  // multi: z.string().array().min(1, "Required"),
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
    console.log(values);

    // reset();
  };

  useEffect(() => {
    setValues({ string: "", numField: 90 });
  }, []);

  return (
    <Form<FormValues> onSubmit={handleSubmit} methods={methods}>
      <div className="row">
        <div className="col-4">
          <InputField
            control={control}
            name="string"
            title="String"
            placeholder="Enter string here"
            error={formState.errors["string"]}
          />
        </div>
        <div className="col-4">
          <InputField
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
            title="Password"
            error={formState.errors["password"]}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <SelectField control={control} name="select" options={options} size={Dropdown.sizes.SMALL} />
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
