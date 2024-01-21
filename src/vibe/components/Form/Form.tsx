import clsx from 'clsx';
import * as React from 'react';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FieldValues } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

type FormProps<TFormValues extends FieldValues, Schema> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
  methods: UseFormReturn<TFormValues>;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  className,
  id,
  methods
}: FormProps<TFormValues, Schema>) => {
  return (
    <form
      className={clsx('', className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children}
    </form>
  );
};
