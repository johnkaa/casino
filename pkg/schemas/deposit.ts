import * as yup from "yup";
import { useNumberValidation } from "@/pkg/validations";

export default yup.object({
  amount: useNumberValidation("Amount"),
});
