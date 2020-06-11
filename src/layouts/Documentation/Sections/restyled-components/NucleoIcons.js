/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeImport = `import icons from 'variables/icons';`;

const codeExample = `<i className="nc-icon nc-single-02"></i>`;

class Icons extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Icons
        </h1>
        <p className="bd-lead">
          For this dashboard we've used 100 awesome nucleo icons handcrafted by
          our friends from{" "}
          <a href="https://nucleoapp.com/?ref=1712" target="_blank">
            NucleoApp
          </a>
          .
        </p>
        <p>
          You will find all these icons in <code>src/variables/icons.js</code>.
        </p>
        <p>You can import all of them like so:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <h3>Examples</h3>
        <div className="bd-example">
          <i className="nc-icon nc-single-02" />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Icons;
