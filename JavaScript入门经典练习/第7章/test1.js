//create the name array
names =new Array();
i=0;
do{
	name=window.prompt("Enter the Next Name","");
	if(name!=""){
		names[i]=name;
	} 
	i++;
}
while(name!="");

for(i=0;i<names.length;i++){
	document.write("<ol>");
	document.write("<li>"+names[i]+"</li>");
	document.write("</ol>");
}