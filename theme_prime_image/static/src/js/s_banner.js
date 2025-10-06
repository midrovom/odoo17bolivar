odoo.define('theme_prime_image.snippets', function (require) {
    'use strict';

    var options = require('web_editor.snippets.options');

    options.registry.BannerSliderOptions = options.Class.extend({
        start: function () {
            this._super.apply(this, arguments);
        },
        // Cambiar título del slide activo
        selectTitle: function (previewMode, value) {
            this.$target.find('.carousel-item.active h5').text(value || "Nuevo título");
        },
        // Cambiar descripción del slide activo
        selectDescription: function (previewMode, value) {
            this.$target.find('.carousel-item.active p').text(value || "Nueva descripción");
        },
        // Cambiar imagen del slide activo
        selectImage: function (previewMode, value) {
            this.$target.find('.carousel-item.active img').attr("src", value);
        }
    });
});
