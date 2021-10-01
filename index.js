var btn = document.querySelector("#btn-translate");
var input = document.querySelector("#input-area");
var output = document.querySelector("#output-area");

var url= "https://api.funtranslations.com/translate/minion.json"

function errHandler(error){
    console.log("error occured" + error);
    alert("Something is wrong with the server");
}

function generateUrl(text){
    return url + "?" + "text=" + text;
}


function clickEventHandler() {
    
    var inputText = input.value;
    fetch(generateUrl(inputText)).then(response => response.json()).then(json => {
        var translatedtext = json.contents.translated;
        output.innerText = translatedtext;
    }).catch(errHandler);
}

btn.addEventListener("click", clickEventHandler);