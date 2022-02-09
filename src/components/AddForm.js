import React, { Component } from "react";
import MainInfo from "./MainInfo";
import ContactInfo from "./ContactInfo";
import Photography from "./Photography";
import Publish from "./Publish";

export class AddForm extends Component {
  state = {
    step: 1,
    header: "",
    headerError: "",
    description: "",
    status: "",
    phoneNumber: "",
    phoneNumberError: "",
    email: "",
    photo: "",
    checkbox1: "",
    checkbox2: "",
    checkbox3: "",
    checkbox4: "",
    checkbox5: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };


  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      header,
      headerError,
      description,
      email,
      phoneNumber,
      status,
      photo,
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5,
    } = this.state;
    const values = {
      header,
      headerError,
      description,
      email,
      phoneNumber,
      status,
      photo,
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5,
    };

    switch (step) {
      case 1:
        return (
          <MainInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ContactInfo
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Photography
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Publish
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default AddForm;
