/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Name", "Country", "City", "Salary"];
const tbody = [
  {
    className: "table-success",
    data: ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
  },
  {
    className: "",
    data: ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
  },
  {
    className: "table-info",
    data: ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
  },
  {
    className: "",
    data: ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
  },
  {
    className: "table-danger",
    data: ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
  },
  { className: "", data: ["Mason Porter", "Chile", "Gloucester", "$78,615"] },
  {
    className: "table-warning",
    data: ["Jon Porter", "Portugal", "Gloucester", "$98,615"],
  },
];

// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { thead, tbody };
