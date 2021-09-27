// Reference to button created in HTML
var btnTranslate = document.querySelector("#btn-translate");

// Reference to textarea created in HTML
var textInput = document.querySelector("#txt-input");

// Reference to output textarea created in HTML
var outputDiv = document.querySelector("#output-div");

// API URL
var serverURL = "https://api.funtranslations.com/translate/numbers.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("An error occurred", error);
    alert("Server down, please try again later");
}


// Listening to "click" event (i.e. detecting click on the button), and executing a function when event occurs (callback). Here, clickEventHandler is the callback function as it is given to addEventListener as an input/argument.
function clickEventHandler() {

    var inputText = textInput.value; // Taking input

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);

