import React, { Component } from "react";
import { Input, Button } from "reactstrap";

export class ContactInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    
    if(this.props.values.phoneNumber){
    this.props.nextStep();
    } 
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    if(!values.phoneNumber){this.phoneNumberError = 'Обязательное поле'}
    return (
      <div>
        <h1>Contact Info</h1>
        <Input
          onChange={handleChange("phoneNumber")}
          defaultValue={values.phoneNumber}
          placeholder="номер телефона"
          required
        />
        <div>{this.phoneNumberError}</div>
        <br />
        <Input
          onChange={handleChange("email")}
          placeholder="email"
          defaultValue={values.email}
        />
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

export default ContactInfo;
