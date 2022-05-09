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
            this.initSliderProduct();
            this.initDropdownColumns();
            this.initPopupRecentlyViewed();
            this.initCloseAnnouncementBar();
            this.initLanguageCurrency();
            this.initDynamicBrowserTabTitle();
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

        initSliderProduct: function() {
            var productBlock = $('[data-product-carousel]');

            productBlock.each(function() {
                var self = $(this),
                    productItems = self.find(".row"),
                    itemShow = self.data("item-to-show"),
                    itemDots = self.data("item-dots"),
                    itemDots_mb = self.data("item-dots-mb"),
                    itemRow = self.data("item-arrows"),
                    itemRow_mb = self.data("item-arrows-mb"),
                    iconArrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"/></svg>';
                if (productItems.length > 0) {
                    if (!productItems.hasClass('slick-initialized')) {
                        productItems.slick({
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

        initPopupRecentlyViewed: function() {
            var iconPopup = $(".recently-viewed-icon.open-popup"),
                iconBackToTop = $(".recently-viewed-icon.scroll-to-top");

            iconPopup.off('click').on('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                var self = $(event.currentTarget),
                    currPopup = self.data("target");

                if (self.hasClass("is-open")) {
                    $(".recently-viewed-icon").removeClass('is-open');
                    $(".recently-viewed-tab").removeClass('is-visible');
                } else {
                    $(".recently-viewed-icon").removeClass('is-open');
                    $(".recently-viewed-tab").removeClass('is-visible');
                    self.addClass("is-open");
                    document.getElementById(currPopup).classList.add('is-visible');
                }
            });

            $doc.on('click', (event) => {
                $(".recently-viewed-icon").removeClass('is-open');
                $(".recently-viewed-tab").removeClass('is-visible');
            });

            iconBackToTop.off('click').on('click', (event) => {
                $('html, body').animate({
                    scrollTop: 0
                }, 700);
            });
        },

        initCloseAnnouncementBar: function() {
            var announcementBar = $('.announcement-bar__message'),
                closeAnnouncement = announcementBar.find('[data-close-announcement');

            if ($.cookie('AnnouncementBar') == 'closed') {
                announcementBar.remove();
            } else {
                announcementBar.css('opacity', 1);
            };

            closeAnnouncement.off('click.closeHeaderTop').on('click.closeHeaderTop', function(e) {
                e.preventDefault();
                e.stopPropagation();

                announcementBar.remove();
                $.cookie('AnnouncementBar', 'closed', {
                    expires: 1,
                    path: '/'
                });
            });

        },

        initLanguageCurrency: function() {
            if ($('.header-language_currency').length > 0) {
                $doc.on('click', '.header-language_currency .halo-language', (event) => {
                    $('.dropdown-language').toggleClass('show');
                });

                // $doc.on('click', (event) => {
                //     if ($('.dropdown-language-currency').hasClass('show') && ($(event.target).closest('.wrapper_language_currency').length === 0)) {
                //         $('.dropdown-language-currency').removeClass('show');
                //     }
                // });
            }
        },

        initDynamicBrowserTabTitle: function() {
            var pageTitleContent = document.title,
                newPageTitleContent = window.dynamic_browser_text;

            window.onblur = function() {
                document.title = newPageTitleContent;
            }

            window.onfocus = function() {
                document.title = pageTitleContent;
            }
        }


    }
})(jQuery);