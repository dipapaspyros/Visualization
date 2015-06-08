define('linda-vis-fe/models/visualization', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    /*The visualization model represents the  initial visualization configuration retrieved from the backend. 
     *And describes the format used for storing the current visualization configuration in the backend.*/
    exports['default'] = DS['default'].Model.extend({
        visualizationName: DS['default'].attr("string"),
        configurationName: DS['default'].attr("string"),
        structureOptions: DS['default'].attr(),
        layoutOptions: DS['default'].attr(),
        visualizationThumbnail: DS['default'].attr("string"),
        valid: DS['default'].attr("boolean"),
        dataselection: DS['default'].belongsTo("dataselection")
    });

});