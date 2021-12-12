// https://caniuse.com/?search=speech%20recognition

// Grab all the DOM elements we need
const transcription = document.querySelector("transcription")
let speechParagraph = document.createElement("p")

// Call our speech recognition API OBJ
// Initialize a speech recog API
window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition

// Instantiate the speech recognition
const recognitionSpeech = new window.SpeechRecognition()
console.log(recognitionSpeech)
recognitionSpeech.interimResults = true

recognitionSpeech.addEventListener("result", e => {
	const speechToText = Array.from(e.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join("")
	// Because we have 2 idexes we need to maps
	// Because map is gonna return an array we need to convert it to a string with . join('')

	speechParagraph.innerText = speechToText
	transcription.appendChild(speechParagraph)

	if (e.results[0].isFinal) {
		speechParagraph = document.createElement("p")
	}
})

recognitionSpeech.addEventListener("end", () => {
	recognitionSpeech.start()
})

recognitionSpeech.start()
