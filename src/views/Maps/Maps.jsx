import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
          "featureType": "water",
          "stylers": [{
            "saturation": 43
          }, {
            "lightness": -11
          }, {
            "hue": "#0088ff"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{
            "hue": "#ff0000"
          }, {
            "saturation": -100
          }, {
            "lightness": 99
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#808080"
          }, {
            "lightness": 54
          }]
        }, {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ece2d9"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ccdca1"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#767676"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "poi",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#b8cb93"
          }]
        }, {
          "featureType": "poi.park",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "poi.sports_complex",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "poi.medical",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "poi.business",
          "stylers": [{
            "visibility": "simplified"
          }]
        }]
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

class FullScreenMap extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>Google Maps</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FullScreenMap;
