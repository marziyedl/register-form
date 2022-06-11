import { Field } from "formik";
import { FormGroup, Label, Col, Row } from "reactstrap";
function PaymentInfo() {
  return (
    <Row className="d-flex flex-column align-items-center mt-3">
      <Col md={6}>
        <FormGroup className="error-l-100">
          <Label>Accuont owner</Label>
          <Field className="form-control" name="accountOwner" />
        </FormGroup>
        <FormGroup className="error-l-100">
          <Label>IBAN</Label>
          <Field className="form-control" name="iban" />
        </FormGroup>
      </Col>
    </Row>
  );
}

export default PaymentInfo;
