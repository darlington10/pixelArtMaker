var draw = document.getElementById("set");
var canv = document.getElementById("canvas");
draw.onsubmit = drawGrid;
function drawGrid(evt){
     evt.preventDefault();
    var row = document.getElementById("row").value;
    var col = document.getElementById("col").value;
    //get values of the input elements with ids row and col
    makeGrid(canv, col, row);
    //makeGrid() function call

}
function makeGrid(body, width, height){
    while(body.firstChild){body.removeChildNodes(body.firstChild);}
    for(var a = 1; a <= height; a++){
        var trow = document.createElement("tr");
        body.appendChild(trow);
        for(var b = 1; b <= width; b++){
            var tcol = document.createElement("td");
            trow.appendChild(tcol);
            tcol.addEventListener("click", doClick);
            tcol.addEventListener("dblclick", clearColor);
        }

    }
}
function clearColor(){
    this.style.backgroundColor = "";
}
function doClick(){
    var color = document.getElementById("picker").value;
    return this.style.backgroundColor = color;
}

var clear = document.getElementById("clear");
clear.addEventListener("click", clearField);
function clearField(){
    while(canv.firstChild){
        canv.removeChild(canv.firstChild);
    }
}