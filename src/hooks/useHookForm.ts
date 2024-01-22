import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, useForm } from "react-hook-form";
import { ZodType, ZodTypeDef } from "zod";

export const useHookForm = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>(
  options: UseFormProps<TFormValues>,
  schema: Schema
) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });

  return methods;
};
