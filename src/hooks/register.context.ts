import React from "react";
import { FormField } from "utils/types";

export const RegisterFormContext = React.createContext({
  formData: {},
  step: 0,
  onSetData: (formData: FormField, step: number) => {},
});
