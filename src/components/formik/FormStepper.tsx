import { Stepper } from "react-form-stepper";
import { Button, Col, Row } from "reactstrap";
import { StepperProps } from "utils/types";

function FormStepper(props: StepperProps) {
  function isLastStep() {
    return props.currentStep === props.steps.length - 2;
  }
  return (
    <>
      <Stepper
        connectorStateColors
        connectorStyleConfig={{
          disabledColor: "gray",
          activeColor: "green",
          completedColor: "green",
          size: ".5em",
          style: "solid",
        }}
        styleConfig={{
          activeBgColor: "#000D36",
          activeTextColor: "white",
          completedBgColor: "#000D36",
          completedTextColor: "white",
          inactiveBgColor: "#ccc",
          inactiveTextColor: "white",
          size: "2em",
          circleFontSize: "14px",
          labelFontSize: "14px",
          borderRadius: "14px",
          fontWeight: "14px",
        }}
        steps={props.steps}
        activeStep={props.currentStep}
      />
      <div style={{ minHeight: "50vh" }}>{props.children}</div>
      <Row>
        <Col xs={6} className="d-flex justify-content-center mt-3">
          {props.currentStep > 0 ? (
            <Button
              color="primary"
              onClick={() => props.onClickPrev(props.currentStep - 1)}
            >
              Back
            </Button>
          ) : null}
        </Col>
        <Col xs={6} className="d-flex justify-content-center mt-3">
          <Button disabled={props.loading} color="primary" type="submit">
            {isLastStep() ? "Submit" : "Next"}
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FormStepper;
