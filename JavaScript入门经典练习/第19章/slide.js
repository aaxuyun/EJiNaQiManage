//Global variables
var numslides=0;
var currentslide=0,oldslide=3;
var x=0;
var slides=new Array();
function makeSlideshow(){
	imgs=document.getElementsByClassName("slide");
	for(var i=0;i<imgs.length;i++){
		slides[numslides]=imgs[i];
		if(numslides==0){
			imgs[i].style.zIndex=10;
		}
		else{
			imgs[i].style.zIndex=0;
		}
		numslides++;
	}
	window.setInterval(nextSlide,1000);
}

function nextSlide(){
	slides[currentslide].style.zIndex=9;
	slides[oldslide].style.zIndex=0;
	oldslide=currentslide;
	currentslide++;
	if(currentslide>=numslides) currentslide=0;
	slides[currentslide].style.left=400;
	x=400;
	slides[currentslide].style.zIndex=0;
	animateSlide();
	
}

function animateSlide(){
	x=x-25;
	slides[currentslide].style.left=x;
	slides[oldslide].style.left=x-400;
	if(x>0) window.setTimeout(function(){animateSlide();},1000);
}

window.onload=makeSlideshow;