define('linda-vis-fe/router', ['exports', 'ember', 'linda-vis-fe/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    Router.map(function () {
        this.route("visualization", {
            path: "/visualization/:source_type/:id"
        });
        this.route("datasource", {
            path: "/datasource/:name/:location/:graph/:format"
        });
        this.route("dataselection", {
            path: "/dataselection/:selection/:datasource"
        });
        this.route("saved-visualizations");
        this.route("configure");
    });

    exports['default'] = Router;

});