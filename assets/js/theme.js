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
            // this.initCloseAnnouncementBar();
            this.initLanguageCurrency();
            this.initOpenSearchForm();
            this.initDynamicBrowserTabTitle();
            this.initSidebarLogin();
            this.initSidebarCart();
            this.initCloseSidebar();
            this.initGlobalCheckbox();
            this.initNotifyInStock();
            this.initEditQuickCart();
            this.initNewsLetterPopup();
            this.initClosePopup();
            this.initSliderAboutUs();
            this.initSlideShow();
            this.clickedActiveVideoBanner();
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
                                        slidesToScroll: 1
                                    }
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        dots: itemDots,
                                        arrows: itemRow,
                                        slidesToShow: 4,
                                        slidesToScroll: 2
                                    }
                                },
                                {
                                    breakpoint: 552,
                                    settings: {
                                        dots: itemDots_mb,
                                        arrows: itemRow_mb,
                                        slidesToShow: 3,
                                        slidesToScroll: 3
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
            var languageCurrency = $(".header-language_currency");

            if (languageCurrency.length > 0) {
                $doc.on('click', '[data-dropdown-toogle]', (event) => {
                    if ($(event.currentTarget).find(".halo-dropdown").hasClass('show')) {
                        $('.halo-dropdown').removeClass('show');
                    } else {
                        $('.halo-dropdown').removeClass('show');
                        $(event.currentTarget).find(".halo-dropdown").toggleClass('show');
                    }
                });

                $doc.on('click', (event) => {
                    if ($('.halo-dropdown').hasClass('show') && ($(event.target).closest('[data-dropdown-toogle]').length === 0)) {
                        $('.halo-dropdown').removeClass('show');
                    }
                });
            }
        },

        initOpenSearchForm: function() {
            var inputSearch = $(".header-search__form .header-search__input"),
                quickSearchResul = inputSearch.parents(".header-search").find(".quickSearchResultsWrap");

            inputSearch.focus(function() {
                quickSearchResul.addClass("show");
            });

            $doc.on('click', (event) => {
                if ($('.quickSearchResultsWrap').hasClass('show') && ($(event.target).closest('.header-search').length === 0)) {
                    $('.quickSearchResultsWrap').removeClass('show');
                }
            });

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
        },

        initSidebarLogin: function() {
            var authIcon = $("[data-open-auth-sidebar]");

            if (authIcon.length) {
                authIcon.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('auth-sidebar-show');
                });
            }
        },

        initSidebarCart: function() {
            var authIcon = $("[data-open-cart-sidebar]");

            if (authIcon.length) {
                authIcon.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('cart-sidebar-show');
                });
            }
        },

        initCloseSidebar: function() {
            var closeSidebarAuth = $(".background-overlay, .halo-sidebar-close");

            closeSidebarAuth.on('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                if ($body.hasClass('auth-sidebar-show')) {
                    $body.removeClass('auth-sidebar-show');
                }

                if ($body.hasClass('cart-sidebar-show')) {
                    $body.removeClass('cart-sidebar-show');
                }
            });
        },

        initGlobalCheckbox: function() {
            $doc.on('change', '.global-checkbox--input', (event) => {
                var targetId = event.target.getAttribute('data-target');

                if (event.target.checked) {
                    $(targetId).attr('disabled', false);
                } else {
                    $(targetId).attr('disabled', true);
                }
            });
        },

        initNotifyInStock: function() {
            var btnNotify = $('.is-notify-me');

            if (btnNotify.length) {
                btnNotify.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('notify-me-show');
                });
            }
        },

        initEditQuickCart: function() {
            var btnQuickEdit = $('[data-open-edit-cart]');

            if (btnQuickEdit.length) {
                btnQuickEdit.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('edit-cart-show');
                });
            }
        },

        initNewsLetterPopup: function() {
            var newstterPopup = $(".halo-newsletter-popup");

            if (newstterPopup.length > 0) {
                var timeToShow = newstterPopup.data('delay'),
                    expiresDate = newstterPopup.data('expire');

                if (halo.getCookie('newsletter-popup') === '') {
                    setTimeout(function() {
                        document.body.classList.add('newsletter-show');
                    }, timeToShow);
                }
            }
        },

        setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            const expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        },

        getCookie(cname) {
            const name = cname + '=';
            const ca = document.cookie.split(';');

            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }

            return '';
        },

        deleteCookie(name) {
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },

        setClosePopup() {
            this.setCookie('newsletter-popup', 'closed', this.expiresDate);
            document.body.classList.remove('newsletter-show');
        },


        initClosePopup: function() {
            var closePopup = $(".background-overlay-popup, .halo-popup-close");

            closePopup.on('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                if ($body.hasClass('notify-me-show')) {
                    $body.removeClass('notify-me-show');
                }

                if ($body.hasClass('edit-cart-show')) {
                    $body.removeClass('edit-cart-show');
                }
            });
        },

        initSliderAboutUs: function() {
            var bannerBlock = $('[data-banner-about]');

            bannerBlock.each(function() {
                var self = $(this),
                    bannerItems = self.find(".halo-row-slider"),
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
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
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

                            ]
                        });
                    }
                }

            });
        },

        initSlideShow: function() {
            var bannerBlock = $('[data-slide-show]');

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
                            fade: true,
                            adaptiveHeight: false,
                            infinite: false,
                            vertical: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: itemDots_mb,
                            arrows: itemRow_mb,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Slide Next">' + iconArrow + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Slide Prev">' + iconArrow + '</button>',
                            responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    dots: itemDots,
                                    arrows: itemRow,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }]
                        });

                    }
                }

            });
        },

        clickedActiveVideoBanner: function() {
            if ($('[data-video-banner]').length > 0) {
                var videoBanner = $('[data-video-banner]');

                videoBanner.each((index, element) => {
                    var self = $(element),
                        banner = self.parents('.store-right'),
                        icon = banner.find('[data-close-video]'),
                        modal = banner.find('.modal-content-video');

                    self.off('click').on('click', (event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        var dataVideo = self.data('video');

                        $('.video-banner').find('.modal-video-content').remove();
                        $('.video-banner').removeClass('open_video fixed_video');

                        if (self.hasClass('video_youtube')) {
                            var templateModal = `
                                <div class="modal-video-content">
                                    <div class="video_YT video">
                                        <iframe\
                                            id="player"\
                                            type="text/html"\
                                            width="100%"\
                                            height="100%"\
                                            frameborder="0"\
                                            webkitAllowFullScreen\
                                            mozallowfullscreen\
                                            allowFullScreen\
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player"\
                                            src="https://www.youtube.com/embed/${dataVideo}?autoplay=1&mute=0"\
                                            data-video-player>\
                                        </iframe>\
                                    </div>
                                </div>
                            `;
                        } else {
                            var templateModal = `
                                <div class="modal-video-content">
                                    <div class="video">
                                        <video controls autoplay class="video">
                                            <source src="${dataVideo}">
                                        </video>
                                    </div>
                                </div>
                            `;
                        }

                        banner.find('.video-banner').addClass('open_video');
                        modal.html(templateModal);
                    });

                    icon.off('click').on('click', (event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        banner.find('.modal-video-content').remove();
                        banner.find('.video-banner').removeClass('open_video fixed_video');
                    });

                    $win.on('scroll', (event) => {
                        var offsetTop = modal.offset().top,
                            height = modal.height();

                        if ($(event.currentTarget).scrollTop() < offsetTop - height) {
                            if (!banner.find('.video-banner').hasClass('fixed_video')) {
                                banner.find('.video-banner').addClass('fixed_video');
                            }
                        } else if ($(event.currentTarget).scrollTop() > offsetTop + height + 20) {
                            if (!banner.find('.video-banner').hasClass('fixed_video')) {
                                banner.find('.video-banner').addClass('fixed_video');
                            }
                        }
                    });
                });
            }
        },


    }
})(jQuery);