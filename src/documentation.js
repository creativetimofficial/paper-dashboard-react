// Getting started
import BuildTools from "layouts/Documentation/Sections/getting-started/BuildTools.js";
import Contents from "layouts/Documentation/Sections/getting-started/Contents.js";
import Download from "layouts/Documentation/Sections/getting-started/Download.js";
import License from "layouts/Documentation/Sections/getting-started/License.js";
import Overview from "layouts/Documentation/Sections/getting-started/Overview.js";
import QuickStart from "layouts/Documentation/Sections/getting-started/QuickStart.js";
import RoutingSystem from "layouts/Documentation/Sections/getting-started/RoutingSystem.js";
import Variables from "layouts/Documentation/Sections/getting-started/Variables.js";
// Core components
import FixedPlugin from "layouts/Documentation/Sections/core-components/FixedPlugin.js";
import Footer from "layouts/Documentation/Sections/core-components/Footer.js";
import Navbars from "layouts/Documentation/Sections/core-components/Navbars.js";
import Sidebar from "layouts/Documentation/Sections/core-components/Sidebar.js";
// Restyled components
import Alerts from "layouts/Documentation/Sections/restyled-components/Alerts.js";
import Breadcrumb from "layouts/Documentation/Sections/restyled-components/Breadcrumb.js";
import Buttons from "layouts/Documentation/Sections/restyled-components/Buttons.js";
import Card from "layouts/Documentation/Sections/restyled-components/Card.js";
import Colors from "layouts/Documentation/Sections/restyled-components/Colors.js";
import Dropdowns from "layouts/Documentation/Sections/restyled-components/Dropdowns.js";
import Forms from "layouts/Documentation/Sections/restyled-components/Forms.js";
import InfoAreas from "layouts/Documentation/Sections/restyled-components/InfoAreas.js";
import Navs from "layouts/Documentation/Sections/restyled-components/Navs.js";
import NucleoIcons from "layouts/Documentation/Sections/restyled-components/NucleoIcons.js";
import Navbar from "layouts/Documentation/Sections/restyled-components/Navbar.js";
import Tables from "layouts/Documentation/Sections/restyled-components/Tables.js";
import Typography from "layouts/Documentation/Sections/restyled-components/Typography.js";
// Plugins
import Charts from "layouts/Documentation/Sections/plugins/Charts.js";
import GoogleMaps from "layouts/Documentation/Sections/plugins/GoogleMaps.js";
import Notifications from "layouts/Documentation/Sections/plugins/Notifications.js";
import PerfectScrollbar from "layouts/Documentation/Sections/plugins/PerfectScrollbar.js";

var componentsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/overview",
    routes: [
      {
        path: "/documentation/overview",
        component: Overview,
        name: "Overview"
      },
      {
        path: "/documentation/quick-start",
        component: QuickStart,
        name: "QuickStart"
      },
      { path: "/documentation/license", component: License, name: "License" },
      {
        path: "/documentation/download",
        component: Download,
        name: "Download"
      },
      {
        path: "/documentation/contents",
        component: Contents,
        name: "Contents"
      },
      {
        path: "/documentation/build-tools",
        component: BuildTools,
        name: "BuildTools"
      },
      {
        path: "/documentation/variables",
        component: Variables,
        name: "Variables"
      },
      {
        path: "/documentation/routing-system",
        component: RoutingSystem,
        name: "RoutingSystem"
      }
    ]
  },
  {
    name: "Core Components",
    path: "/documentation/fixed-plugin",
    routes: [
      {
        path: "/documentation/fixed-plugin",
        component: FixedPlugin,
        name: "FixedPlugin"
      },
      {
        path: "/documentation/demo-footers",
        component: Footer,
        name: "Demo Footers"
      },
      {
        path: "/documentation/demo-navbars",
        component: Navbars,
        name: "Demo Navbars"
      },
      { path: "/documentation/sidebar", component: Sidebar, name: "Sidebar" }
    ]
  },
  {
    name: "Restyled Components",
    path: "/documentation/alerts",
    routes: [
      { path: "/documentation/alerts", component: Alerts, name: "Alerts" },
      {
        path: "/documentation/breadcrumb",
        component: Breadcrumb,
        name: "Breadcrumb"
      },
      { path: "/documentation/buttons", component: Buttons, name: "Buttons" },
      { path: "/documentation/cards", component: Card, name: "Cards" },
      { path: "/documentation/colors", component: Colors, name: "Colors" },
      {
        path: "/documentation/dropdowns",
        component: Dropdowns,
        name: "Dropdowns"
      },
      { path: "/documentation/forms", component: Forms, name: "Forms" },
      {
        path: "/documentation/info-areas",
        component: InfoAreas,
        name: "Info Areas"
      },
      { path: "/documentation/navs", component: Navs, name: "Navs" },
      {
        path: "/documentation/nucleo-icons",
        component: NucleoIcons,
        name: "Nucleo Icons"
      },
      { path: "/documentation/navbar", component: Navbar, name: "Navbar" },
      { path: "/documentation/tables", component: Tables, name: "Tables" },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography"
      }
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
  { redirect: true, path: "/documentation", pathTo: "/documentation/overview" }
];

export default componentsRoutes;
