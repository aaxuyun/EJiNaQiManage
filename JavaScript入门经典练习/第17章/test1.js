var qn=0;

function getQuestions(){
	obj=document.getElementById("question");
	obj.firstChild.nodeValue=("please wait");
	ajaxCallback=nextQuestion;
	ajaxRequest("http://192.168.1.178/questions.xml");
}
//display the next question
function nextQuestion(){
	questions=ajaxreq.responseXML.getElementsByTagName("q");
	obj=document.getElementById("question");
	if(qn<questions.length){
		q=questions[qn].firstChild.nodeValue;
		obj.firstChild.nodeValue=q;
	}else{
		obj.firstChild.nodeValue="no more questions";
	}
}
//check the user's answer
function checkAnswer(){
	answers=ajaxreq.responseXML.getElementsByTagName("a");
	a=answers[qn].firstChild.nodeValue;
	answersfield=document.getElementById("answer");
	if (a==answersfield.value){
		alert("Correct!")
	}
	else{
		alert("Incorrect.The Correct answer is:"+a);

	}
	qn=qn+1;
	answersfield.value="";
	nextQuestion();

}
//set up the event handlers for the buttons

obj=document.getElementById("startq");
obj.onclick=getQuestions;
ans=document.getElementById("submit");
ans.onclick=checkAnswer;