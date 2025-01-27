let btn = document.getElementById("real");
let home = document.getElementById("home");
let edu = document.getElementById("educ");
let more = document.getElementById("more");
let project = document.getElementById("projectss");


btn.onclick = function(){
    home.style.display = "none";
    edu.style.display = "block";
}

//----projects--------
more.onclick = function(){
    home.style.display = "none";
    edu.style.display = "none";

    project.style.display = "block";
}


















