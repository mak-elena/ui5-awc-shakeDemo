var fs = require('fs-extra');

fs.copySync('./node_modules/@webcomponents/webcomponentsjs/', './webapp/thirdparty/webcomponentsjs');
fs.copySync('./node_modules/@webcomponents/shadycss/', './webapp/thirdparty/shadycss');

