/* jshint ignore:start */

define('linda-vis-fe/config/environment', ['ember'], function(Ember) {
  var prefix = 'linda-vis-fe';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("linda-vis-fe/tests/test-helper");
} else {
  require("linda-vis-fe/app")["default"].create({"name":"linda-vis-fe","version":"0.0.0.cf881ece"});
}

/* jshint ignore:end */
