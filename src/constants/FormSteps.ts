import { FormField } from "utils/types";

export const FormDefaultSteps = [
  { label: "Personal Info" },
  { label: "Address Info" },
  { label: "Payment Info" },
  { label: "Info" },
];
export const FormDefaultvalue: FormField = {
  firstName: "",
  lastName: "",
  telephone: "",
  street: "",
  houseNumber: "",
  zipCode: "",
  city: "",
  accountOwner: "",
  iban: "",
};