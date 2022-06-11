import { Field } from "formik";
import { FormGroup, Label, Col, Row } from "reactstrap";

function PersonalInfo() {
  return (
    <Row className="d-flex flex-column align-items-center mt-3">
      <Col md={6}>
        <FormGroup className="error-l-100">
          <Label>First Name</Label>
          <Field className="form-control" name="firstName" />
        </FormGroup>
        <FormGroup className="error-l-100">
          <Label>Last Name</Label>
          <Field className="form-control" name="lastName" />
        </FormGroup>
        <FormGroup className="error-l-100">
          <Label>Telephone</Label>
          <Field className="form-control" name="telephone" />
        </FormGroup>
      </Col>
    </Row>
  );
}

export default PersonalInfo;
