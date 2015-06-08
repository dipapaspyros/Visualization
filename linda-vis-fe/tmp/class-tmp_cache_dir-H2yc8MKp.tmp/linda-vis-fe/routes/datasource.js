define('linda-vis-fe/routes/datasource', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var DatasourceRoute = Ember['default'].Route.extend({
        model: function model(params) {
            var ds = this.store.createRecord("datasource", {
                name: decodeURIComponent(params.name),
                location: decodeURIComponent(params.location),
                graph: decodeURIComponent(params.graph),
                format: decodeURIComponent(params.format)
            });
            return ds.save().then(function (data) {
                return data._data;
            });
        }
    });

    exports['default'] = DatasourceRoute;

});