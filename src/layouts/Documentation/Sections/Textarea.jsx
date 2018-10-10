import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { FormGroup, Label, Input } from "reactstrap";

const codeExample = `<FormGroup>
    <Label for="exampleText">Label here</Label>
    <Input type="textarea" name="text" />
</FormGroup>`;

class Textarea extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Textarea
        </h1>
        <p className="bd-lead">
          We added custom style for the textarea, so it looks similar to all
          other inputs.
        </p>
        <div className="bd-example">
          <FormGroup>
            <Label for="exampleText">Label here</Label>
            <Input type="textarea" name="text" />
          </FormGroup>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <br />
        <br />
        <p>
          As you can see we've used the default react-bootstrap tags for this,
          the only changes were made in css, so you just have to import these
          tags from react-bootstrap like so:
        </p>
        <br />
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { FormGroup, Label, Input } from 'reactstrap';`}</SyntaxHighlighter>
        <br />
        <br />
        <br />
        <h2>Props</h2>
        <p>
          For props please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/form/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap's full documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default Textarea;
