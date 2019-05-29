// Getting started
import Alerts from "layouts/Documentation/Sections/restyled-components/Alerts.jsx";
import Breadcrumb from "layouts/Documentation/Sections/restyled-components/Breadcrumb.jsx";
import Buttons from "layouts/Documentation/Sections/restyled-components/Buttons.jsx";
import Card from "layouts/Documentation/Sections/restyled-components/Card.jsx";
import Colors from "layouts/Documentation/Sections/restyled-components/Colors.jsx";
import Dropdowns from "layouts/Documentation/Sections/restyled-components/Dropdowns.jsx";
import Forms from "layouts/Documentation/Sections/restyled-components/Forms.jsx";
import InfoAreas from "layouts/Documentation/Sections/restyled-components/InfoAreas.jsx";
import Navs from "layouts/Documentation/Sections/restyled-components/Navs.jsx";
import NucleoIcons from "layouts/Documentation/Sections/restyled-components/NucleoIcons.jsx";
import Navbar from "layouts/Documentation/Sections/restyled-components/Navbar.jsx";
import Tables from "layouts/Documentation/Sections/restyled-components/Tables.jsx";
import Typography from "layouts/Documentation/Sections/restyled-components/Typography.jsx";
// Core components
// Restyled components
// Plugins
import Charts from "layouts/Documentation/Sections/plugins/Charts.jsx";
import GoogleMaps from "layouts/Documentation/Sections/plugins/GoogleMaps.jsx";
import Notifications from "layouts/Documentation/Sections/plugins/Notifications.jsx";
import PerfectScrollbar from "layouts/Documentation/Sections/plugins/PerfectScrollbar.jsx";

var componentsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: []
  },
  {
    name: "Core Components",
    path: "/documentation/tutorial",
    routes: []
  },
  {
    name: "Restyled Components",
    path: "/documentation/alerts",
    routes: [
      { path: "/documentation/alerts", component: Alerts, name: "Alerts" },
      { path: "/documentation/breadcrumb", component: Breadcrumb, name: "Breadcrumb" },
      { path: "/documentation/buttons", component: Buttons, name: "Buttons" },
      { path: "/documentation/cards", component: Card, name: "Cards" },
      { path: "/documentation/colors", component: Colors, name: "Colors" },
      { path: "/documentation/dropdowns", component: Dropdowns, name: "Dropdowns" },
      { path: "/documentation/forms", component: Forms, name: "Forms" },
      { path: "/documentation/info-areas", component: InfoAreas, name: "Info Areas" },
      { path: "/documentation/navs", component: Navs, name: "Navs" },
      { path: "/documentation/nucleo-icons", component: NucleoIcons, name: "Nucleo Icons" },
      { path: "/documentation/navbar", component: Navbar, name: "Navbar" },
      { path: "/documentation/tables", component: Tables, name: "Tables" },
      { path: "/documentation/typography", component: Typography, name: "Typography" }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      { path: "/documentation/charts", component: Charts, name: "Charts" },
      {
        path: "/documentation/google-maps",
        component: GoogleMaps,
        name: "GoogleMaps"
      },
      {
        path: "/documentation/notifications",
        component: Notifications,
        name: "Notifications"
      },
      {
        path: "/documentation/perfect-scrollbar",
        component: PerfectScrollbar,
        name: "PerfectScrollbar"
      }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/alerts" }
];

export default componentsRoutes;
