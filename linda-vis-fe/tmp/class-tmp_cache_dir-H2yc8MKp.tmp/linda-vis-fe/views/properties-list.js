define('linda-vis-fe/views/properties-list', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].View.extend({
        templateName: "properties-list",
        tagName: "ul",
        classNames: ["properties-list"]
    });

});