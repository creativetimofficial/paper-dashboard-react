/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
// import { Card, Row, Col } from "reactstrap";

const fileStructure = `Paper Dashboard React
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── docs
│   └── documentation.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   └── DemoNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    ├── layouts
    │   └── Admin.js
    ├── variables
    │   ├── charts.js
    │   ├── general.js
    │   └── icons.js
    ├── views
    │   ├── Dashboard.js
    │   ├── Icons.js
    │   ├── Map.js
    │   ├── Notifications.js
    │   ├── Tables.js
    │   ├── Typography.js
    │   ├── Upgrade.js
    │   └── User.js
    └── assets
        ├── css
        │   ├── paper-dashboard.css
        │   ├── paper-dashboard.css.map
        │   └── paper-dashboard.min.css
        ├── demo
        ├── fonts
        ├── github
        ├── img
        │   └── faces
        └── scss
            ├── paper-dashboard
            │   ├── cards
            │   ├── mixins
            │   ├── plugins
            │   └── react
            │       ├── custom
            │       └── react-differences.scss
            └── paper-dashboard.scss`;

class Contents extends React.Component {
  render() {
    return (
      <>
        <div className="bd-page-title">
          <h1 className="bd-title" id="content">
            Contents
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="bd-lead">
          Discover what's included in Paper Dashboard React
        </p>
        <hr />
        <h2 id="argon-structure">Paper Dashboard React structure</h2>
        <p>
          Once downloaded, unzip the compressed folder and you’ll see something
          like this:
        </p>
        <SyntaxHighlighter language="html" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Contents;
