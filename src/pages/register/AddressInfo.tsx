import { Field } from "formik";
import { FormGroup, Label, Col, Row } from "reactstrap";

function AddressInfo() {
  return (
    <Row className="d-flex flex-column align-items-center mt-3">
      <Col md={6}>
        <FormGroup className="error-l-100">
          <Label>Street</Label>
          <Field className="form-control" name="street" />
        </FormGroup>
        <FormGroup className="error-l-100">
          <Label>House number</Label>
          <Field className="form-control" name="houseNumber" />
        </FormGroup>
        <FormGroup className="error-l-100">
          <Label>Zip Code</Label>
          <Field className="form-control" name="zipCode" />
        </FormGroup>
        <FormGroup className="error-l-100">
          <Label>City</Label>
          <Field className="form-control" name="city" />
        </FormGroup>
      </Col>
    </Row>
  );
}

export default AddressInfo;
