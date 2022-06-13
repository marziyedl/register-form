import { Form, Formik, FormikProps } from "formik";
import { Card, CardBody } from "reactstrap";
import FormStepper from "components/formik/FormStepper";
import { FormDefaultSteps } from "constants/FormSteps";
import PersonalInfo from "./PersonalInfo";
import { useContext, useEffect, useRef, useState } from "react";
import AddressInfo from "./AddressInfo";
import PaymentInfo from "./PaymentInfo";
import SuccessPage from "./SuccessPage";
import UsePost from "hooks/usePost.hooks";
import { RegisterFormContext } from "../../hooks/register.context";
import { FormField } from "utils/types";

function Register() {
  const RegisterContext = useContext(RegisterFormContext);

  const [currentStep, setCurrentStep] = useState<number>(RegisterContext.step);

  const [postData, setPostData] = useState({
    url: "https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data",
    callBack: (value: string) => {},
    body: {},
    onError: () => {},
  });
  const { postLoading } = UsePost(postData);
  const formRef = useRef<FormikProps<any>>(null);

  useEffect(() => {
    const instance = formRef.current;
    return () => {
      RegisterContext.onSetData(instance?.values as FormField, currentStep);
    };
  }, [currentStep]);

  const onFormSubmit = (values: FormField) => {
    if (currentStep === FormDefaultSteps.length - 2) {
      // submit
      localStorage.setItem("data", JSON.stringify(values));

      setPostData({
        ...postData,
        body: {
          customerId: 1,
          owner: values.accountOwner,
          iban: values.iban,
        },

        onError: () => {
          console.log("err");
        },
        callBack: (data) => {
          // save id
          localStorage.setItem("id", data);
          // next
          setCurrentStep((s) => s + 1);
        },
      });
    } else {
      // next
      setCurrentStep((s) => s + 1);
    }
  };
  const getCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <AddressInfo />;
      case 2:
        return <PaymentInfo />;
      case 3:
        return <SuccessPage />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <Card className="border-0">
      <CardBody>
        <Formik
          initialValues={RegisterContext.formData}
          onSubmit={(values) => onFormSubmit(values)}
          innerRef={formRef}
        >
          {() => (
            <Form autoComplete="off" className="vh-100">
              <FormStepper
                steps={FormDefaultSteps}
                currentStep={currentStep}
                loading={postLoading}
                onClickPrev={(val) => setCurrentStep(val)}
              >
                {getCurrentStep()}
              </FormStepper>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}

export default Register;
