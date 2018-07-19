[![Build Status](https://travis-ci.org/mak-elena/ui5-awc-shakeDemo.svg?branch=master)](https://travis-ci.org/mak-elena/ui5-awc-shakeDemo)

# Adaptive User Interface Demo

**[Launch Demo](https://mak-elena.github.io/ui5-awc-shakeDemo/)**

Built with
* [openUI5](https://openui5.hana.ondemand.com/) framework (GitHub: https://github.com/SAP/openui5)
* [Adaptive Web Components](https://github.com/FraunhoferIAO/awc-core) Framework
* [Generic Sensor API](https://www.w3.org/TR/generic-sensor/)

## Phone
Sensor data (Accelerator) are used to change size of UI elements.

**To test in Chrome follow the
[Launch Instructions](https://intel.github.io/generic-sensor-demos/)**



## Laptop
Since no sensor API is available the vibraton might be
simulated using the buttons in the top of the app.


## How to install

 * Clone the repository.
 * Ensure `nodejs` and `npm` are installed (see [node.js](http://nodejs.org/))
 * Ensure `grunt` installed. If not, execute
    ````
    npm install -g grunt-cli
    ````
 * install and start the app itself:
    ````
    npm install
    npm install -g grunt-cli
    npm start
    ````
 * open in browser: http://localhost:8082
