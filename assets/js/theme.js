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
            // this.initHeaderSticky();
            this.initLanguageCurrency();
            this.initOpenSearchForm();
            this.initDynamicBrowserTabTitle();
            this.initSidebarLogin();
            this.initSidebarCart();
            this.initSidebarSearch();
            this.initGlobalCheckbox();
            this.initNotifyInStock();
            this.initQuickShop();
            this.initEditQuickCart();
            // this.initNewsLetterPopup();
            this.initSliderAboutUs();
            this.initSlideShow();
<<<<<<< HEAD
            this.clickedActiveVideoBanner();
            this.showPopupPassWord();
            this.showPopupLookbook();
=======
            this.initClickedActiveVideoBanner();
            this.initShowPopupPassWord();
            this.initShowPopupShare();
            this.initCountdown();
            this.initProductCustomerViewing();
            this.initProductSizeChart();
            this.initProducQuickView();
            this.initProducAskAnExpert();
            this.initZoomImage();
            this.initProductImageGallery();
            this.initWishlistActive();
            this.initUpdateVlueQuantity();
            this.initMenuMobile();
>>>>>>> main
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
                iconBackToTop = $(".recently-viewed-icon.scroll-to-top"),
                iconPopupNewsletter = $("[data-open-newsletter-popup]");

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

            iconPopupNewsletter.off('click').on('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                $body.addClass('newsletter-show');
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

        initHeaderSticky: function() {
            var header_position,
                header_height,
                activeClass = 'has-stickyHeader',
                sticky = $('[data-header-sticky]');

            header_height = sticky.height();
            header_position = sticky.offset().top + sticky.outerHeight(true);

            if (sticky.length > 0) {
                halo.stickyScroll(sticky, header_position, header_height, activeClass);
            }
        },

        stickyScroll: function(sticky, position, delta, activeClass) {
            var lastScrollTop = 0;

            $win.on('scroll load', () => {
                var scroll = $win.scrollTop();

                if (Math.abs(lastScrollTop - scroll) <= delta) {
                    return;
                }

                if (scroll > lastScrollTop && scroll > position) {
                    sticky.removeClass('sticky-down').addClass('sticky-up ');
                    $body.addClass(activeClass);
                } else {
                    if (scroll + $win.height() < $doc.height()) {
                        sticky.removeClass('sticky-up').addClass('sticky-down');

                        if (scroll > position) {
                            $body.addClass(activeClass);
                        } else {
                            $body.removeClass(activeClass);
                            sticky.removeClass('sticky-up sticky-down');
                        }
                    }
                }

                lastScrollTop = scroll;
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
            var authIcon = $("[data-open-auth-sidebar]"),
                btnClose = $(".background-overlay, .halo-sidebar-close");

            if (authIcon.length) {
                authIcon.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('auth-sidebar-show');
                });

                btnClose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if ($body.hasClass('auth-sidebar-show')) {
                        $body.removeClass('auth-sidebar-show');
                    }
                });

            }
        },

        initSidebarCart: function() {
            var authIcon = $("[data-open-cart-sidebar]"),
                btnClose = $(".background-overlay, .halo-sidebar-close");

            if (authIcon.length) {
                authIcon.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('cart-sidebar-show');
                });

                btnClose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if ($body.hasClass('cart-sidebar-show')) {
                        $body.removeClass('cart-sidebar-show');
                    }
                });

            }
        },
        initSidebarSearch: function() {
            var searchIcon = $("[data-mobile-search]"),
                btnClose = $(".background-overlay, .halo-sidebar-close");

            if (searchIcon.length) {
                searchIcon.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('search_sidebar-show');
                });

                btnClose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if ($body.hasClass('search_sidebar-show')) {
                        $body.removeClass('search_sidebar-show');
                    }
                });

            }
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
            var btnNotify = $('.is-notify-me'),
                btnclose = $(".background-overlay-popup, .halo-popup-close");

            if (btnNotify.length) {
                btnNotify.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('notify-me-show');
                });

                btnclose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    if ($body.hasClass('notify-me-show')) {
                        $body.removeClass('notify-me-show');
                    }

                });

            }
        },

        initQuickShop: function() {
            var btnQuickShop = $('[data-quickshop-popup]'),
                btnclose = $(".background-overlay-popup, .halo-popup-close");

            if (btnQuickShop.length) {
                btnQuickShop.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('quickshop-popup-show');
                });
                btnclose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    if ($body.hasClass('quickshop-popup-show')) {
                        $body.removeClass('quickshop-popup-show');
                    }

                });
            }
        },

        initEditQuickCart: function() {
            var btnQuickEdit = $('[data-open-edit-cart]');
            btnclose = $(".background-overlay-popup, .halo-popup-close");

            if (btnQuickEdit.length) {
                btnQuickEdit.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('edit-cart-show');
                });

                btnclose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    if ($body.hasClass('edit-cart-show')) {
                        $body.removeClass('edit-cart-show');
                    }

                });
            }
        },

        initNewsLetterPopup: function() {
            var newstterPopup = $(".halo-newsletter-popup");

            if (newstterPopup.length > 0) {
                var timeToShow = newstterPopup.data('delay'),
                    expiresDate = newstterPopup.data('expire'),
                    btnClose = $("[data-close-newsletter-popup],.background-overlay-popup");

                if ($.cookie('newsletter-popup') != 'closed') {
                    setTimeout(function() {
                        $body.addClass('newsletter-show');
                    }, timeToShow);
                };

                btnClose.click(function(e) {
                    $.cookie('newsletter-popup', 'closed', {
                        expires: 1,
                        path: '/'
                    });
                    $body.removeClass('newsletter-show');
                });
            }
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

        initClickedActiveVideoBanner: function() {
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

        initShowPopupPassWord: function() {
            $doc.on('click', '[data-open-password-popup]', (event) => {
                event.preventDefault();
                var $target = $(event.currentTarget),
                    $popup = $target.siblings('.popup');
                if (!$target.hasClass('active')) {
                    $target.addClass('active');
                    $popup.addClass('open');
                } else {
                    $target.removeClass('active');
                    $popup.removeClass('open');
                }
            });
            $doc.on('click', (event) => {
                if (!event.target.closest('[data-open-password-popup]') && !event.target.closest('[data-password-popup]')) {
                    $('[data-open-password-popup]').removeClass('active');
                    $('[data-password-popup]').removeClass('open');
                }
            });
        },

<<<<<<< HEAD
        showPopupLookbook: function() {
            $doc.on('click', '[data-open-lookbook-popup]', (event) => {
                event.preventDefault();
                var $target = $(event.currentTarget),
                    $popup = $target.siblings('.popup-lookbook');
                if(!$target.hasClass('active')){
                    $target.addClass('active');
                    $popup.addClass('open');
                } else {
                    $target.removeClass('active');
                    $popup.removeClass('open');
                }   
            });
            $doc.on('click', (event) =>{
                if(!event.target.closest('[data-open-lookbook-popup]') && !event.target.closest('[data-lookbook-popup]')){
                    $('[data-open-lookbook-popupp]').removeClass('active');
                    $('[data-lookbook-popup]').removeClass('open');
                }
            });
            $doc.on('click', '[data-popup-icon]', (event) =>{
                event.preventDefault();
                $('[data-open-lookbook-popupp]').removeClass('active');
                $('[data-lookbook-popup]').removeClass('open');
            });
        },
=======
        initShowPopupShare: function() {
            var wrapper = $(".productView-share");

            if (wrapper.length > 0) {
                var btnCopy = wrapper.find(".share-group .button-copy"),
                    btnShare = wrapper.find(".share-button"),
                    $temp = $("<input>"),
                    $url = wrapper.find(".field__input").val();

                btnShare.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    wrapper.find(".share-button__fallback").toggleClass("is-open");
                });

                btnCopy.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    wrapper.append($temp);
                    $temp.val($url).select();
                    document.execCommand("copy");
                    $temp.remove();
                    wrapper.find(".field__input").val("URL copied!");

                });

                $doc.on('click', '.share-button__close', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $(".share-button__fallback").removeClass("is-open");
                });

                $doc.on('click', (event) => {

                    if ($(event.target).closest('.share-button__fallback').length === 0) {
                        $(".share-button__fallback").removeClass("is-open");
                    }
                });
            }
        },

        initCountdown: function() {
            var countdownElm = $('[data-countdown]');
            if (countdownElm.length) {
                countdownElm.each(function() {
                    var self = $(this),
                        countDown = self.data('countdown'),
                        countDownDate = new Date(countDown).getTime();

                    var countdownfunction = setInterval(function() {
                        var now = new Date().getTime(),
                            distance = countDownDate - now;

                        if (distance < 0) {
                            clearInterval(countdownfunction);
                            self.remove();
                        } else {
                            var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                                hours = `0${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2),
                                minutes = `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2),
                                seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(-2),
                                strCountDown = '';
                            if (self.hasClass('product-countdown-block')) {

                            } else {
                                strCountDown = '<span class="num">' + days + '<span>Day</span></span>\
                                <span class="num">' + hours + '<span>Hrs</span></span>\
                                <span class="num">' + minutes + '<span>Min</span></span>\
                                <span class="num">' + seconds + '<span>Sec</span></span>';
                            }
                            self.html(strCountDown);
                        }
                    }, 0);
                });
            }
        },

        initProductCustomerViewing: function() {
            var wrapper = $(".productView-more").find('[data-customer-view]');

            if (wrapper.length > 0) {
                var numbersViewer = wrapper.data('customer-view'),
                    numbersViewerList = JSON.parse('[' + numbersViewer + ']'),
                    numbersViewerTime = wrapper.data('customer-view-time'),
                    timeViewer = parseInt(numbersViewerTime) * 1000;

                setInterval(function() {
                    var numbersViewerItem = (Math.floor(Math.random() * numbersViewerList.length));

                    wrapper.find('.text').text('[number] customers are viewing this product'.replace('[number]', numbersViewerList[numbersViewerItem]));
                }, timeViewer);
            }
        },

        initProductSizeChart: function() {
            var btnSizeChart = $('[data-open-size-chart-popup]'),
                btnClose = $(".background-overlay, .halo-popup-close");


            if (btnSizeChart.length) {
                btnSizeChart.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('size-chart-show');
                });

                btnClose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if ($body.hasClass('size-chart-show')) {
                        $body.removeClass('size-chart-show');
                    }
                    if ($body.hasClass('compare-color-show')) {
                        $body.removeClass('compare-color-show');
                    }
                });
            }
        },

        initProducQuickView: function() {
            var btnSizeChart = $('[data-open-quick-view-popup]'),
                btnClose = $(".background-overlay-popup, [data-close-quickView-popup]");


            if (btnSizeChart.length) {
                btnSizeChart.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('quick-view-show');
                });

                btnClose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if ($body.hasClass('quick-view-show')) {
                        $body.removeClass('quick-view-show');
                    }
                });
            }
        },

        initProducAskAnExpert: function() {
            var btnNotify = $('[data-open-ask-an-expert]'),
                btnClose = $(".background-overlay, .halo-popup-close");


            if (btnNotify.length) {
                btnNotify.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    $body.addClass('ask-an-expert-show');
                });

                btnClose.on('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if ($body.hasClass('ask-an-expert-show')) {
                        $body.removeClass('ask-an-expert-show');
                    }
                });
            }
        },

        initZoomImage: function() {

            var productZoom = $(".halo-productView").find('[data-zoom-image]');

            if ($win.width() > 1024) {
                productZoom.each((index, element) => {
                    var $this = $(element);

                    if ($win.width() > 1024) {
                        $this.zoom({ url: $this.attr('data-zoom-image'), touch: false });
                    } else {
                        $this.trigger('zoom.destroy');
                    }
                });
            }
        },

        initProductImageGallery: function() {
            var sliderFor = $(".halo-productView").find('.productView-for'),
                sliderNav = $(".halo-productView").find('.productView-nav'),
                arrow = sliderNav.data('arrow'),
                iconArrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"/></svg>';

            if (!sliderFor.hasClass('slick-initialized') && !sliderNav.hasClass('slick-initialized')) {
                sliderFor.slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    asNavFor: sliderNav,
                    arrows: true,
                    dots: false,
                    draggable: false,
                    adaptiveHeight: false,
                    focusOnSelect: true,
                    vertical: false,
                    verticalSwiping: false,
                    infinite: false,
                    nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Slide Next">' + iconArrow + '</button>',
                    prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Slide Prev">' + iconArrow + '</button>',
                    responsive: [{
                        breakpoint: 1280,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    }]
                });
                sliderNav.slick({
                    fade: true,
                    arrows: arrow,
                    dots: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Slide Next">' + iconArrow + '</button>',
                    prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Slide Prev">' + iconArrow + '</button>',
                    asNavFor: sliderFor
                });

            }
        },

        initWishlistActive: function() {
            $doc.on('click', '[data-wishlist]', (event) => {
                event.preventDefault();
                event.stopPropagation();

                var $target = $(event.currentTarget);

                if (!$target.hasClass('wishlist-added')) {
                    $target
                        .addClass('wishlist-added')
                        .find('.text')
                        .text('Added to wishlist');
                } else {
                    $target
                        .removeClass('wishlist-added')
                        .find('.text')
                        .text("Add to wishlist");
                }
            });
        },

        initUpdateVlueQuantity: function() {
            var btnQuantity = $('.previewCartItem-qty .btn-quantity');

            btnQuantity.on('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                var self = $(event.target);
                var $target = self.siblings('input[name="quantity"]');
                var currentVal = parseInt($target.val());

                if (self.hasClass('minus')) {
                    if (currentVal >= 2) $target.val(currentVal - 1)
                } else {
                    $target.val(currentVal + 1)
                }

            });
        },

        initMenuMobile: function() {
            var iconMenu = $('[data-mobile-menu]'),
                itemDropdown = $('.site-nav-mobile .menu-lv-item.dropdown .menu_mobile_link'),
                btnClose = $(".background-overlay, .halo-sidebar-close"),
                navTitle = $('.nav-title-mobile');

                if (iconMenu.length) {
                    iconMenu.on('click', (event) => {
                        event.preventDefault();
                        event.stopPropagation();
    
                        $body.addClass('menu-sidebar_show');
                    });
    
                    btnClose.on('click', (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        if ($body.hasClass('menu-sidebar_show')) {
                            $body.removeClass('menu-sidebar_show');
                        }
                    });

                    itemDropdown.on('click', (event) => {
                        event.preventDefault();
                        event.stopPropagation();
        
                        var $target = $(event.target);
                        $target.parent().siblings().removeClass('is-open').addClass('is-hidden');
                        $target.parent().removeClass('is-hidden').addClass('is-open');
                    });
        
                    navTitle.on('click', (event) => {
                        event.preventDefault();
                        event.stopPropagation();
        
                        var $target = $(event.target);
                        var $target = $(event.currentTarget),
                            $parentLv1 = $target.parents('.menu-lv-1'),
                            $parentLv2 = $target.parents('.menu-lv-2'),
                            $parentLv3 = $target.parents('.menu-lv-3');
        
                            if ($parentLv3.length > 0) {
                                $parentLv3.siblings().removeClass('is-hidden');
                                $parentLv3.removeClass('is-open');
                            } else if ($parentLv2.length > 0) {
                                $parentLv2.siblings().removeClass('is-hidden');
                                $parentLv2.removeClass('is-open');
                            } else if ($parentLv1.length > 0) {
                                $parentLv1.siblings().removeClass('is-hidden');
                                $parentLv1.removeClass('is-open');
                            }
                    });
                }
        },

>>>>>>> main
    }
})(jQuery);