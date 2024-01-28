import * as z from "zod";

export const optionalNum = z.union([z.number(), z.nan()]).optional();
export const requiredNum = (msg: string) =>
  z.number({ invalid_type_error: msg, required_error: msg }).min(1, msg);

export const optionalSelect = z.union([z.string(), z.undefined()]).optional();
export const requiredSelect = (msg: string) =>
  z.string({ invalid_type_error: msg, required_error: msg }).min(1, msg);
