//setTimeout Example
window.onLoad=time();

function time(){
	now=new Date();
	hours=now.getHours();
	mins=now.getMinutes();
	secs=now.getSeconds();
	millsecs=now.getMilliseconds();
	document.getElementById("time").innerHTML="Time:"+hours+":"+mins+":"+secs+":"+millsecs;
	id=window.setTimeout("window.location.reload()",2000)
}

