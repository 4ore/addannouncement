import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { Input, FormGroup, Col, Label, Button } from "reactstrap";

export class MainInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h1>Main Info</h1>
        <Input
          onChange={handleChange("header")}
          placeholder="Заголовок Обьявления"
          defaultValue={values.header}
          required
        />
        <br />
        <Input
          onChange={handleChange("description")}
          defaultValue={values.description}
          type="textarea"
          placeholder="Описание"
        />
        <br />
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Статус
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
              <option>On</option>
              <option>Off</option>
            </Input>
          </Col>
        </FormGroup>
        <br />
        <Button color="primary" onClick={this.continue}>
          Next
        </Button>
      </div>
    );
  }
}

export default MainInfo;
