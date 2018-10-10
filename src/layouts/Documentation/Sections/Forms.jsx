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

const overviewExample = `import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

const Forms = () => {
  return (
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
  );
};

export default Forms;
`;

const Forms = () => {
  return (
    <>
      <h1 className="bd-title" id="content">
        Forms
      </h1>
      <p className="bd-lead">
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
      <h3>Form controls</h3>
      <p>Textual form controls—like {`<Input>`}s are styled through the <code>.form-control</code> class. Included are styles for general appearance, focus state, sizing, and more.</p>
      <div className="bd-example">
        <form>
          <FormGroup>
          <Label for="exampleEmail1">Email address</Label>
          <Input type="email" name="email" id="exampleEmai1l" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect1">Example select</Label>
          <Input type="select" name="select" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti1">Example multiple select</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti1" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Example textarea</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        </form>
      </div>
    </>
  );
};

export default Forms;
