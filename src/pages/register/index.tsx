import { Form, Formik } from "formik";
import { Card } from "reactstrap";
import FormStepper from "components/formik/FormStepper";
import { FormDefaultSteps } from "constants/FormSteps";
import PersonalInfo from "./PersonalInfo";
import { useState } from "react";

function Register() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const onFormSubmit = (values: any) => {
    if (currentStep === FormDefaultSteps.length - 2) {
      // submit
      console.log("sub");
    } else {
      // next
      setCurrentStep((s) => s + 1);
      console.log("next");
    }
  };

  const getCurrentStep = () => {
    return;
  };
  return (
    <Card>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          millionaire: false,
          money: 0,
          description: "",
        }}
        onSubmit={(values) => onFormSubmit(values)}
      >
        {() => (
          <Form>
            <FormStepper
              steps={FormDefaultSteps}
              currentStep={currentStep}
              loading={false}
              onClickNext={(val) => {
                debugger;
                setCurrentStep(val);
              }}
              onClickPrev={(val) => setCurrentStep(val)}
            >
              <>
                <PersonalInfo />
              </>
            </FormStepper>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default Register;
