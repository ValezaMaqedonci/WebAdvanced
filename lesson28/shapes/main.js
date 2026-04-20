var btn_circle = document.getElementById("btncircle")
var btn_rect = document.getElementById("btnrect")
var btn_tri = document.getElementById("btntri")

var circle = document.getElementById("circle")
var rect = document.getElementById("rect")
var tri = document.getElementById("tri")

btn_circle.onclick = function(){
    circle.setAttribute("class", "shape_circle");
}

btn_rect.onclick = function(){
    circle.setAttribute("class", "shape_rect");
}

btn_tri.onclick = function(){
    circle.setAttribute("class", "shape_tri");
}

/*circle.onclick = function()
{
    circle.setAttribute("class", "hide");
}


rect.onclick = function()
{
    rect.setAttribute("class", "hide");
}


tri.onclick = function()
{
    tri.setAttribute("class", "hide");
}*/