class masonry extends HTMLElement {
    constructor() {
        super();

        this.Shuffle = window.Shuffle;
        this.element = this.querySelector('.shuffle-container');
        this.sizer = this.querySelector('.sizer-element');
        this.tabs = document.getElementById('haloPortfolioTabs');
        this.tabContents = document.getElementById('haloPortfolioTabContents');
        
        masonry.shuffleInstance = new this.Shuffle(this.element,
        {
            itemSelector: '.masonry-item',
            sizer: this.sizer
        });

        if(this.tabs){
            if(this.tabs.querySelector('a')){
                this.tabs.querySelectorAll('a').forEach((tabButton) => {
                    tabButton.addEventListener('click', this.onClickTabButtonHandler.bind(this));
                });
            }
        }
    }

    static reShuffleInstance() {
        masonry.shuffleInstance.filter();
    }

    onClickTabButtonHandler(event){
        event.preventDefault();
        event.stopPropagation();

        var btn = event.currentTarget,
            tab = event.target.closest('li'),
            value = tab.getAttribute('data-gallery');

        if(!tab.classList.contains('is-active')){
            this.tabs.querySelectorAll('li').forEach((element) => {
                element.classList.remove('is-active');
            });

            tab.classList.add('is-active');

            this.filterSelection(value);
        }
    }

    filterSelection(keyword){
        var items = $('[data-gallery-tab-content] .masonry-item');

        if (keyword == 'all'){
            masonry.shuffleInstance.filter();
        } else {
            masonry.shuffleInstance.filter((element) => {
                var filterValue = element.getAttribute('data-gallery-item');

                if(filterValue !== undefined && filterValue !== null){
                    return $(element).data('gallery-item').indexOf(keyword) != -1;
                }
            });
        }
    }
}

customElements.define('masonry-items', masonry);
