var quotes = [];
var authors = [];

quotes[0] = "I have a new philosophy. I'm only going to dread one day at a time.";
authors[0] = "Charles Schulz";
quotes[1] = "Reality is the leading cause of stress for those in touch with it.";
authors[1] = "Jack Wagner";
quotes[2] = "Few things are harder to put up with than the annoyance of a good example.";
authors[2] = "Mark Twain";
quotes[3] = "The pure and simple truth is rarely pure and never simple.";
authors[3] = "Oscar Wilde";
quotes[4] = "There's no business like show business, but there are several businesses like accounting.";
authors[4] = "David Letterman";
quotes[5] = "Man invented language to satisfy his deep need to complain.";
authors[5] = "Lily Tomlin";
quotes[6] = "Don't cry because it's over, smile because it happened." ;
authors[6] = "Dr. Seuss";
quotes[7] = "Be; yourself; everyone else is already taken.";
authors[7] ="Oscar Wilde";
quotes[8]= "Two things a;re infinite: the universe and human stupidity; and I'm not sure about the universe";
authors[8]= "Albert Einstein";
quotes[9]= "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.";
authors[9]= "Bernard M. Baruch";
quotes[10]= "You know you're in love when you can't fall asleep because reality is finally better than your dreams.";
authors[10]= "Dr. Seuss";

var index  = 0;

$("#newq").click(function(){
	index = Math.floor(Math.random()*quotes.length);
	$("#quote").html("<p>"+ quotes[index]+ "</p><p style='float: right;'>" + authors[index] + "</p>");
	var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	$("#inner").css({"background-color": newColor});

});