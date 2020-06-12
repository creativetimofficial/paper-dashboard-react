# Change Log

## [1.2.0] 2020-06-12
### Bug fixing
- https://github.com/creativetimofficial/paper-dashboard-react/issues/15
- https://github.com/creativetimofficial/paper-dashboard-react/issues/13
- https://github.com/creativetimofficial/paper-dashboard-react/issues/12
- https://github.com/creativetimofficial/paper-dashboard-react/issues/9 (could not reproduce the issue, so we've left the perfect-scrollbar initialization as is, if there are layout problems, please delete the bits of code specified here: https://github.com/creativetimofficial/paper-dashboard-react/issues/9#issuecomment-593385860)
- https://github.com/creativetimofficial/paper-dashboard-react/issues/8
- Other Paper React products issues solved here as well
  - https://github.com/creativetimofficial/ct-paper-kit-pro-react/issues/2
  - https://github.com/creativetimofficial/paper-kit-react/issues/2
  - https://github.com/creativetimofficial/ct-paper-dashboard-pro-react/issues/8
  - https://github.com/creativetimofficial/ct-paper-dashboard-pro-react/issues/6 - solution to this is to change the usage of the ModalHeader from Reactstrap to simple Bootstrap ones:
  So, instead of:
```
<ModalHeader className="justify-content-center" toggle={this.toggleModalDemo}>
    Modal Title
</ModalHeader>
```
  You should use
```
<div className="modal-header justify-content-center">
  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModalDemo}>
    <span aria-hidden="true">×</span>
  </button>
  <h5 className="modal-title">Modal Title</h5>
</div>
```
### Major style changes
- - There will be additional changes in each `.js` and `.html` files since we've used `prettier` to prettify them
- `src/assets/scss/paper-dashboard/_nucleo-outline.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/paper-dashboard/react/custom/_nucleo-outline.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/paper-dashboard/react/custom/_responsive.scss`
- `src/assets/scss/paper-dashboard/react/custom/_inputs.scss`
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
+ gulp@4.0.2 (for Creative Tim copyrights)
+ gulp-append-prepend@1.0.8 (for Creative Tim copyrights)
### Updated dependencies
```
bootstrap             4.3.1   →     4.5.0
chart.js              2.8.0   →     2.9.3
history               4.9.0   →    4.10.1
node-sass            4.12.0   →    4.14.1
perfect-scrollbar     1.4.0   →     1.5.0
react                16.8.6   →   16.13.1
react-chartjs-2       2.7.6   →     2.9.0
react-dom            16.8.6   →   16.13.1
react-router          5.0.0   →     5.2.0
react-router-dom      5.0.0   →     5.2.0
react-scripts         3.0.1   →     3.4.1
reactstrap            8.0.0   →     8.4.1
@types/googlemaps    3.36.2   →    3.39.6
@types/react        16.8.19   →   16.9.35
ajv                  6.10.0   →    6.12.2
jquery                3.4.1   →     3.5.1
typescript            3.4.5   →     3.9.5
```
### Warning
_All the following products: Paper Kit React, Paper Dashboard React, Paper Kit PRO React and Paper Dashboard PRO React have been updated together, and thus, we've added to all of them the same version of 1.2.0 - we may have skipped some versions for some of the above products, we've done so, since we want all Paper & React products to share the same versions._
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

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
