define('linda-vis-fe/models/dataselection', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        datasource: DS['default'].attr(),
        propertyInfos: DS['default'].attr()
    });

});