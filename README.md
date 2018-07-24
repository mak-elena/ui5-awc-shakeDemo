[![Build Status](https://travis-ci.org/mak-elena/ui5-awc-shakeDemo.svg?branch=master)](https://travis-ci.org/mak-elena/ui5-awc-shakeDemo)
# [OSCON 2018](https://conferences.oreilly.com/oscon/oscon-or) - **Adaptive Web Components: Context matters!**

## Adaptive User Interface Demo

See also (Adaptive Variants Demo)[https://github.com/mak-elena/ui5-awc-variantsDemo]

**Showcase**: Vibration (movement) of a device makes UI elements increase size.

Demonstrates how [context queries](https://github.com/FraunhoferIAO/awc-core/blob/master/doc/API.md#contextquery) might be used to adapt UI to environmment conditions. [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) is used to gather data (Accelerator) and adjust size of UI elements.

#### Phone

To test in **Chrome** follow the
**[Launch Instructions for Generic Sensor API](https://intel.github.io/generic-sensor-demos/)** or use buttons in the top to   simulsate **Vibration Level** change.

#### Laptop
Since no sensor API is available the **Vibration Level** might be
simulated using the buttons in the top of the app.

### **[Launch Demo](https://mak-elena.github.io/ui5-awc-shakeDemo/)**

## @DEV

Built with
* [openUI5](https://openui5.hana.ondemand.com/) framework (GitHub: https://github.com/SAP/openui5)
* [Adaptive Web Components](https://github.com/FraunhoferIAO/awc-core) Framework
* [Generic Sensor API](https://www.w3.org/TR/generic-sensor/)

### How to install

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
