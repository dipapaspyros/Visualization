define('linda-vis-fe/utils/table-data-module', ['exports', 'linda-vis-fe/utils/csv-data-module', 'linda-vis-fe/utils/sparql-data-module'], function (exports, csv_data_module, sparql_data_module) {

    'use strict';

    var table_data_module = (function () {
        var list = [];
        function getContent(selection, datasource) {
            var _location = datasource.location;
            var _graph = datasource.graph;
            var _format = datasource.format;
            var data_module = getDataModule(_format);

            console.log("TABLE DATA MODULE - SELECTION:");
            console.dir(selection);

            return data_module.queryInstances(_location, _graph, selection);
        }

        function getColumns(list) {
            var columns = [];
            for (var i = 0; i < list.length; i++) {
                columns.push({
                    title: list[i].label
                });
            }
            return columns;
        }
        function getDataModule(format) {
            switch (format) {
                case "csv":
                    return csv_data_module['default'];
                case "rdf":
                    return sparql_data_module['default'];
            }
            console.error("Unknown data format '" + format + "'");
            return null;
        }

        return {
            list: list,
            getContent: getContent,
            getColumns: getColumns
        };
    })();

    exports['default'] = table_data_module;

});