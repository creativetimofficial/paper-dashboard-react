/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

function Upgrade() {
  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card className="card-upgrade">
              <CardHeader className="text-center">
                <CardTitle tag="h4">Paper Dashboard PRO</CardTitle>
                <p className="card-category">
                  Are you looking for more components? Please check our Premium
                  Version of Paper Dashboard PRO.
                </p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th />
                      <th className="text-center">Free</th>
                      <th className="text-center">PRO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Components</td>
                      <td className="text-center">16</td>
                      <td className="text-center">160</td>
                    </tr>
                    <tr>
                      <td>Plugins</td>
                      <td className="text-center">4</td>
                      <td className="text-center">13</td>
                    </tr>
                    <tr>
                      <td>Example Pages</td>
                      <td className="text-center">7</td>
                      <td className="text-center">27</td>
                    </tr>
                    <tr>
                      <td>Login, Register, Pricing, Lock Pages</td>
                      <td className="text-center">
                        <i className="nc-icon nc-simple-remove text-danger" />
                      </td>
                      <td className="text-center">
                        <i className="nc-icon nc-check-2 text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        DataTables, VectorMap, SweetAlert, Wizard,
                        jQueryValidation, FullCalendar etc...
                      </td>
                      <td className="text-center">
                        <i className="nc-icon nc-simple-remove text-danger" />
                      </td>
                      <td className="text-center">
                        <i className="nc-icon nc-check-2 text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td>Mini Sidebar</td>
                      <td className="text-center">
                        <i className="nc-icon nc-simple-remove text-danger" />
                      </td>
                      <td className="text-center">
                        <i className="nc-icon nc-check-2 text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td>Premium Support</td>
                      <td className="text-center">
                        <i className="nc-icon nc-simple-remove text-danger" />
                      </td>
                      <td className="text-center">
                        <i className="nc-icon nc-check-2 text-success" />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td className="text-center">Free</td>
                      <td className="text-center">From $49</td>
                    </tr>
                    <tr>
                      <td className="text-center" />
                      <td className="text-center">
                        <Button
                          className="btn-round disabled"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Current Version
                        </Button>
                      </td>
                      <td className="text-center">
                        <Button
                          className="btn-round"
                          color="primary"
                          href="https://www.creative-tim.com/product/paper-dashboard-2-pro?ref=pd-free-upgrade-live"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Upgrade to PRO
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Upgrade;
