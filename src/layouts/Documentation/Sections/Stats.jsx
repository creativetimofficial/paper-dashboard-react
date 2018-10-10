import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import { Stats } from "components";

const codeExample = `<Stats>
    {[
        { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
    ]}
</Stats>`;

const codeProps = `Stats.propTypes = {
    // example : [{ i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}, { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}, ...]
    // i: icon of the stat
    // t: text of the stat
    children: PropTypes.arrayOf(PropTypes.object)
}`;

class Stat extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Stats Component
        </h1>
        <p className="bd-lead">
          We've added a special component to make it easier to render multiple
          stats in your app, for example in cards footer. You will see this
          component used in multiple cards, in the footers.
        </p>
        <p>To use this component you need the following import:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import {Statistics} from 'components';`}</SyntaxHighlighter>
        <h2>Example</h2>
        <div className="bd-example">
          <Stats>
            {[{ i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated" }]}
          </Stats>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeProps}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Stat;
