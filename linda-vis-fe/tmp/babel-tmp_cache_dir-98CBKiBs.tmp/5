import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    remove: function remove() {
      var collection = this.get("collection");
      var item = this.get("item");
      collection.removeObject(item);
    }
  }
});