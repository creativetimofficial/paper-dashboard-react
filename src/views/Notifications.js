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
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function Notifications() {
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Notifications</CardTitle>
                <p className="card-category">
                  Handcrafted by our former colleague{" "}
                  <a
                    target="_blank"
                    href="https://www.instagram.com/manu.nazare/"
                  >
                    Nazare Emanuel-Ioan (Manu)
                  </a>
                  . Please checkout the{" "}
                  <a
                    href="https://github.com/creativetimofficial/react-notification-alert"
                    target="_blank"
                  >
                    full documentation.
                  </a>
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Notifications Style</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Alert color="info">
                          <span>This is a plain notification</span>
                        </Alert>
                        <UncontrolledAlert color="info" fade={false}>
                          <span>This is a notification with close button.</span>
                        </UncontrolledAlert>
                        <UncontrolledAlert
                          className="alert-with-icon"
                          color="info"
                          fade={false}
                        >
                          <span
                            data-notify="icon"
                            className="nc-icon nc-bell-55"
                          />
                          <span data-notify="message">
                            This is a notification with close button and icon.
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert
                          className="alert-with-icon"
                          color="info"
                          fade={false}
                        >
                          <span
                            data-notify="icon"
                            className="nc-icon nc-chart-pie-36"
                          />
                          <span data-notify="message">
                            This is a notification with close button and icon
                            and have many lines. You can see that the icon and
                            the close button are always vertically aligned. This
                            is a beautiful notification. So you don't have to
                            worry about the style.
                          </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Notification states</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <UncontrolledAlert color="primary" fade={false}>
                          <span>
                            <b>Primary - </b>
                            This is a regular notification made with
                            color="primary"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="info" fade={false}>
                          <span>
                            <b>Info - </b>
                            This is a regular notification made with
                            color="info"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="success" fade={false}>
                          <span>
                            <b>Success - </b>
                            This is a regular notification made with
                            color="success"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" fade={false}>
                          <span>
                            <b>Warning - </b>
                            This is a regular notification made with
                            color="warning"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="danger" fade={false}>
                          <span>
                            <b>Danger - </b>
                            This is a regular notification made with
                            color="danger"
                          </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">Notifications Places</CardTitle>
                      <p className="category">Click to view notifications</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tl")}
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
