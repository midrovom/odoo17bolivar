odoo.define('theme_prime_image.s_banner_17', function (require) {
    'use strict';

    const publicWidget = require('web.public.widget');

    publicWidget.registry.Banner17Carousel = publicWidget.Widget.extend({
        selector: '.s_banner_17',
        start: function () {
            const $carousel = this.$el.find('#brandsCarousel');

            // Configuración del carrusel
            $carousel.carousel({
                interval: 3000,   // autoplay cada 3s
                ride: 'carousel',
                pause: 'hover',
                wrap: true
            });

            return this._super.apply(this, arguments);
        },
    });
});
