define('linda-vis-fe/views/draw-visualization', ['exports', 'ember', 'linda-vis-fe/utils/sparql-data-module', 'linda-vis-fe/utils/csv-data-module', 'linda-vis-fe/utils/visualization-registry'], function (exports, Ember, sparql_data_module, csv_data_module, vis_registry) {

    'use strict';

    exports['default'] = Ember['default'].View.extend({
        willAnimateIn: function willAnimateIn() {
            $.css("opacity", 0);
        },
        animateIn: function animateIn(done) {
            $.fadeTo(500, 1, done);
        },
        animateOut: function animateOut(done) {
            $.fadeTo(500, 0, done);
        },
        parentViewDidChange: function parentViewDidChange() {
            $.hide();
            $.fadeIn(500);
        },
        eventManager: Ember['default'].Object.create({
            input: function input() {
                this.triggerAction({
                    action: "willAnimateIn",
                    target: this
                });
            }
        }),
        drawVisualization: (function () {
            var visualization = this.get("visualization");
            console.log("DRAW VISUALIZATION VIEW - DRAW ...");
            console.dir(visualization);

            if (!visualization) {
                return;
            }

            var config = this.get("configurationArray")[0];

            console.log("VISUALIZATION CONFIGURATION");
            console.dir(JSON.stringify(config));

            if (!config) {
                return;
            }

            var dataselection = visualization.get("dataselection");
            var datasource = dataselection.get("datasource");
            var format = datasource.format;
            config.datasourceLocation = datasource.location;
            config.datasourceGraph = datasource.graph;

            switch (format) {
                case "rdf":
                    config.dataModule = sparql_data_module['default'];
                    break;
                case "csv":
                    config.dataModule = csv_data_module['default'];
                    break;
                default:
                    console.error("Unknown DS format: " + format);
                    return;
            }

            var name = visualization.get("visualizationName");
            var visualization_ = vis_registry['default'].getVisualization(name);
            var self = this;

            var element = this.get("element");
            if (!element) {
                return;
            }

            try {
                visualization_.draw(config, element.id).then(function () {
                    var svg = visualization_.get_SVG();
                    self.set("visualizationSVG", svg);
                });
            } catch (ex) {
                console.error("Error drawing visualization: ");
                console.log(ex);
            }
        }).observes("configurationArray.@each").on("didInsertElement"),
        redraw: (function () {}).observes("visualization")
    });

    //this.rerender();

});