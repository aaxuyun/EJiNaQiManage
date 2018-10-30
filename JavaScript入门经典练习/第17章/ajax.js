//global variables to keep track of the request
// and the function to call when done
 var ajaxreq=false,ajaxCallback;

 function ajaxRequest(filename){
 	try{
 		//Firefox/IE7/Others
 		ajaxreq=new XMLHttpRequest();
 	} catch(error){
 		try{
 			ajaxreq=new ActiveObject("Microsoft.XMLHTTP");

 		} catch(error){
 			return false;
 		}
 	}
 	ajaxreq.open("GET",filename,true);
 	ajaxreq.onreadystatechange=ajaxResponse;
 	ajaxreq.send(null);
 }
 //ajaxResponse:Waits for response and calls a function
 function ajaxResponse(){
 	if(ajaxreq.readyState!=4) return;
 	if(ajaxreq.status==200){
 		//if the request succeeded...
 		if (ajaxCallback) ajaxCallback();
 	}else alert("Request failed:"+ajaxreq.statusText);
 	return true;
 }