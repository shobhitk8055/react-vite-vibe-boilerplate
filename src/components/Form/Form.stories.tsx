import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import * as z from 'zod';

import { Button } from '../Elements';

import { Form } from './Form';
import { InputField } from './InputField';

type FormValues = {
  title: string;
  password: string;
  description: string;
  type: string;
  content: string;
  isActive: string;
  notActive: string;
  person: string[];
};

const schema = z.object({
  title: z.string().min(1, 'Required'),
  person: z.string().array().min(1, 'Required'),
});

const MyForm = ({ hideSubmit = false }: { hideSubmit?: boolean }) => {
  return (
    <Form<FormValues, typeof schema>
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      schema={schema}
      id="my-form"
    >
      {({ register, formState }) => (
        <>
          <InputField
            startIcon={<i className="fa-solid fa-magnifying-glass"></i>}
            label="Title"
            error={formState.errors['title']}
            registration={register('title')}
          />
          <InputField
            type="password"
            label="Password"
            error={formState.errors['password']}
            registration={register('password')}
          />
        </>
      )}
    </Form>
  );
};

const meta: Meta = {
  title: 'Components/Form',
  component: MyForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <MyForm />;

export const Default = Template.bind({});
Default.args = {};

export const AsFormDrawer = () => {
  return (
    <FormDrawer
      triggerButton={<Button>Open Form</Button>}
      isDone={true}
      title="My Form"
      size="lg"
      submitButton={
        <Button form="my-form" type="submit">
          Submit
        </Button>
      }
    >
      <MyForm hideSubmit />
    </FormDrawer>
  );
};
