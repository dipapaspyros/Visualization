define('linda-vis-fe/controllers/index', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].ObjectController.extend({
        needs: ["application"],
        datasetsEndpointURI: (function () {
            return encodeURIComponent(this.get("controllers.application.datasetsEndpoint"));
        }).property()
    });

});