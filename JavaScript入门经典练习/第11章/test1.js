
function display(){
	disWin=window.open("","smallWin","toolbar=0,status=no,width=30,height=20");
	message="<ul><li><b>Name:</b>"+document.getElementById("yourname").value+"</li>";
	message+="<li><b>Address:</b>"+document.getElementById("address").value+"</li>";
	message+="<li><b>Phone:</b>"+document.getElementById("phone").value+"</li></ul>";
	disWin.document.write(message);
};
var button=document.getElementById("display");
button.addEventListener("click", function(){
  display();
})
