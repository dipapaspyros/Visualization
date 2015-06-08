define('linda-vis-fe/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return $.getJSON("config.json");
    }
  });

});