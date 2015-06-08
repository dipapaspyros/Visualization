define('linda-vis-fe/utils/visualization-registry', ['exports', 'linda-vis-fe/utils/column-chart', 'linda-vis-fe/utils/line-chart', 'linda-vis-fe/utils/area-chart', 'linda-vis-fe/utils/pie-chart', 'linda-vis-fe/utils/bubble-chart', 'linda-vis-fe/utils/scatter-chart', 'linda-vis-fe/utils/map'], function (exports, columnchart, linechart, areachart, piechart, bubblechart, scatterchart, map) {

    'use strict';

    var visualizationRegistry = {
        getVisualization: function getVisualization(widgetName) {
            switch (widgetName) {
                case "BarChart":
                    return columnchart['default'];
                case "LineChart":
                    return linechart['default'];
                case "AreaChart":
                    return areachart['default'];
                case "PieChart":
                    return piechart['default'];
                case "BubbleChart":
                    return bubblechart['default'];
                case "ScatterChart":
                    return scatterchart['default'];
                case "Map":
                    return map['default'];
            }
            return null;
        }
    };

    exports['default'] = visualizationRegistry;

});