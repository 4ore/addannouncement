import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export class Publish extends Component {
  
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  saveData = (e) =>{
    const FormData = {
      header : this.props.values.header,
      description: this.props.values.description,
      status: this.props.values.status,
      phoneNumber: this.props.values.phoneNumber,
      email: this.props.values.email,
      photo: this.props.values.photo,
      checkbox1: this.props.values.checkbox1,
      checkbox2: this.props.values.checkbox2,
      checkbox3: this.props.values.checkbox3,
      checkbox4: this.props.values.checkbox4,
      checkbox5: this.props.values.checkbox1
    }
    console.log(FormData)
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h1>Платные услуги</h1>
        <Form>
          <FormGroup check inline>
            <Input
              type="checkbox"
              onChange={handleChange("checkbox1")}
              defaultValue={values.checkbox1}
            />
            <Label check>checkbox1</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input
              type="checkbox"
              onChange={handleChange("checkbox2")}
              defaultValue={values.checkbox2}
            />
            <Label check>checkbox2</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input
              type="checkbox"
              onChange={handleChange("checkbox3")}
              defaultValue={values.checkbox3}
            />
            <Label check>checkbox3</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input
              type="checkbox"
              onChange={handleChange("checkbox4")}
              defaultValue={values.checkbox4}
            />
            <Label check>checkbox4</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input
              type="checkbox"
              onChange={handleChange("checkbox5")}
              defaultValue={values.checkbox5}
            />
            <Label check>checkbox5</Label>
          </FormGroup>
        </Form>
        <Button color="false" onClick={this.back}>
          Prev
        </Button>
        <Button color="primary" onClick={this.saveData}>
          Save
        </Button>
      </div>
    );
  }
}

export default Publish;
