define('linda-vis-fe/routes/dataselection', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var DataselectionRoute = Ember['default'].Route.extend({
        model: function model(params) {
            console.log("DATASELECTION ROUTE", params.selection);
            return Ember['default'].$.getJSON("http://" + window.location.hostname + ":3002/dataselections/" + params.selection);
        },
        controllerName: "datasource",
        setupController: function setupController(controller, model) {
            console.log("DATASELECTION ROUTE - SETTING UP THE DATASOURCE CONTROLLER");
            console.log("MODEL");
            console.dir(model);

            controller.set("model", model.dataselection.datasource);

            var dataSelection = controller.get("dataSelection");
            var selection = _.flatten(dataSelection.pushObject(model.dataselection.propertyInfos));

            controller.set("dataSelection", selection);
            controller.set("previousSelection", selection);
        },
        renderTemplate: function renderTemplate() {
            this.render("datasource");
        }
    });

    exports['default'] = DataselectionRoute;

});