import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Documentation from "layouts/Documentation/Documentation.jsx";

var indexRoutes = [
  { path: "/documentation", name: "Documentation", component: Documentation },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
