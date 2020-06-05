/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const icons = [
  {
    name: "nc-air-baloon",
    content: "\\ea01"
  },
  {
    name: "nc-album-2",
    content: "\\ea02"
  },
  {
    name: "nc-alert-circle-i",
    content: "\\ea04"
  },
  {
    name: "nc-align-center",
    content: "\\ea03"
  },
  {
    name: "nc-align-left-2",
    content: "\\ea05"
  },
  {
    name: "nc-ambulance",
    content: "\\ea06"
  },
  {
    name: "nc-app",
    content: "\\ea07"
  },
  {
    name: "nc-atom",
    content: "\\ea08"
  },
  {
    name: "nc-badge",
    content: "\\ea09"
  },
  {
    name: "nc-bag-16",
    content: "\\ea0a"
  },
  {
    name: "nc-bank",
    content: "\\ea0b"
  },
  {
    name: "nc-basket",
    content: "\\ea0c"
  },
  {
    name: "nc-bell-55",
    content: "\\ea0d"
  },
  {
    name: "nc-bold",
    content: "\\ea0e"
  },
  {
    name: "nc-book-bookmark",
    content: "\\ea0f"
  },
  {
    name: "nc-bookmark-2",
    content: "\\ea10"
  },
  {
    name: "nc-box-2",
    content: "\\ea11"
  },
  {
    name: "nc-box",
    content: "\\ea12"
  },
  {
    name: "nc-briefcase-24",
    content: "\\ea13"
  },
  {
    name: "nc-bulb-63",
    content: "\\ea14"
  },
  {
    name: "nc-bullet-list-67",
    content: "\\ea15"
  },
  {
    name: "nc-bus-front-12",
    content: "\\ea16"
  },
  {
    name: "nc-button-pause",
    content: "\\ea17"
  },
  {
    name: "nc-button-play",
    content: "\\ea18"
  },
  {
    name: "nc-button-power",
    content: "\\ea19"
  },
  {
    name: "nc-calendar-60",
    content: "\\ea1a"
  },
  {
    name: "nc-camera-compact",
    content: "\\ea1b"
  },
  {
    name: "nc-caps-small",
    content: "\\ea1c"
  },
  {
    name: "nc-cart-simple",
    content: "\\ea1d"
  },
  {
    name: "nc-chart-bar-32",
    content: "\\ea1e"
  },
  {
    name: "nc-chart-pie-36",
    content: "\\ea1f"
  },
  {
    name: "nc-chat-33",
    content: "\\ea20"
  },
  {
    name: "nc-check-2",
    content: "\\ea21"
  },
  {
    name: "nc-circle-10",
    content: "\\ea22"
  },
  {
    name: "nc-cloud-download-93",
    content: "\\ea23"
  },
  {
    name: "nc-cloud-upload-94",
    content: "\\ea24"
  },
  {
    name: "nc-compass-05",
    content: "\\ea25"
  },
  {
    name: "nc-controller-modern",
    content: "\\ea26"
  },
  {
    name: "nc-credit-card",
    content: "\\ea27"
  },
  {
    name: "nc-delivery-fast",
    content: "\\ea28"
  },
  {
    name: "nc-diamond",
    content: "\\ea29"
  },
  {
    name: "nc-email-85",
    content: "\\ea2a"
  },
  {
    name: "nc-favourite-28",
    content: "\\ea2b"
  },
  {
    name: "nc-glasses-2",
    content: "\\ea2c"
  },
  {
    name: "nc-globe-2",
    content: "\\ea2d"
  },
  {
    name: "nc-globe",
    content: "\\ea2e"
  },
  {
    name: "nc-hat-3",
    content: "\\ea2f"
  },
  {
    name: "nc-headphones",
    content: "\\ea30"
  },
  {
    name: "nc-html5",
    content: "\\ea31"
  },
  {
    name: "nc-image",
    content: "\\ea32"
  },
  {
    name: "nc-istanbul",
    content: "\\ea33"
  },
  {
    name: "nc-key-25",
    content: "\\ea34"
  },
  {
    name: "nc-laptop",
    content: "\\ea35"
  },
  {
    name: "nc-layout-11",
    content: "\\ea36"
  },
  {
    name: "nc-lock-circle-open",
    content: "\\ea37"
  },
  {
    name: "nc-map-big",
    content: "\\ea38"
  },
  {
    name: "nc-minimal-down",
    content: "\\ea39"
  },
  {
    name: "nc-minimal-left",
    content: "\\ea3a"
  },
  {
    name: "nc-minimal-right",
    content: "\\ea3b"
  },
  {
    name: "nc-minimal-up",
    content: "\\ea3c"
  },
  {
    name: "nc-mobile",
    content: "\\ea3d"
  },
  {
    name: "nc-money-coins",
    content: "\\ea3e"
  },
  {
    name: "nc-note-03",
    content: "\\ea3f"
  },
  {
    name: "nc-palette",
    content: "\\ea40"
  },
  {
    name: "nc-paper",
    content: "\\ea41"
  },
  {
    name: "nc-pin-3",
    content: "\\ea42"
  },
  {
    name: "nc-planet",
    content: "\\ea43"
  },
  {
    name: "nc-refresh-69",
    content: "\\ea44"
  },
  {
    name: "nc-ruler-pencil",
    content: "\\ea45"
  },
  {
    name: "nc-satisfied",
    content: "\\ea46"
  },
  {
    name: "nc-scissors",
    content: "\\ea47"
  },
  {
    name: "nc-send",
    content: "\\ea48"
  },
  {
    name: "nc-settings-gear-65",
    content: "\\ea49"
  },
  {
    name: "nc-settings",
    content: "\\ea4a"
  },
  {
    name: "nc-share-66",
    content: "\\ea4b"
  },
  {
    name: "nc-shop",
    content: "\\ea4c"
  },
  {
    name: "nc-simple-add",
    content: "\\ea4d"
  },
  {
    name: "nc-simple-delete",
    content: "\\ea4e"
  },
  {
    name: "nc-simple-remove",
    content: "\\ea4f"
  },
  {
    name: "nc-single-02",
    content: "\\ea50"
  },
  {
    name: "nc-single-copy-04",
    content: "\\ea51"
  },
  {
    name: "nc-sound-wave",
    content: "\\ea52"
  },
  {
    name: "nc-spaceship",
    content: "\\ea53"
  },
  {
    name: "nc-sun-fog-29",
    content: "\\ea54"
  },
  {
    name: "nc-support-17",
    content: "\\ea55"
  },
  {
    name: "nc-tablet-2",
    content: "\\ea56"
  },
  {
    name: "nc-tag-content",
    content: "\\ea57"
  },
  {
    name: "nc-tap-01",
    content: "\\ea58"
  },
  {
    name: "nc-tie-bow",
    content: "\\ea59"
  },
  {
    name: "nc-tile-56",
    content: "\\ea5a"
  },
  {
    name: "nc-time-alarm",
    content: "\\ea5b"
  },
  {
    name: "nc-touch-id",
    content: "\\ea5c"
  },
  {
    name: "nc-trophy",
    content: "\\ea5d"
  },
  {
    name: "nc-tv-2",
    content: "\\ea5e"
  },
  {
    name: "nc-umbrella-13",
    content: "\\ea5f"
  },
  {
    name: "nc-user-run",
    content: "\\ea60"
  },
  {
    name: "nc-vector",
    content: "\\ea61"
  },
  {
    name: "nc-watch-time",
    content: "\\ea62"
  },
  {
    name: "nc-world-2",
    content: "\\ea63"
  },
  {
    name: "nc-zoom-split",
    content: "\\ea64"
  }
];

export default icons;
