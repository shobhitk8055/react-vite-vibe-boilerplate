import { Meta, Story } from "@storybook/react";
import * as z from "zod";

import { Form } from "./Form";
import { InputField } from "./InputField";
import { SelectField } from ".";
import { MultiSelect } from ".";
import { Button } from "../Elements";
import { CreatableSearch } from "./CreatableSearch";
import { CheckBoxField } from "./CheckBoxField";

type FormValues = {
  string: string;
  password: string;
  select: string;
  multi: string[];
  creatable: string;
  creatableMulti: string[];
  multiOptions: any;
};

const schema = z.object({
  string: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
  select: z.string().min(1, "Required"),
  creatable: z.string().min(1, "Required"),
  multi: z.string().array().min(1, "Required"),
  creatableMulti: z.string().array().min(1, "Required"),
  multiOptions: z.string().array().min(1, "Required"),
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

        // alert(JSON.stringify(values, null, 2));
      }}
      schema={schema}
      id="my-form"
      options={{
        defaultValues: {
          string: "a",
          password: "AB",
          select: "first_value",
          multi: ["first_option_value"],
          creatable: "first_option_value",
        },
      }}
    >
      {({ register, formState, control }) => (
        <>
          <InputField
            label="String"
            error={formState.errors["string"]}
            registration={register("string")}
          />
          <InputField
            type="password"
            label="Password"
            error={formState.errors["password"]}
            registration={register("password")}
          />
          <SelectField
            control={control}
            options={options}
            label="Select field"
            error={formState.errors["select"]}
            registration={register("select")}
          />
          <MultiSelect
            options={multiOptions}
            control={control}
            label="Multi Select"
            error={formState.errors["multi"]}
            registration={register("multi")}
          />
          <div className="row">
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
              <CheckBoxField
                label="Select one platform"
                options={options}
                registration={register("multiOptions")}
                error={formState.errors["multiOptions"]}
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
