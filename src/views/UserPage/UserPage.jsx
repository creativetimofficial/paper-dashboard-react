import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src={damirBosnjak} alt="..." />
              </div>
              <CardBody>
                <CardAuthor
                  avatar={mike}
                  avatarAlt="..."
                  title="Chet Faker"
                  description="@chetfaker"
                />
                <p className="description text-center">
                  "I like the way you work it{" "}<br/>
                    No diggity <br/>
                    I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={3} className="ml-auto">
                      <h5>
                        12
                        <br/>
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                      <h5>
                        2GB
                        <br/>
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col lg={3} className="mr-auto">
                      <h5>
                        24,6$
                        <br/>
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src={ayoOgunseinde2} alt="ayoOgunseinde2" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        DJ Khaled
                        <br />
                        <span className="text-muted">
                          <small>
                          Offline
                        </small>
                        </span>
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src={joeGardner2} alt="joeGardner2" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        Creative Tim
                        <br />
                        <span className="text-success">
                          <small>
                          Available
                        </small>
                        </span>
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src={clemOnojeghuo2} alt="clemOnojeghuo2" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        Flume
                        <br />
                        <span className="text-danger">
                          <small>
                          Busy
                        </small>
                        </span>
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-5 pr-1", "col-md-3 px-1", "col-md-4 pl-1"]}
                    proprieties={[
                      {
                        label: "Company (disabled)",
                        inputProps: {
                          type: "text",
                          disabled: true,
                          defaultValue: "Creative Code Inc."
                        }
                      },
                      {
                        label: "Username",
                        inputProps: {
                          type: "text",
                          defaultValue: "chetfaker"
                        }
                      },
                      {
                        label: "Email address",
                        inputProps: {
                          type: "email",
                          placeholder: "Email"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "First Name",
                        inputProps: {
                          type: "text",
                          placeholder: "First Name",
                          defaultValue: "Chet"
                        }
                      },
                      {
                        label: "Last Name",
                        inputProps: {
                          type: "text",
                          placeholder: "Last Name",
                          defaultValue: "Faker"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Address",
                        inputProps: {
                          type: "text",
                          placeholder: "Home Address",
                          defaultValue:
                            "Melbourne, Australia"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4 pr-1", "col-md-4 px-1", "col-md-4 pl-1"]}
                    proprieties={[
                      {
                        label: "City",
                        inputProps: {
                          type: "text",
                          defaultValue: "Melbourne",
                          placeholder: "City"
                        }
                      },
                      {
                        label: "Country",
                        inputProps: {
                          type: "text",
                          defaultValue: "Australia",
                          placeholder: "Country"
                        }
                      },
                      {
                        label: "Postal Code",
                        inputProps: {
                          type: "number",
                          placeholder: "ZIP Code"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "About Me",
                        inputProps: {
                          type: "textarea",
                          defaultValue:
                            "Oh so, your weak rhyme You doubt I'll bother, reading into it",
                          placeholder: "Here can be your description"
                        }
                      }
                    ]}
                  />
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>Update Profile</Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
