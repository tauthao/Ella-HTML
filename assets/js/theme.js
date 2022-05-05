(function($) {
    var $body = $('body'),
        $doc = $(document),
        $html = $('html'),
        $win = $(window),
        w = $win.width();

    $doc.ready(() => {
        halo.ready();
    });

    window.onload = function() {
        halo.init();
    }

    var halo = {
        haloTimeout: null,
        ready: function() {},
        init: function() {
            this.initSliderBanner();
            this.initDropdownColumns();
        },

        initSliderBanner: function() {
            var bannerBlock = $('[data-banner-carousel]');

            bannerBlock.each(function() {
                var self = $(this),
                    bannerItems = self.find(".row"),
                    itemShow = self.data("item-to-show"),
                    itemDots = self.data("item-dots"),
                    itemDots_mb = self.data("item-dots-mb"),
                    itemRow = self.data("item-arrows"),
                    itemRow_mb = self.data("item-arrows-mb"),
                    iconArrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"/></svg>';
                if (bannerItems.length > 0) {
                    if (!bannerItems.hasClass('slick-initialized')) {
                        bannerItems.slick({
                            mobileFirst: true,
                            adaptiveHeight: false,
                            infinite: false,
                            vertical: false,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: itemDots_mb,
                            arrows: itemRow_mb,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Slide Next">' + iconArrow + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Slide Prev">' + iconArrow + '</button>',
                            responsive: [{
                                    breakpoint: 1600,
                                    settings: {
                                        dots: itemDots,
                                        arrows: itemRow,
                                        slidesToShow: itemShow,
                                        slidesToScroll: 1,
                                    }
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        dots: itemDots,
                                        arrows: itemRow,
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                    }
                                },
                                {
                                    breakpoint: 552,
                                    settings: {
                                        dots: itemDots_mb,
                                        arrows: itemRow_mb,
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    }
                                }
                            ]
                        });
                    }
                }

            });
        },

        initDropdownColumns: function() {
            var sectionColumnTitle = document.querySelectorAll('[data-toggle-column]');
            if (sectionColumnTitle.length) {
                for (i = 0; i < sectionColumnTitle.length; i++) {
                    (function(i) {
                        sectionColumnTitle[i].addEventListener('click', (event) => {
                            var $this = event.target,
                                $content = $this.nextElementSibling;

                            $this.classList.toggle('is-clicked');
                            $content.classList.toggle('is-active');

                            if ($content.style.maxHeight) {
                                $content.style.maxHeight = null;
                            } else {
                                $content.style.maxHeight = $content.scrollHeight + 'px';
                            }
                        });
                    })(i);
                }
            }
        },

        
    }
})(jQuery);