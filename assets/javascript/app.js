$(document).ready(function() {

var questionsAnswers = [

{question:"What year was the movie 'Toy Story' released?", answer1:"1991", answer2:"1989", answer3:"1995", answer4:"1999", correctAnswer:"1995"},
{question:"What country is home to the Eiffle Tower?", answer1:"France", answer2:"United Kingdom", answer3:"Germany", answer4:"Ireland", correctAnswer:"France"},
{question:"What is the largest city in the world by area?", answer1:"New York City", answer2:"Hong Kong", answer3:"Los Angeles", answer4:"Tokyo", correctAnswer:"Los Angeles"},
{question:"What type of fish is Dory?", answer1:"Clown fish", answer2:"Regal blue tang", answer3:"puffer fish", answer4:"Powder blue tang", correctAnswer:"Regal blue tang"},
{question:"Did Bill Cosby really do that?", answer1:"Yes", answer2:"No", answer3:"Maybe So", answer4:"Who knows", correctAnswer:"Who knows"},
{question:"What year was the world supposed to end (most recently)?", answer1:"2000", answer2:"2012", answer3:"1988", answer4:"1776", correctAnswer:"2012"},
{question:"Will the Padres ever win a World Series?", answer1:"Yes", answer2:"No", answer3:"Probably Not", answer4:"Never", correctAnswer:"Probably Not"}
];

var correctAnswers =0;
var inncorrectAnswers =0;
var unAnswered =0;
var timeLeft =45;

//counter display ...

function increment() {
	timeLeft--;
	$("#timeLeftStatement").html("<p>Time Remaining: " + timeLeft + "</p>");
	if(timeLeft ==0) {
		$("#submitBtn").on("click", function(){
	};
};

$(document).ready(function() {
	$("#startBtn").on("click", function() {
		$("#startBtn").fadeOut(1000);
		$("#main").append("<p id=timeLeftStatement>Time Remaining: " + timeLeft + "</p>");
		for(var i = 0; i < questionsAnswers.length; i++) {
			$("#main").append()
			$("#main").append()
			$("#form" + i + "").append('<input type="radio" name="answer">' + questionAnswerList[i].answerOne + '</input><br><input type="radio" name="answer" value='+i+'>' +questionAnswerList[i].answerTwo + '</input><br><input type="radio" name="answer">' +questionAnswerList[i].answerThree+ '</input><br><input type="radio" name="answer">' +questionAnswerList[i].correctAnswer+ '</input>' + '</input><br><input type="radio" name="answer">' +questionAnswerList[i].correctAnswer+ '</input>' + '</input><br><input type="radio" name="answer">' +questionAnswerList[i].correctAnswer+ '</input>');
	};
	$("#main").append('<input id="submitBtn" type="submit" value="submit">');
	$("#submitBtn").on("click", function() {
		$('#submitButton').fadeOut(1000);
    		$("#timeLeftStatement").fadeOut(1000);
    		$(".questionClass").fadeOut(1000);
            console.log($("input:radio:checked")[0]);
    		for (var i = 0; i < questionAnswerList.length; i++) {
    			$('#form' +i).fadeOut(1000);

                console.log($('#form' +i).checked);
	

		}; 

		$("#main").append('<h1>Done!</h1><br>');
    		$("#main").append('<p>Correct Answers: ' +correctAnswers+ '</p>');
    		$("#main").append('<p>Incorrect Answers: ' +incorrectAnswers+ '</p>');
    		$('#main').append('<p>Unanswered: ' +unAnswered+ '</p>');

    	});

    	counter = setInterval(increment, 1000);
    	
	});
});
	


