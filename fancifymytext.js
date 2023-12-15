function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function makeTextFancy() {
    var textInput = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    }
}

function makeTextBoring() {
    var textInput = document.getElementById("textInput");
    if (document.getElementById("boringBetty").checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

function mooFunction() {
    var textInput = document.getElementById("textInput");
    var updatedText = textInput.value.replace(/\s/g, "_").toUpperCase();   
    textInput.value = updatedText + '-Moo';
}

document.getElementById("mooButton").onclick = mooFunction;