exports.scenarios = [{
    "label": "amazon",
    "url": "https://www.amazon.com",
    "selectors": ["document", "viewport", "#navbar"],
    "delay": 250,
    "misMatchThreshold": 0.0001
},
    {
        "label": "yahoo",
        "url": "https://www.yahoo.com/",
        "selectors": ["document", "viewport"],
        "delay": 250,
        "misMatchThreshold": 0.0001
    }];
