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

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="bd-page-title">
          <h1 className="bd-title" id="content">
            Demo navbars
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="bd-lead">
          In our template product, we have one demo navbars that can be found
          inside{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/DemoNavbar.js
          </code>
          .
        </p>
        <p>
          It has a nice feature that makes the left menu close and open on small
          devices. You can check this code inside this file at lines{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/DemoNavbar.js
          </code>
          117 and 64-67.
        </p>
        <p>Everything else is static, so feel free to change it as you wish.</p>
      </>
    );
  }
}

export default Navbar;
