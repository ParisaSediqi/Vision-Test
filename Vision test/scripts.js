
var num =0;
var question = [

["which number you see in below picture?", "./img/2.jpg", "4","2", "3","5", "B"],
["which number you see in below picture?", "./img/10.jpg", "70","1", "0","10", "D"],
["which number you see in below picture?", "./img/7.jpg", "1","7", "3","9", "B"],
["which number you see in below picture?", "./img/45.jpg", "45","43", "75","44", "A"],
["which number you see in below picture?", "./img/57.jpg", "55","76", "57","75", "C"],
["which number you see in below picture?", "./img/w.jpg", "n","M", "w","vv", "C"],
["which number you see in below picture?", "./img/70.jpg", "70","10", "78","18", "A"],
["which number you see in below picture?", "./img/74.jpg", "77","71", "14","74", "D"],
["which number you see in below picture?", "./img/55.jpg", "33","5", "88","66", "B"],
["which number you see in below picture?", "./img/i15.jpg", "15","51", "55","11", "A"],
["which number you see in below picture?", "./img/8.jpg", "3","6", "9","8", "D"],
["who do you see in the picture?", "./img/g.jpg", "Mandela","Obama", "Kali","A,B", ""],
];
var num =0;
var score = 0;

var text="";
var answers=2;
function _(x) {
	return document.getElementById(x);
}
function renderquestion () {
	if (num>= question.length){
		_("qst").style.display="none";
		_("img").style.display="none";
		_("butns").style.display="none";
		_("result").style.display="block";
		_("txt1").innerHTML = text;
		
		_("scr").innerHTML = score+"/"+ "48";
		
		_("answer").innerHTML = answers+"/"+question.length;
	}
	_("qst").innerHTML = question [num][0];
	_("img").src =  question [num][1];
	_("btn0").innerHTML = question [num][2];
	_("btn1").innerHTML = question [num][3];
	_("btn2").innerHTML = question [num][4];
	_("btn3").innerHTML = question [num][5];
	
	_("counter").innerHTML = num+1 + " of "+ question.length;
}
	function checkanswer (val) {
	if(num ==11){
		if(val=="A"){
			text ="you have far blind problem as last answer";
		}
		else if (val=="B"){
			text="you have near blindness problem as last answer";
		}
		else if( val=="C"){
			text="your right eye have problem as last answer";
		}
		else{
			text="your eyes have blindness problems as last answer";
		}
	}else{


	if(val== question [num][6]){
		score +=4;
		answers++;

	}
}
	num++;
	renderquestion();
}
window.addEventListener("load", renderquestion);
