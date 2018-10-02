
var num =0;
var question = [
["which number you see in below picture?", "./img/15.jpg", "535","545", "551","non of them", "A"],
["which different number you see in below picture ?","./img/11.jpg", "6", "9","5","3","C"],
["which different number you see in below picture?","./img/12.jpg","7","8","9","6","B"],
["which different letter you see in below picture?","./img/13.jpg", "B", "P","R","B & R", "A"],
["which number you see in below picture?","./img/test-8.jpg", "541", "571","641","671","C"],
["which square color is different from others?", "./img/16.jpg", "3","7", "4","8", "B"],
["which number you see in below picture?", "./img/17.jpg", "38","88", "83","33", ""],
["which number you see in below picture?", "./img/Falsafi_614_.jpg", "38","58", "55","50", "B"],
["what do you read?", "./img/21.png", "ARE YOU HILG?","ME YOU HIGH?", "ARE YOU HIGH?","ARE ME HIGH?", "C"],
["which number you see in below picture?", "./img/22.png", "2387","2537", "3537","8257", "D"],
["which number you see in below picture?", "./img/23.jpg", "15","12", "17","51", "A"],
["which number you see in below picture?", "./img/24.png", "7","9", "2","3", "C"],
["which number you see in below picture?", "./img/25.png", "178","187", "778","787", "A"],
["what do you read?", "./img/26.jpg", "CLOSE FUTURE FAR AWAY","CLOSE FURTHER FAR WAY", "CLOSE FURTHER FOR AWAY","CLOSE FURTHER FAR AWAY", "D"],
["what do you read?", "./img/27.jpg", "I CAN SLEEP","I CANT SLEEP", "I CANT SLEEB","NONE", "B"],
["who do you see in the picture?", "./img/images (8).jpg", "ALbert Aneishtien","Merlin Monero", "Both","None", ""],
["how many F can you see in picture?", "./img/f.png", "3","7", "6","8", "A"],

];

var num =0;
var score = 0;
// var timer =;
// var answer =;
var text1="";
var text2="";
var answers =2;
function _(x) {
	return document.getElementById(x);
}
function renderquestion () {
	if (num >= question.length){
		_("qst").style.display="none";
		_("img").style.display="none";
		_("butns").style.display="none";
		_("result").style.display="block";
		_("txt1").innerHTML = text1;
		_("txt2").innerHTML = text2;
		
		_("scr").innerHTML = score + "/" + "60";
		
		_("answer").innerHTML = answers + "/" + question.length;
		// _("timer").innerHTML = "you did it at ";

		// _("butns").innerHTML =text1 + "<br>"+ text2+ "<br>You got"+ score;
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
	if(num ==6){
		if(val=="A"){
			text1 ="your left eye have problem as 7 question";
		}
		else if (val=="B"){
			text1="your eyes have no problem as 7 question";
		}
		else if( val=="C"){
			text1="your right eye have problem as 7 question";
		}
		else{
			text1="your eyes have both problems as 7 question";
		}
	}
	else if(num == 15){

		if(val=="A"){
			text2 ="you have normal vision as 15 question";
		}
		else if (val=="B"){
			text2="your eyes are near optic as 15 question";
		}
		else if( val=="C"){
			text2="your eyes are far optic as 15 question"
		 }
		else{
			text2="your eyes have problem as 15 question";
		}
	}
	else{ 
		if(val== question [num][6]){
		score +=4;
		answers++;

	}
	}
	num++;
	renderquestion();
}

window.addEventListener("load", renderquestion);
