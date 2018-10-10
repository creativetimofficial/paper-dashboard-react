import Tutorial from "layouts/Documentation/Sections/Tutorial.jsx";
import RoutingSystem from "layouts/Documentation/Sections/RoutingSystem.jsx";
import Variables from "layouts/Documentation/Sections/Variables.jsx";
import LintCommands from "layouts/Documentation/Sections/LintCommands.jsx";
import Alerts from "layouts/Documentation/Sections/Alerts.jsx";
import Breadcrumb from "layouts/Documentation/Sections/Breadcrumb.jsx";
import Buttons from "layouts/Documentation/Sections/Buttons.jsx";
import CardElements from "layouts/Documentation/Sections/CardElements.jsx";
import Cards from "layouts/Documentation/Sections/Cards.jsx";
import Colors from "layouts/Documentation/Sections/Colors.jsx";
import Charts from "layouts/Documentation/Sections/Charts.jsx";
import Dropdown from "layouts/Documentation/Sections/Dropdown.jsx";
import Footers from "layouts/Documentation/Sections/Footers.jsx";
import Forms from "layouts/Documentation/Sections/Forms.jsx";
import FormInputs from "layouts/Documentation/Sections/FormInputs.jsx";
import GoogleMaps from "layouts/Documentation/Sections/GoogleMaps.jsx";
import Icons from "layouts/Documentation/Sections/Icons.jsx";
import Navigation from "layouts/Documentation/Sections/Navigation.jsx";
import Navs from "layouts/Documentation/Sections/Navs.jsx";
import Notifications from "layouts/Documentation/Sections/Notifications.jsx";
import PerfectScrollbar from "layouts/Documentation/Sections/PerfectScrollbar.jsx";
import Sidebar from "layouts/Documentation/Sections/Sidebar.jsx";
import Stats from "layouts/Documentation/Sections/Stats.jsx";
import Tables from "layouts/Documentation/Sections/Tables.jsx";
import Tooltips from "layouts/Documentation/Sections/Tooltips.jsx";
import Typography from "layouts/Documentation/Sections/Typography.jsx";

var componentsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        component: Tutorial,
        name: "Tutorial"
      },
      {
        path: "/documentation/routing-system",
        component: RoutingSystem,
        name: "Routing System"
      },
      {
        path: "/documentation/variables",
        component: Variables,
        name: "Variables"
      },
      { path: "/documentation/lint", component: LintCommands, name: "Lint" }
    ]
  },
  {
    name: "Components",
    path: "/documentation/accordion",
    routes: [
      { path: "/documentation/alerts", component: Alerts, name: "Alerts" },
      {
        path: "/documentation/breadcrumb",
        component: Breadcrumb,
        name: "Breadcrumb"
      },
      { path: "/documentation/buttons", component: Buttons, name: "Buttons" },
      { path: "/documentation/cards", component: Cards, name: "Cards" },
      {
        path: "/documentation/card-elements",
        component: CardElements,
        name: "Card Elements"
      },
      {
        path: "/documentation/colors",
        component: Colors,
        name: "Colors"
      },
      {
        path: "/documentation/dropdown",
        component: Dropdown,
        name: "Dropdown"
      },
      { path: "/documentation/footers", component: Footers, name: "Footers" },
      {
        path: "/documentation/forms",
        component: Forms,
        name: "Forms"
      },
      {
        path: "/documentation/form-inputs",
        component: FormInputs,
        name: "Form Inputs"
      },
      {
        path: "/documentation/navbars",
        component: Navigation,
        name: "Navbars"
      },
      { path: "/documentation/navs", component: Navs, name: "Navs" },
      { path: "/documentation/icons", component: Icons, name: "Nucleo Icons" },
      { path: "/documentation/sidebar", component: Sidebar, name: "Sidebar" },
      { path: "/documentation/stats", component: Stats, name: "Stats" },
      { path: "/documentation/tables", component: Tables, name: "Tables" },
      {
        path: "/documentation/tooltips",
        component: Tooltips,
        name: "Tooltips"
      },
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
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default componentsRoutes;
