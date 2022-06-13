import "./App.css";
import { Container } from "reactstrap";
import NavBar from "components/common/NavBar";
import AppRoutes from "routes/AppRoutes";
import { RegisterFormContext } from "hooks/register.context";
import { useState } from "react";
import { FormField } from "utils/types";
import { FormDefaultvalue } from "constants/FormSteps";
function App() {
  const [formData, setformData] = useState<FormField>(FormDefaultvalue);
  const [step, setStep] = useState<number>(0);

  const onSetData = (formvalues: FormField, currentStep: number) => {
    debugger;
    setformData(formvalues);
    setStep(currentStep);
  };
  return (
    <Container>
      <NavBar />
      <RegisterFormContext.Provider
        value={{ formData, step, onSetData: onSetData }}
      >
        <AppRoutes />
      </RegisterFormContext.Provider>
    </Container>
  );
}

export default App;
