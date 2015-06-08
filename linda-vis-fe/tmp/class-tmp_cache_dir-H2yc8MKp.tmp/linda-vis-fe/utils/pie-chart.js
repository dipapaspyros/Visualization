define('linda-vis-fe/utils/pie-chart', ['exports', 'linda-vis-fe/utils/util', 'linda-vis-fe/utils/export-visualization'], function (exports, util, exportVis) {

    'use strict';

    var piechart = (function () {

        var seriesHeaders = [];
        var series = [];

        function draw(configuration, visualisationContainerID) {
            console.log("### INITIALIZE VISUALISATION - PIE CHART");

            var container = $("#" + visualisationContainerID);
            container.empty();

            var measure = configuration.Measure;
            var slice = configuration.Slices;

            if (!(configuration.dataModule && configuration.datasourceLocation && measure && slice)) {
                return $.Deferred().resolve().promise();
            }

            if (measure.length === 0 || slice.length === 0) {
                return $.Deferred().resolve().promise();
            }

            var dataModule = configuration.dataModule;
            var location = configuration.datasourceLocation;
            var graph = configuration.datasourceGraph;

            var selection = {
                dimension: measure,
                multidimension: slice

            };

            console.log("VISUALIZATION SELECTION FOR PIE CHART:");
            console.dir(selection);

            var svg = dimple.newSvg("#" + visualisationContainerID, container.width(), container.height());

            return dataModule.parse(location, graph, selection).then(function (inputData) {
                seriesHeaders = inputData[0];
                series = util['default'].createRows(inputData);
                console.log("GENERATE INPUT DATA FORMAT FOR PIE CHART");
                console.dir(series);

                var chart = new dimple.chart(svg, series);
                chart.addMeasureAxis("p", seriesHeaders[0]);
                chart.addSeries(seriesHeaders.slice(1), dimple.plot.pie);
                chart.addLegend("10%", "5%", "80%", 20, "right");

                //tooltip
                if (configuration.Tooltip === false) {
                    chart.addSeries(series, dimple.plot.pie).addEventHandler("mouseover", function () {});
                }

                chart.draw();
            });
        }

        function export_as_PNG() {
            return exportVis['default'].export_PNG();
        }

        function export_as_SVG() {
            return exportVis['default'].export_SVG();
        }

        function get_SVG() {
            return exportVis['default'].get_SVG();
        }

        return {
            export_as_PNG: export_as_PNG,
            export_as_SVG: export_as_SVG,
            get_SVG: get_SVG,
            draw: draw
        };
    })();

    exports['default'] = piechart;

});