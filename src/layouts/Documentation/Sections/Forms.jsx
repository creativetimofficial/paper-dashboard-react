import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import {
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

const overviewExample = ``;

const Forms = () => {
  return (
    <>
      <h1 class="bd-title" id="content">
        Forms
      </h1>
      <p class="bd-lead">
        Examples and usage guidelines for form control styles, layout options,
        and custom components for creating a wide variety of forms.
      </p>
      <h3>Overview</h3>
      <p>
        Here’s a quick example to demonstrate Bootstrap’s form styles. Keep
        reading for documentation on required classes, form layout, and more.
      </p>
      <div className="bd-example">
        <form>
          <FormGroup>
            <Label for="exampleEmail">Email address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email"
            />
            <FormText color="muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>
          <i className="fas fa-check"></i>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Check me out
              <span className="form-check-sign">
                <span className="check"></span>
            </span>
            </Label>
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {overviewExample}
      </SyntaxHighlighter>
    </>
  );
};

export default Forms;
