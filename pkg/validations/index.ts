import * as yup from "yup";

export function useNumberValidation(label: string) {
  return yup
    .number()
    .required()
    .min(1)
    .max(10000)
    .typeError(`${label} must be a number`)
    .label(label);
}
