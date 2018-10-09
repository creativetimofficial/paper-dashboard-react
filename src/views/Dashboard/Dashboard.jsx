import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import Stats from "components/Stats/Stats.jsx";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Capacity</p>
                      <CardTitle tag="p">150GB</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-sync-alt",
                      t: "Update Now"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <CardTitle tag="p">$ 1,345</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "far fa-calendar",
                      t: "Last day"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Errors</p>
                      <CardTitle tag="p">23</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "far fa-clock",
                      t: "In the last hour"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <CardTitle tag="p">+45K</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-sync-alt",
                      t: "Update now"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle>Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-calendar-alt",
                      t: " Number of emails sent"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>NASDAQ: AAPL</CardTitle>
                <p className="card-category">Line Chart With Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                  <i className="fa fa-circle text-warning" /> BMW 5 Series
                </div>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-check",
                      t: " Data information certified"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
