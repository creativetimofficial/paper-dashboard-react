/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Row, Col } from "reactstrap";

class Overview extends React.Component {
  render() {
    return (
      <>
        <div className="bd-page-title">
          <h1 className="bd-title" id="content">
            Argon - Design System
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="bd-lead">
          An user-friendly, open source and beautiful design system based on
          Bootstrap 4 using{" "}
          <a href="https://reactjs.org/?ref=creativetim" target="_blank">
            React
          </a>
          ,{" "}
          <a
            href="https://reactstrap.github.io/?ref=creativetim"
            target="_blank"
          >
            Reactstrap
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/facebook/create-react-app?ref=creativetim"
            target="_blank"
          >
            create-react-app
          </a>
          .
        </p>
        <hr />
        <p>
          We at Creative Tim have always wanted to deliver great tools to all
          the web developers. We want to see better websites and web apps on the
          internet. Argon design
        </p>
        <h3 id="resources-and-credits">Resources and credits</h3>
        <p>
          This Design System is fully coded and built on top of Open Source,
          more details here:
        </p>
        <ul>
          <li>
            <a href="https://www.getbootstrap.com?ref=creativetim">
              Bootstrap 4
            </a>
            - Open source front end framework
          </li>
          <li>
            <a href="https://reactjs.org/?ref=creativetim">React</a>- Easy to
            use React Bootstrap 4 components
          </li>
          <li>
            <a href="https://facebook.github.io/create-react-app/?ref=creativetim">
              create-react-app
            </a>
            - Whether you’re using React or another library, Create React App
            lets you focus on code, not build tools.
          </li>
          <li>
            <a
              href="https://reactstrap.github.io/?ref=creativetim"
              target="_blank"
            >
              Reactstrap
            </a>
            - Easy to use React Bootstrap 4 components
          </li>
        </ul>
        <h3 id="learn-more">Learn more</h3>
        <p>
          Stay up to date on the development journey and connect with us on:
        </p>
        <ul>
          <li>
            Follow{" "}
            <a href="https://twitter.com/creativetim?ref=creativetim">
              Creative Tim on Twitter
            </a>
            .
          </li>
          <li>
            Read and subscribe to{" "}
            <a href="http://blog.creative-tim.com?ref=pdr-documentation-sidebar">
              The Official Creative Tim Blog
            </a>
            .
          </li>
          <li>
            Follow{" "}
            <a href="https://www.instagram.com/creativetimofficial?ref=creativetim">
              Creative Tim on Instagram
            </a>
            .
          </li>
          <li>
            Follow{" "}
            <a href="https://www.facebook.com/creativetim?ref=creativetim">
              Creative Tim on Facebook
            </a>
            .
          </li>
        </ul>
        <h3 id="quick-start">Quick start</h3>
        <p>
          <Button
            className="my-4"
            color="primary"
            to="/documentation/quick-start"
            tag={Link}
          >
            Quick start here
          </Button>
        </p>
      </>
    );
  }
}

export default Overview;
