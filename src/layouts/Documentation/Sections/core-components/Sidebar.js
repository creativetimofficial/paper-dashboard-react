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
import { Link } from "react-router-dom";

const codeUsage = `...other code

import Sidebar from "components/Sidebar/Sidebar.js";

...other code

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info"
    };
    ...other code
  }
  ...other code
  render() {
    return (
      ...other code
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
      ...other code
    );
  }
}

export default Dashboard;
`;

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="bd-page-title">
          <h1 className="bd-title" id="content">
            App Sidebar
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="bd-lead">
          This is the left menu that only appears inside the{" "}
          <code className="highlighter-rouge">src/layouts/Admin.js</code>.
        </p>
        <hr />
        <h2 id="primary-colors">Short description and usage</h2>
        <p>
          This component has some static and some dynamic stuff rendered inside
          it.
        </p>
        <p>
          The dynamic stuff is rendered via props. The links that appears inside
          it are dynamic. The brand logo is static.
        </p>
        <p>
          To see how the links should look like (since they are an object),
          please refer to our{" "}
          <Link to="/documentation/routing-system">routing system</Link>.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeUsage}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Sidebar;
