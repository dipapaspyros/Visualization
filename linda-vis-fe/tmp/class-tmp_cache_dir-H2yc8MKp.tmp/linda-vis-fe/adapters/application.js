define('linda-vis-fe/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

        'use strict';

        var Adapter = DS['default'].RESTAdapter.extend({
                host: "http://" + window.location.hostname + ":3002"
        });

        exports['default'] = Adapter;

});