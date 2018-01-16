

/* Events fired on the drag target */
// drag es arrastrar, drop soltar.

document.ondragstart = function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element.";
};

document.ondragend = function(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
};

/* Events fired on the drop target */
document.ondragover = function(event) {
    event.preventDefault();
};

document.ondrop = function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
};


