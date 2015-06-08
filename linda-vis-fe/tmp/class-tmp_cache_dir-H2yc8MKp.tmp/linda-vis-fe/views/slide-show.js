define('linda-vis-fe/views/slide-show', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].View.extend({
        slides: null,
        templateName: "slideShow",
        classNames: ["slider"],
        didInsertElement: function didInsertElement() {
            this._super();

            console.log("Inserted slideshow: ");
            console.dir(this.get("slides"));

            this.$().slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        },
        refreshView: (function () {
            this.rerender();
        }).observes("slides.[]")
    });

});