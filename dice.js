var random = Math.random();

var choices = ["It is certain",
	       "It is decidedly so",
	       "Without a doubt",
	       "Yes, definitely",
	       "You may rely on it",
	       "As I see it, yes",
	       "Most likely",
	       "Outlook good",
	       "Yes",
	       "Signs point to yes",
	       "Reply hazy try again",
	       "Ask again later",
	       "Better not tell you now",
	       "Cannot predict now",
	       "Concentrate and ask again",
	       "Don't count on it",
	       "My reply is no",
	       "My sources say no",
	       "Outlook not so good",
	       "Very doubtful"];

var results = [];

function setupPage() {
    document.body.innerHTML  = "<!DOCTYPE html><head><title>Decision Maker 2000</title></head><body></body></html>";
    var div = document.createElement("div");
    div.style="max-width: 720px; margin: 0 auto; font-size: 1.5rem;";
    var decisionPara = document.createElement("h1");
    var decisionDiv = document.createElement("div");
    decisionDiv.id="results";
    decisionDiv.style="line-height:25rem;";
    var node = document.createTextNode("My decision is: ");
    decisionPara.style = "color: turquoise;";
    decisionPara.appendChild(node);
    decisionPara.appendChild(decisionDiv);
    var button = document.createElement("input");
    button.type = "button";
    button.value ="Let the Computer decide";
    button.onclick = decide;
    div.appendChild(decisionPara);
    div.appendChild(button);
    document.body.appendChild(div);
    showCode();
}

function createText(message) {
    var para = document.createElement("p");
    para.style = "text-align: justify; padding-left: 10%;max-width: 80%; line-height: 3rem; ";
    var node = document.createTextNode(message);
    para.appendChild(node);
    return para;
}

function showCode() {
    document.body.appendChild(createText(document.body.innerHTML));
}

function createRandom(limit) {
    var randomSeed = Math.random();
    return Math.floor(Math.abs((randomSeed*1000)%(limit+1)));
}

function fancyWrite(message) {
    //    document.body.innerHTML = "<blink><h1 style=\"font-size: 3rem; color: turquoise;\">"+message+"</h1></blink>";
    results.push(message);
    document.getElementById("results").innerText="";

    for (var i = results.length-1; i>=0; i--) {
	document.getElementById("results").appendChild(createText(results[i]));
	console.log(results);
    }
}

function decide() {
    switch (createRandom(choices.length-1)) {
    case 0:
    fancyWrite(choices[0]);
    break;
    case 1:
	fancyWrite(choices[1]);
	break;
    case 2:
	fancyWrite(choices[2]);
	break;
    case 3:
	fancyWrite(choices[3]);
	break;
    case 4:
	fancyWrite(choices[4]);
	break;
    case 5:
	fancyWrite(choices[5]);
	break;
    case 6:
	fancyWrite(choices[6]);
	break;
    case 7:
	fancyWrite(choices[7]);
	break;
    case 8:
	fancyWrite(choices[8]);
	break;
    case 9:
	fancyWrite(choices[9]);
	break;
    case 10:
	fancyWrite(choices[10]);
	break;
    case 11:
	fancyWrite(choices[11]);
	break;
    case 12:
	fancyWrite(choices[12]);
	break;
    case 13:
	fancyWrite(choices[13]);
	break;
    case 14:
	fancyWrite(choices[14]);
	break;
    case 15:
	fancyWrite(choices[15]);
	break;
    case 16:
	fancyWrite(choices[16]);
	break;
    case 17:
	fancyWrite(choices[17]);
	break;
    case 18:
	fancyWrite(choices[18]);
	break;
    case 19:
	fancyWrite(choices[19]);
	break;
    default:
	console.log("Undefined!");
	break;
}

}


