import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Link } from "react-router-dom";

import { Tasks as Taskss } from "components";

import { tasks } from "variables/general.jsx";

const codeImport = `import { Tasks } from 'components';
import { tasks } from 'variables/general.jsx';`;
const codeExample = `<Tasks tasks={tasks}/>`;
class Tasks extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Tasks
        </h1>
        <p className="bd-lead">
          We've created a special component to render the tasks list shown in{" "}
          <Link to="/widgets">Widgets</Link> <code>Task</code> card.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <h2>Example code</h2>
        <div className="bd-example">
          <Taskss tasks={tasks} />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <p>
          In this example we've passed our own tasks in the <code>tasks</code>{" "}
          prop which you'll find in <code>src/variables/general.jsx</code>. This
          prop has to be an array of strings.
        </p>
        <p>
          If you want to understand this component better, please take a look
          inside <code>src/components/Tasks/Tasks.jsx</code> file.
        </p>
      </div>
    );
  }
}

export default Tasks;
