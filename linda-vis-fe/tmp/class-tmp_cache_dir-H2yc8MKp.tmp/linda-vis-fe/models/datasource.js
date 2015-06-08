define('linda-vis-fe/models/datasource', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        name: DS['default'].attr("string"),
        location: DS['default'].attr("string"),
        graph: DS['default'].attr("string"),
        format: DS['default'].attr("string")
    });

});