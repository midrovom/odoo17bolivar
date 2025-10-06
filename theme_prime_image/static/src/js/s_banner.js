odoo.define('theme_prime_image.snippets', function (require) {
    'use strict';

    var options = require('web_editor.snippets.options');

    options.registry.BannerSliderOptions = options.Class.extend({
        selectImage: options.registry.ImageBlock.extendOptions({
            selector: '.carousel-item img',
        }),

        /**
         * Permite editar los títulos de cada slide
         */
        selectTitle: options.registry.TextBlock.extendOptions({
            selector: '.carousel-item h5',
        }),

        /**
         * Permite editar las descripciones de cada slide
         */
        selectDescription: options.registry.TextBlock.extendOptions({
            selector: '.carousel-item p',
        }),
    });
});
