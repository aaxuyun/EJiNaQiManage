var squareObj=document.getElementById("square");
var leftButton=document.getElementById("left");
var rightButton=document.getElementById("right");

var x=squareObj.style.left;
var y=squareObj.style.top;
function pos(dx,dy){
	if(!squareObj) return;
	x=x+dx;
	y=y+dy;
	squareObj.style.left=x;
	squareObj.style.top=y;
}

leftButton.addEventListener("click", function(){
   pos(50,0);
});
rightButton.addEventListener("click", function(){
   pos(0,50);
});