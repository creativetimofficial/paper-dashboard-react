# Change Log
## [1.1.0] 2019-05-31
### Major changes
- Almost all of the styles inside `src/scss` have been changed
- We've removed `src/routes/*` files and replaced them with just one file (`src/routes.js`)
- We've renamed `src/layouts/Dashboard/Dashboard.jsx` to `src/layouts/Admin.jsx`
- We've dropped the usage of `NODE_PATH=./src` and the file `.env` with the `jsconfig.json` file for using absolute paths
- We've renamed `src/components/Header/Header.jsx` to `src/components/Navbars/DemoNavbar.jsx`
- We've renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/Dashboard.jsx`
- We've renamed `src/views/Icons/Icons.jsx` to `src/views/Icons.jsx`
- We've renamed `src/views/Maps/Maps.jsx` to `src/views/Map.jsx`
- We've renamed `src/views/Notifications/Notifications.jsx` to `src/views/Notifications.jsx`
- We've renamed `src/views/TableList/TableList.jsx` to `src/views/Tables.jsx`
- We've renamed `src/views/Typography/Typography.jsx` to `src/views/Typography.jsx`
- We've renamed `src/views/UserPage/UserPage.jsx` to `src/views/User.jsx`
### Dropped components
- `src/components/CardElements/CardAuthor.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/CustomButton/CustomButton.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/CustomCheckbox/SimpleCheckbox.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/CustomRadio/CustomRadio.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/FormInputs/FormInputs.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/Stats/Stats.jsx` (replaced with simple HTML/React/Reactstrap syntax)
### Added components
- `src/views/Upgrade.jsx`
### Deleted dependencies
- eslint-config-prettier
- eslint-plugin-prettier
### Added dependencies
- typescript v3.4.5
- react-router v5.0.0
### Updated dependencies
- @types/react               16.4.16   →   16.8.18
- bootstrap                    4.1.3   →     4.3.1
- chart.js                     2.7.2   →     2.8.0
- history                      4.7.2   →     4.9.0
- node-sass                    4.9.3   →    4.12.0
- react                       16.5.2   →    16.8.6
- react-chartjs-2              2.7.4   →     2.7.6
- react-dom                   16.5.2   →    16.8.6
- react-notification-alert     0.0.8   →    0.0.12
- react-router-dom             4.3.1   →     5.0.0
- react-scripts                2.0.4   →     3.0.1
- reactstrap                   6.5.0   →     8.0.0
- ajv                          6.0.0   →    6.10.0
- jquery                       3.3.1   →     3.4.1
- @types/googlemaps          3.30.13   →    3.36.0


## [1.0.0] 2018-10-12
### Original Release
- Added Reactstrap as base framework
- Added design from Paper Dashboard 2 by Creative Tim
