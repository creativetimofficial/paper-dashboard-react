import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import { FormInputs, CardAuthor, CardSocials } from "components";
import Button from "components/CustomButton/CustomButton.jsx";

import userBackground from "assets/img/bg5.jpg";
import userAvatar from "assets/img/mike.jpg";

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src={userBackground} alt="..." />
              </div>
              <CardBody>
                <CardAuthor
                  avatar={userAvatar}
                  avatarAlt="..."
                  title="Chet Faker"
                  description="chetfaker"
                />
                <p className="description text-center">
                  "I like the way you work it<br/>
                    No diggity <br/>
                    I wanna bag it up"
                </p>
              </CardBody>
              <hr />
              <CardSocials
                size="lg"
                socials={[
                  {
                    icon: "fab fa-facebook-f",
                    href: "https://www.facebook.com/"
                  },
                  {
                    icon: "fab fa-twitter",
                    href: "https://www.facebook.com/"
                  },
                  {
                    icon: "fab fa-google-plus-g",
                    href: "https://plus.google.com/discover"
                  }
                ]}
              />
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
                          rows: "4",
                          cols: "80",
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
