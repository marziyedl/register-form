import { Form, Formik } from "formik";
import { Card } from "reactstrap";
import FormStepper from "components/formik/FormStepper";
import { FormDefaultSteps } from "constants/FormSteps";
import PersonalInfo from "./PersonalInfo";
import { useState } from "react";
import AddressInfo from "./AddressInfo";
import PaymentInfo from "./PaymentInfo";
import SuccessPage from "./SuccessPage";
import UsePost from "hooks/usePost.hooks";

function Register() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [postData, setPostData] = useState({
    url: "https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data",
    callBack: () => {},
    body: {},
    onError: () => {},
  });
  const { postLoading } = UsePost(postData);
  const onFormSubmit = (values: any) => {
    if (currentStep === FormDefaultSteps.length - 2) {
      // submit
      localStorage.setItem("data", values as string);

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
        callBack: () => {
          setCurrentStep((s) => s + 1);
          console.log("yesss");
        },
      });

      console.log("sub");
    } else {
      // next
      setCurrentStep((s) => s + 1);
      console.log("next");
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
    <Card>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          telephone: "",
          street: "",
          houseNumber: "",
          zipCode: "",
          city: "",
          accountOwner: "",
          iban: "",
        }}
        onSubmit={(values) => onFormSubmit(values)}
      >
        {() => (
          <Form>
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
    </Card>
  );
}

export default Register;
