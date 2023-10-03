import { Link } from 'react-router-dom';
import * as z from 'zod';
import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { useLogin, useUser } from '@/lib/auth';
import '../routes/auth.css';

const schema = z.object({
  email: z.string().min(1, 'Please enter email address'),
  password: z.string().min(1, 'Please enter password'),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin();
  console.log(login.error);
  return (
    <div>
      <Form<LoginValues, typeof schema>
        onSubmit={async (values) => {
          login.mutate(values);
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              label="Email Address"
              blueLabel
              error={formState.errors['email']}
              registration={register('email')}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
            />
            <div className='d-flex justify-content-center'>
              <Button
                startIcon={<i className="fa-solid fa-lock" />}
                isLoading={login.isLoading}
                type="submit"
                className="w-full"
              >
                Log In
              </Button>
            </div>
          </>
        )}
      </Form>
      <Link to="/forget" className="forget-link">
        Forget Password
      </Link>
    </div>
  );
};
