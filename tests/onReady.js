module.exports =  function (chromy, scenario, vp) {
  console.log('SCENARIO > onReady.js is running for: ' + scenario.label);
  require('../helpers/clickAndHoverHelper')(chromy, scenario);
  // add more ready handlers here...
};
