define('linda-vis-fe/controllers/datasource', ['exports', 'ember', 'linda-vis-fe/utils/tree-selection-data-module'], function (exports, Ember, treeselection_data) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        isToggled: true,
        treeContent: (function () {
            console.log("DATASOURCE CONTROLLER");
            var dataInfo = this.get("model"); // data sources
            if (!dataInfo) {
                return {};
            }

            this.set("selectedDatasource", dataInfo);

            var previousSelection = this.get("previousSelection");
            if (previousSelection.length === 0) {
                return treeselection_data['default'].initialize(dataInfo);
            } else {
                return treeselection_data['default'].restore(dataInfo, previousSelection);
            }
        }).property("model", "previousSelection"),
        previousSelection: [],
        dataSelection: [],
        selectedDatasource: null,
        resetSelection: (function () {
            this.get("dataSelection").length = 0;
        }).observes("model"),
        actions: {
            visualize: function visualize() {
                var self = this;
                var selection = this.get("dataSelection");
                var datasource = this.get("selectedDatasource");
                var selected = treeselection_data['default'].getDataSelection(selection, datasource);
                var dataselection = this.store.createRecord("dataselection", selected);
                console.log("VISUALIZE");
                dataselection.save().then(function (responseDataselection) {
                    console.log("SAVED DATA SELECTION. TRANSITION TO VISUALIZATION ROUTE .....");
                    console.dir(responseDataselection);
                    self.transitionToRoute("visualization", "dataselection", responseDataselection.id);
                });
            },
            toggle: function toggle() {
                var toggled = this.get("isToggled");
                if (toggled) {
                    this.set("isToggled", false);
                } else {
                    this.set("isToggled", true);
                }
            }
        }
    });

});