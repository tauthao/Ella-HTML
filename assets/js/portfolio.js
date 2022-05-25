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
function showImages(showImg, hideImg1, hideImg2, hideImg3, hideImg4, hideImg5){
	for(let i = 0; i < showImg.length; i++){
			showImg[i].style.display = "block";
		}
		for(let i = 0; i < hideImg1.length; i++){
			hideImg1[i].style.display = "none";
		}
		for(let i = 0; i< hideImg2.length; i++){
			hideImg2[i].style.display = "none";
		}
		for(let i = 0; i< hideImg3.length; i++){
			hideImg3[i].style.display = "none";
		}
		for(let i = 0; i< hideImg4.length; i++){
			hideImg4[i].style.display = "none";
		}
		for(let i = 0; i< hideImg5.length; i++){
			hideImg5[i].style.display = "none";
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
	//show ny images
	if(event.target.id == "cosmopolis"){
		showImages(imgCosmopolis, imgSuito, imgMilancelos, imgBlazero, imgGlamos, imgMetropolis);
	}
	// show flowers
	if(event.target.id == "suito"){
		showImages(imgSuito, imgMilancelos, imgBlazero, imgGlamos, imgMetropolis, imgCosmopolis);
	}
	// show other images
	if(event.target.id == "milancelos"){
		showImages(imgMilancelos, imgBlazero, imgGlamos, imgMetropolis, imgCosmopolis, imgSuito);
	}
	// show other images
	if(event.target.id == "blazero"){
		showImages(imgBlazero, imgGlamos, imgMetropolis, imgCosmopolis, imgSuito, imgMilancelos);
	}

	// show other images
	if(event.target.id == "glamos"){
		showImages(imgGlamos, imgMetropolis, imgCosmopolis, imgSuito, imgMilancelos, imgBlazero);
	}
	// show other images
	if(event.target.id == "metropolis"){
		showImages(imgMetropolis, imgCosmopolis, imgSuito, imgMilancelos, imgBlazero, imgGlamos);
	}
	msnry.layout();
});
grid.addEventListener('click',function(event){
	let imgContainer = event.target.parentNode;
	toggleClass(imgContainer, gridItems, 'grid-item__expanded');
	msnry.layout();
});



