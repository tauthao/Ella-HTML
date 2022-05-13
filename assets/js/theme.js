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
            this.initSliderAboutUs();
            this.initSliderPolicies();
            this.initSlideShow();
            this.clickedActiveVideoStore();
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

        initSliderPolicies: function() {
            var bannerBlock = $('[data-policies-about]');

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
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            dots: itemDots_mb,
                            arrows: itemRow_mb,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Slide Next">' + iconArrow + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Slide Prev">' + iconArrow + '</button>',
                            responsive: [
                                {
                                  breakpoint: 1200,
                                  settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                  },
                                },
                                {
                                    breakpoint: 767,
                                    settings: {
                                      slidesToShow: 2,
                                      slidesToScroll: 1,
                                    },
                                  },
                                {
                                  breakpoint: 300,
                                  settings: {
                                    dots: itemDots_mb,
                                    arrows: itemRow_mb,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                  },
                                },
                               
                              ],
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
                            slidesToShow: 2,
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
                            }
                        ]
                        });
                        
                    }
                }

            });
        },

        clickedActiveVideoStore: function () {
            if($('[data-video-banner]').length > 0) {
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

                        if(self.hasClass('video_youtube')){
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

                        if($(event.currentTarget).scrollTop() < offsetTop - height){
                            if(!banner.find('.video-banner').hasClass('fixed_video')){
                                banner.find('.video-banner').addClass('fixed_video');
                            }
                        } else if($(event.currentTarget).scrollTop() > offsetTop + height + 20 ){
                            if(!banner.find('.video-banner').hasClass('fixed_video')){
                                banner.find('.video-banner').addClass('fixed_video');
                            }
                        }
                    });
                });
            }
        },

        
    }
})(jQuery);