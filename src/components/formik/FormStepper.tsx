import { ReactElement, useEffect, useState } from "react";
import { Stepper } from "react-form-stepper";
import { Button, Col, Row } from "reactstrap";

type StepperProps = {
  steps: Array<object>;
  currentStep: number;
  loading: boolean;
  onClickPrev: (val: number) => void;
  onClickNext: (val: number) => void;
  children: ReactElement<any>;
};
function FormStepper(props: StepperProps) {
  function isLastStep() {
    return props.currentStep === props.steps.length - 2;
  }
  return (
    <>
      <Stepper steps={props.steps} activeStep={props.currentStep} />
      {props.children}

      <Row>
        <Col xs={6} className="d-flex justify-content-center mt-3">
          {props.currentStep > 0 ? (
            <Button
              disabled={props.loading}
              color="primary"
              onClick={() => props.onClickPrev(props.currentStep-1)}
            >
              Back
            </Button>
          ) : null}
        </Col>
        <Col xs={6} className="d-flex justify-content-center mt-3">
          <Button
            disabled={props.loading}
            variant="contained"
            color="primary"
            type="submit"
            // onClick={() => props.onClickNext(props.currentStep+1)}
          >
            {isLastStep() ? "Submit" : "Next"}
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FormStepper;
