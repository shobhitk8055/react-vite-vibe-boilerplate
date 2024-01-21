import { Meta, Story } from "@storybook/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { optionalNum, requiredNum } from "@/lib/zodRules";
import { Form } from "./Form";
import { useForm } from "react-hook-form";

type FormValues = {
  string: string;
  password: string;
  numField: number;
  select: string;
  date: Date;
  dateRange: Date[];
  multi: string[];
  creatable: string;
  creatableMulti: string[];
  areYouSure: boolean;
  areYouSurePrivacy: boolean;
  radioOptions: string;
  phone: string;
};

const schema = z.object({
  string: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
  select: z.string().min(1, "Required"),
  date: z.date(),
  dateRange: z.date().array(),
  numField: optionalNum,
  creatable: z.string().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  multi: z.string().array().min(1, "Required"),
  creatableMulti: z.string().array().min(1, "Required"),
  areYouSure: z.boolean(),
  areYouSurePrivacy: z.boolean(),
  radioOptions: z
    .string({ invalid_type_error: "Required " })
    .min(1, "Required"),
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
  const options = {};
  const methods = useForm<FormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  const { register, formState } = methods;

  return (
    <Form<FormValues, typeof schema>
      onSubmit={() => console.log("submit hoja")}
      methods={methods}
    >
      <p>a</p>
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
