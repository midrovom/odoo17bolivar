odoo.define('theme_prime_image.brands_slider', function (require) {
  'use strict';

  var publicWidget = require('web.public.widget');

  publicWidget.registry.BrandsSlider = publicWidget.Widget.extend({
    selector: '.brands-slider',
    start: function () {
      this.$el.owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive: {
          0: { items: 2 },   
          576: { items: 3 }, 
          992: { items: 5 }, 
        }
      });
    }
  });
});
