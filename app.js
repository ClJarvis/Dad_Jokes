const jokeText= document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const enteredJoke = document.getElementById("showJoke");
const inputJ = document.getElementById("enterJokes");
const aiReply = document.getElementById("aiReply");


jokeBtn.addEventListener("click", generateJokes)

generateJokes()

async function generateJokes(){
	const res = await fetch(
		"https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
		 )
	const data = await res.json();
	let joke = ""
	if (data.joke == undefined) {
		joke = `${data.setup} <br /> ${data.delivery}`
	} else {
		joke = data.joke
	}
		jokeText.innerHTML = joke
}

function showTheJoke() {
	function getRandomResponse(arr) {
		const responseIndex = Math.floor(Math.random() * arr.length);
		const item = arr[responseIndex];
		return item;
	}
const array = ["lol", "Ha Ha Ha", "good one!", "knee slapper",
 "That right there, is funny", "Nice", "OMG", 
 "Are you this funny all the time, or is today a special occasion?", 
 "You're killing me, Smalls.", "Stop it already." ];
const reply = getRandomResponse(array);


	enteredJoke.innerHTML = inputJ.value;
	aiReply.innerHTML = "- " + reply;
}

const button = document.getElementById('btn');
const content = document.getElementById('jokeText');

button.addEventListener('click', function() {
    // Toggle the hidden joke and reply 
    content.hidden = !content.hidden;


});