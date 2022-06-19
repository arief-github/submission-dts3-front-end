  jQuery(document).ready(function() {

      /* ---------------------------------------------------------------------- */
      /*  Custom Functions
      /* ---------------------------------------------------------------------- */
      // ==== isotope for filtering images

      var $catsfilter = $('.cats-filter');

      $catsfilter.find('a').click(function() {
          $(this).parent().parent().find('a').removeClass('current');
          $(this).addClass('current');
      });

      var $plist = $('#portfolio-list');
      var $pfilter = $('#portfolio-filter');

      // run isotope
      $plist.isotope({
          filter: '*',
          layoutMode: 'masonry',
          animationOptions: {
              duration: 750,
              easing: 'linear'
          }
      });

      // filter isotope
      $pfilter.find('a').click(function() {
          var selector = $(this).attr('data-filter');
          $plist.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false,
              }
          });
          return false;
      });
  });
