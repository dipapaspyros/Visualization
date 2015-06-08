define('linda-vis-fe/components/data-table', ['exports', 'ember', 'linda-vis-fe/utils/table-data-module'], function (exports, Ember, table_data_module) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        tagName: "table",
        list: [],
        columns: [],
        classNames: ["no-wrap"],
        table: null,
        setContent: (function () {
            console.log("TABLE COMPONENT - GENERATING PREVIEW");

            var self = this;
            var selection = this.get("preview");
            var datasource = this.get("datasource");

            if (selection.length > 0) {
                var columns = table_data_module['default'].getColumns(selection, datasource);

                table_data_module['default'].getContent(selection, datasource).then(function (content) {

                    if (self.get("table")) {
                        self.get("table").api().clear().destroy();
                        self.$().empty();
                    }

                    var table = self.$().dataTable({
                        responsive: {
                            details: {
                                type: "inline"
                            }
                        },
                        data: content.slice(1),
                        columns: columns
                    });
                    self.set("table", table);
                });
            } else {
                if (self.get("table")) {
                    self.get("table").api().clear().destroy();
                    self.$().empty();
                }
            }
        }).observes("preview.[]").on("didInsertElement")
    });

});