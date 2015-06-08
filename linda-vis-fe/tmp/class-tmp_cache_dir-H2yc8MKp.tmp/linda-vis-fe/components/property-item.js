define('linda-vis-fe/components/property-item', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    actions: {
      remove: function remove() {
        var collection = this.get("collection");
        var item = this.get("item");
        collection.removeObject(item);
      }
    }
  });

});