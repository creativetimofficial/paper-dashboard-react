import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Row, Col, Card, CardBody } from "reactstrap";

import icons from "variables/icons";

const codeImport = `import icons from 'variables/icons';`;

const codeExample = `<Col lg={3} md={4} sm={5} xs={7} className="font-icon-list">
    <Card>
        <CardBody className="all-icons">
            <Row>
                <Col className="font-icon-list">
                    <div className="font-icon-detail">
                        <i className={"now-ui-icons " + icons[0]}></i>
                        <p>education_atom</p>
                    </div>
                </Col>
            </Row>
        </CardBody>
    </Card>
</Col>`;

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
          </a>.
        </p>
        <p>
          You will find all these icons in <code>src/variables/icons.jsx</code>.
        </p>
        <p>You can import all of them like so:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImport}
        </SyntaxHighlighter>
        <h3>Examples</h3>
        <div className="bd-example">
          <Col lg={3} md={4} sm={5} xs={7} className="font-icon-list">
            <Card>
              <CardBody className="all-icons">
                <Row>
                  <Col className="font-icon-list">
                    <div className="font-icon-detail">
                      <i className={"now-ui-icons " + icons[0]} />
                      <p>education_atom</p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Icons;
