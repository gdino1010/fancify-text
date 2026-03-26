/*
    Bigger Button Clicked
*/
document.getElementById("biggerBtn").addEventListener("click", function() {
    //Opttion 1
    const textArea = document.getElementById("comments");
    textArea.style.fontSize = "24pt";

    /*
    Option 2
    document.getElementById("comments").style.fontSize = "2pt";
     */
});

/*
    Fancy Button Clicked
*/
function styleText() {
    const textArea = document.getElementById("comments");
    const fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

/*
    Moo Button Clicked
*/
document.getElementById("mooBtn").addEventListener("click", function() {
    const textArea = document.getElementById("comments");
    let text = textArea.value;

    text = text.toUpperCase();

    let parts = text.split(".");
    let str = parts.join("-MOO.");

    textArea.value = str;
});
