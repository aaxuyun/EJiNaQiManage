//setTimeout Example

var count=0;
id=window.setTimeout("update()",2000);

function update(){
	count++;
	document.getElementById("count").value=count;
	 id=window.setTimeout("update()",2000);
}

function stop(){
	window.clearTimeout(id);
}

function start(){
	count=0;
	update();
}