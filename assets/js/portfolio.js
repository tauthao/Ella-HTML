var grid = document.querySelector('.grid');
var msnry;
// element selectors
var imgAll = document.querySelectorAll('.grid-item');
var imgCosmopolis = document.querySelectorAll('.cosmopolis');
var imgSuito = document.querySelectorAll('.suito');
var imgMilancelos = document.querySelectorAll('.milancelos');
var imgBlazero = document.querySelectorAll('.blazero');
var imgGlamos = document.querySelectorAll('.glamos');
var imgMetropolis = document.querySelectorAll('.metropolis');
var clickIcon = document.querySelectorAll('.zoom');
// buttons
const tabsUl = document.getElementById('buttonGroup');
const lis = tabsUl.children;
const gridItems = grid.children;

imagesLoaded(grid, function(){
	msnry = new Masonry( grid, {
		//options
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});

//element & class name
function toggleClass(parentElem, childElems, className){
	for(let i = 0; i <childElems.length; i++){
		if(childElems[i]==parentElem){
			childElems[i].classList.add(className);
		}
		else{
			childElems[i].classList.remove(className);
		}
	}
}

function showImages(showImg, hideImg1, hideImg2){
	for(let i = 0; i < showImg.length; i++){
			showImg[i].style.display = "block";
		}
		for(let i = 0; i < hideImg1.length; i++){
			hideImg1[i].style.display = "none";
		}
		for(let i = 0; i< hideImg2.length; i++){
			hideImg2[i].style.display = "none";
		}
}

tabsUl.addEventListener('click', (event) =>{
	let tabLi = event.target.parentNode;
	toggleClass(tabLi, lis, 'is-active');
	//show all images
	if(event.target.id == "all"){
		for(let i = 0; i< imgAll.length; i++){
			imgAll[i].style.display = "block";
		}
	}
    if(event.target.id == "Cosmopolis"){
		showImages(imgCosmopolis, imgSuito, imgMilancelos, imgBlazero, imgGlamos, imgMetropolis);
	}
    if(event.target.id == "Suito"){
		showImages(imgSuito, imgMilancelos, imgBlazero, imgGlamos, imgMetropolis, imgCosmopolis );
	}
    if(event.target.id == "Milancelos"){
		showImages(imgMilancelos, imgBlazero, imgGlamos, imgMetropolis, imgCosmopolis, imgSuito);
	}
    if(event.target.id == "Blazero"){
		showImages(imgBlazero, imgGlamos, imgMetropolis, imgCosmopolis, imgSuito, imgMilancelos);
	}
    if(event.target.id == "Glamos"){
		showImages(imgGlamos, imgMetropolis, imgCosmopolis, imgSuito, imgMilancelos, imgBlazero);
	}
    if(event.target.id == "Metropolis"){
		showImages(imgMetropolis, imgCosmopolis, imgSuito, imgMilancelos, imgBlazero, imgGlamos);
	}
	msnry.layout();
});






