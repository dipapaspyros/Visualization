define('linda-vis-fe/components/draggable-item', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        tagName: "span",
        classNames: ["draggable-item"],
        attributeBindings: ["draggable"],
        draggable: "true",
        dragStart: function dragStart(event) {
            event.stopPropagation();
            var data = this.get("data");
            var jsonData = JSON.stringify(data);
            event.dataTransfer.setData("text/plain", jsonData);
            event.dataTransfer.effectAllowed = "copy";
        } });

});