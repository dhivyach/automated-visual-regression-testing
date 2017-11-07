var allScenarios = [].concat(
    require('./tests/sample1').scenarios
);

var viewPorts = [
  {"name": "laptop_Size", "width": 1366, "height": 768},
  {"name": "Mobile_L_Size", "width": 640, "height": 360},
  {"name": "iPad_P_Size", "width": 768, "height": 1024}
];

//Devices width and height from: https://mydevice.io/devices/#sortOthers
// Stats from: https://www.w3counter.com/globalstats.php
module.exports = {
    "id": "vt",
    "viewports": viewPorts,
    "paths": {
        "bitmaps_reference": "./reference_images",
        "bitmaps_test": "./bitmaps_test",
        "engine_scripts": "./tests",
        "ci_report": "./backstop_data/ci_report"
    },
    "fileNameTemplate": "{configId}_{scenarioLabel}_{selectorLabel}_{viewportLabel}",
    "onBeforeScript": "onBefore.js",
    "onReadyScript": "onReady.js",
    "scenarios": allScenarios,
    "ci": {
        "format": "junit",
        "testSuiteName": "automated-visual-testing"
    },
    "engine": "chrome",
    "engineOptions" : {
        "chromePath": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "waitTimeout": 9000,
        "gotoTimeout": 30000
    },
    "openReport": false,
    "debug": false,
    "asyncCaptureLimit": 3,
    "asyncCompareLimit": 20
};
