var content = document.getElementById("kontent");
var button = document.getElementById("show-more");

button.onclick = function () {

    if (content.className=="open"){
        content.className="";
        button.innerHTML="more";
    }else{
        content.className="open";
        button.innerHTML="close"
    }

}