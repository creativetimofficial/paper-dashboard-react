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
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

// reactstrap components
// import {
// } from "reactstrap";

const codeExample1 = `import React from "react";

class InfoAreas extends React.Component {
  render() {
    return (
      <>
          <div className="info">
            <div className="icon icon-primary">
              <i className="nc-icon nc-watch-time" />
            </div>
            <h4 className="info-title">Free Chat</h4>
            <p>
              Divide details about your product or agency work into parts.
              Write a few lines about each one. A paragraph describing a
              feature will be enough.
            </p>
          </div>
      </>
    );
  }
}

export default InfoAreas;
`;
const codeExample2 = `import React from "react";

class InfoAreas extends React.Component {
  render() {
    return (
      <>
          <div className="info info-horizontal">
            <div className="icon icon-rose">
              <i className="nc-icon nc-trophy" />
            </div>
            <div className="description">
              <h4 className="info-title">Collaborate</h4>
              <p>
                The moment you use Material Kit, you know you’ve never felt
                anything like it. With a single use, this powerfull UI Kit
                lets you do more than ever before.
              </p>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                Find more...
              </a>
            </div>
          </div>
      </>
    );
  }
}

export default InfoAreas;
`;

class InfoAreas extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Info Areas
        </h1>
        <p className="bd-lead" />
        <p>
          The information areas are a simple way to organise large amounts of
          information into chunks. You can also add icons, simple or coloured.
          For an horizontal alignment use the custom class .{" "}
          <code className="highlighter-rouge">.info-horizontal</code>. For the
          title, please use the class{" "}
          <code className="highlighter-rouge">.info-title</code>. You can see
          more illustrative examples below:
        </p>
        <div className="bd-example" data-example-id="">
          <div className="info">
            <div className="icon icon-primary">
              <i className="nc-icon nc-watch-time" />
            </div>
            <h4 className="info-title">Free Chat</h4>
            <p>
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample1}
        </SyntaxHighlighter>
        <div className="bd-example" data-example-id="">
          <div className="info info-horizontal">
            <div className="icon icon-rose">
              <i className="nc-icon nc-trophy" />
            </div>
            <div className="description">
              <h4 className="info-title">Collaborate</h4>
              <p>
                The moment you use Material Kit, you know you’ve never felt
                anything like it. With a single use, this powerfull UI Kit lets
                you do more than ever before.
              </p>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                Find more...
              </a>
            </div>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample2}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default InfoAreas;
