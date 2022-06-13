import { ReactElement } from "react";
export type FormField = {
  firstName: string;
  lastName: string;
  telephone: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  accountOwner: string;
  iban: string;
};
export type StepperProps = {
  steps: Array<object>;
  currentStep: number;
  loading: boolean;
  onClickPrev: (val: number) => void;
  children: ReactElement<any>;
};
