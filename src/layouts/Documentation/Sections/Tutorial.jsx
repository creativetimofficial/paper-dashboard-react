import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const fileStructure = ``;

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Short Description and Usage
        </h1>
        <p className="bd-lead">
          Paper Dashboard React is a beautiful{" "}
          <a
            href="https://reactstrap.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap - Bootstrap 4
          </a>{" "}(<a
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            create-react-app
          </a>)
          Admin Template.
        </p>
        <p>
          Using the dashboard is very simple, but it does require you to
          understand basic JavaScript functions, react and reactstrap. To get
          the desired effect you will need to integrate react components and JS
          plugins that take a little bit more effort. Down below we list all the
          files you need to include inside the application to get going.
        </p>
        <h1 className="bd-title" id="content">
          License
        </h1>
        <p className="bd-lead">
          <b>MIT LICENSE</b>
          <br />Copyright (c) {1900 + new Date().getYear()}{" "}
          <a href="https://creative-tim.com/" target="_blank">
            Creative Tim
          </a>.
        </p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <h1 className="bd-title" id="content">
          Getting Started
        </h1>
        <p className="bd-lead">
          The Paper Dashboard React is built on top of{" "}
          <a
            href="https://reactstrap.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap
          </a>{" "}
          (Bootstrap 4 beta), so you can safely use it on your existing or new
          Reactstrap project. No line of code from Bootstrap 4 beta was changed,
          so you don't have to worry about undesired effects in your work.
        </p>
        <p>
          We provide all the necessary CSS resources. So, to immediately change
          or get started with our design, include the{" "}
          <code>src/assets/scss/now-ui-dashboard.css</code> in your template.
          Your project will get the new look.
        </p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeJs Official Page
            </a>
          </li>
          <li>
            Go to{" "}
            <a href="https://www.creative-tim.com/" target="_blank">
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/now-ui-dashboard-react"
              target="_blank"
            >
              Paper dashboard react
            </a>{" "}
            page on creative tim website (be sure to be logged into your
            account)
          </li>
          <li>
            Press the <b>FREE DOWNLOAD</b> button (this will download onto your
            computer a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm start`}</SyntaxHighlighter>
          </li>
          <li>
            You can also run instead of the above commands{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install:clean`}</SyntaxHighlighter>{" "}
            which will delete the <code>node_modules</code> and{" "}
            <code>package_lock.json</code> from your project and make a clean
            install of them
          </li>
          <li>
            If you have an error something containing
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`Module not found`}</SyntaxHighlighter>
            you need to do the following
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install --g cross-env`}</SyntaxHighlighter>
            then change the script, for example the start script from
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "npm-run-all -p watch-css start-js",`}</SyntaxHighlighter>
            to
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "NODE_PATH=./src npm-run-all -p watch-css start-js",`}</SyntaxHighlighter>
            <b>
              The same should be done with any other script that has the above
              error.
            </b>
          </li>
          <li>
            If you have an error containing{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`props.history of undefined`}</SyntaxHighlighter>{" "}
            (this can happen when you integrate our project with another one)
            then you need to make the changes found{" "}
            <a
              href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              here
            </a>
          </li>
          <li>
            (Optional) You can create a new react application like this
            <ul>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm install -g create-react-app`}</SyntaxHighlighter>
              </li>
              <li>Go to the folder where you want to create your app</li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`create-react-app your-app-name`}</SyntaxHighlighter>
              </li>
              <li>
                Navigate to <code>your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                More information →{" "}
                <a
                  href="https://github.com/facebookincubator/create-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to{" "}
            <a
              href="https://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://localhost:3000
            </a>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              react
            </a>
          </li>
        </ul>
        <h1 className="bd-title" id="content">
          File structure
        </h1>
        <SyntaxHighlighter language="bash" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Tutorial;
