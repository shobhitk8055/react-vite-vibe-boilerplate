import { Meta, Story } from "@storybook/react";
import * as z from "zod";

import { Form } from "./Form";
import { InputField } from "./InputField";
import { CheckboxField, SelectField, InputDate } from ".";
import { MultiSelect } from ".";
import { Button } from "../Elements";
import { CreatableSearch } from "./CreatableSearch";
import { RadioField } from "./RadioField";
import { InputPhone } from "./InputPhone";
import { optionalNum, requiredNum } from "@/lib/zodRules";

type FormValues = {
  string: string;
  password: string;
  numField: number;
  select: string;
  date: string;
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
  date: z.string().min(1, "Required"),
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
  return (
    <Form<FormValues, typeof schema>
      onSubmit={async (values) => {
        console.log(values);

        alert(JSON.stringify(values, null, 2));
      }}
      schema={schema}
      id="my-form"
      options={{
        defaultValues: {
          string: "a",
          password: "AB",
          phone: "+917357798661",
          select: "first_value",
          multi: ["first_option_value"],
          creatable: "first_option_value",
          creatableMulti: ["first_option_value"],
          date: "2023-08-09",
        },
      }}
    >
      {({ register, formState, control }) => (
        <>
          <div className="row">
            <div className="col-6">
              <InputField
                label="String"
                error={formState.errors["string"]}
                registration={register("string")}
              />
            </div>
            <div className="col-6">
              <InputField
                type="password"
                label="Password"
                error={formState.errors["password"]}
                registration={register("password")}
              />
            </div>
            <div className="col-6">
              <InputField
                type="number"
                label="Number"
                error={formState.errors["numField"]}
                registration={register("numField", {
                  valueAsNumber: true,
                })}
              />
            </div>
            <div className="col-6">
              <InputPhone
                control={control}
                label="Phone number"
                error={formState.errors["phone"]}
                registration={register("phone")}
              />
            </div>
            <div className="col-6">
              <InputDate
                label="Phone number"
                registration={register("phone")}
                error={formState.errors["phone"]}
              />
            </div>
            <div className="col-6">
              <SelectField
                control={control}
                options={options}
                label="Select field"
                error={formState.errors["select"]}
                registration={register("select")}
              />
            </div>
            <div className="col-6">
              <MultiSelect
                options={multiOptions}
                control={control}
                label="Multi Select"
                error={formState.errors["multi"]}
                registration={register("multi")}
              />
            </div>
            <div className="col-6">
              <CreatableSearch
                options={multiOptions}
                control={control}
                label="Creatable search"
                error={formState.errors["creatable"]}
                registration={register("creatable")}
              />
            </div>
            <div className="col-6">
              <CreatableSearch
                options={multiOptions}
                control={control}
                label="Creatable multi search"
                error={formState.errors["creatableMulti"]}
                registration={register("creatableMulti")}
                isMulti
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CheckboxField
                label="Please accept terms and conditions"
                registration={register("areYouSure")}
                error={formState.errors["areYouSure"]}
              />
              <CheckboxField
                label="Please accept privacy policy"
                registration={register("areYouSurePrivacy")}
                error={formState.errors["areYouSurePrivacy"]}
              />
            </div>
            <div className="col">
              <RadioField
                label="Select one platform"
                options={options}
                registration={register("radioOptions")}
                error={formState.errors["radioOptions"]}
              />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </>
      )}
    </Form>
  );
};

const meta: Meta = {
  title: "Example/Form",
  component: MyForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <MyForm />;

export const Default = Template.bind({});
Default.args = {};
