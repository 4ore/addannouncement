import React, { Component } from "react";
import { FormGroup, Label, Input, Button, FormText } from "reactstrap";

export class Photography extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <FormGroup>
          <Label for="exampleFile">Фотографии</Label>
          <Input
            id="exampleFile"
            name="file"
            type="file"
            onChange={handleChange("photo")}
          />
           <Input
            id="exampleFile"
            name="file"
            type="file"
            onChange={handleChange("photo")}
          />
           <Input
            id="exampleFile"
            name="file"
            type="file"
            onChange={handleChange("photo")}
          />
           <Input
            id="exampleFile"
            name="file"
            type="file"
            onChange={handleChange("photo")}
          />
           <Input
            id="exampleFile"
            name="file"
            type="file"
            onChange={handleChange("photo")}
          />
          <FormText>
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <br />
        <Button color="false" onClick={this.back}>
          Prev
        </Button>
        <Button color="primary" onClick={this.continue}>
          Next
        </Button>
      </div>
    );
  }
}

export default Photography;
