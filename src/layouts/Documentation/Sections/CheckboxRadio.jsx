import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import { Checkbox as SimpleCheckbox, Radio } from "components";

const codeSimpleExample = `<SimpleCheckbox
    label="Checked"
    inputProps={{defaultChecked: true}}
/>
<SimpleCheckbox
    label="Unchecked"
/>
<SimpleCheckbox
    label="Disabled Checked"
    inputProps={{checked: true,disabled:true}}
    formGroupProps={{className: "disabled"}}
/>
<SimpleCheckbox
    label="Disabled Unxhecked"
    inputProps={{disabled: true}}
    formGroupProps={{className: "disabled"}}
/>`;

const codeSimpleProp = `SimpleCheckbox.propTypes = {
    label: PropTypes.node,
    formGroupProps: PropTypes.object,
    labelProps: PropTypes.object,
    inputProps: PropTypes.object,
}`;

const codeRadioExample = `<Radio
    label="Checked"
    inputProps={{defaultChecked:true,name:"radio",value:"checked"}}
/>
<Radio
    label="Unchecked"
    inputProps={{name:"radio",value:"unchecked"}}
/>
<Radio
    label="Checked"
    inputProps={{disabled:true,defaultChecked:true,name:"dradio",value:"checked"}}
    formGroupProps={{className: "disabled"}}
/>
<Radio
    label="Unchecked"
    inputProps={{disabled:true,name:"dradio",value:"unchecked"}}
    formGroupProps={{className: "disabled"}}
/>`;

const codeRadioProp = `CustomRadio.propTypes = {
    label: PropTypes.node,
    formGroupProps: PropTypes.object,
    labelProps: PropTypes.object,
    inputProps: PropTypes.object,
}`;

class CheckboxRadioSwitch extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Checkboxes and Radios
        </h1>
        <p>
          Default checkboxes and radios have improved layout and behavior.
          Checkboxes are for selecting one or several options in a list, while
          radios are for selecting one option from many.
        </p>
        <p>
          Disabled checkboxes and radios are supported, but to provide a
          not-allowed cursor on hover, you’ll need to add the{" "}
          <code>.disabled</code> class to the <code>formGroupProps</code>. The
          disabled class will also lighten the text color to help indicate the
          input’s state.
        </p>
        <h2>SimpleCheckbox</h2>
        <div className="bd-example">
          <SimpleCheckbox
            label="Checked"
            inputProps={{ defaultChecked: true }}
          />
          <SimpleCheckbox label="Unchecked" />
          <SimpleCheckbox
            label="Disabled Checked"
            inputProps={{ checked: true, disabled: true }}
            formGroupProps={{ className: "disabled" }}
          />
          <SimpleCheckbox
            label="Disabled Unxhecked"
            inputProps={{ disabled: true }}
            formGroupProps={{ className: "disabled" }}
          />
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Checkbox } from 'components';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSimpleExample}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSimpleProp}
        </SyntaxHighlighter>
        <p>
          For more props (<code>formGroupProps</code>, <code>labelProps</code>{" "}
          and <code>inputProps</code>) please to{" "}
          <a
            href="https://reactstrap.github.io/components/form/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap documentation
          </a>.
        </p>
        <h2>Radios</h2>
        <div className="bd-example">
          <Radio
            label="Checked"
            inputProps={{
              defaultChecked: true,
              name: "radio",
              value: "checked"
            }}
          />
          <Radio
            label="Unchecked"
            inputProps={{ name: "radio", value: "unchecked" }}
          />
          <Radio
            label="Checked"
            inputProps={{
              disabled: true,
              defaultChecked: true,
              name: "dradio",
              value: "checked"
            }}
            formGroupProps={{ className: "disabled" }}
          />
          <Radio
            label="Unchecked"
            inputProps={{ disabled: true, name: "dradio", value: "unchecked" }}
            formGroupProps={{ className: "disabled" }}
          />
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Radio } from 'components';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRadioExample}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRadioProp}
        </SyntaxHighlighter>
        <p>
          For more props (<code>formGroupProps</code>, <code>labelProps</code>{" "}
          and <code>inputProps</code>) please to{" "}
          <a
            href="https://reactstrap.github.io/components/form/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default CheckboxRadioSwitch;
