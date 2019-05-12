// global properties, json, dictionary, hashmap(key-value)
state = {
    // key - value
    n : 0
}

function enterButtonClicked()
{
    // get the element from built-in document object 
    var nkez = document.getElementById("nkez");
    nkez.innerHTML = ++state.n + " kez tıkladınız";    
}

function clearButtonClicked()
{
    // sıfırlama işlemi
    state.n = 0;

    // get the element from built-in document object 
    // var nkez = document.getElementById("nkez"); // gerek yokmuş.
    nkez.innerHTML = "Tekrar baştan başlayalım, tabiki";

}

function setApplicationNameFromJavaScript()
{
    // get the element 
    var appName = document.getElementById("ApplicationName");

    // set the property value
    appName.innerHTML = "<h1>Buton Click Application</h1>";
}

function init()
{
    setApplicationNameFromJavaScript();
}

// call the main, init
function app()
{
    init();
}

function run()
{
    app();
}

// main, entry point
run();

