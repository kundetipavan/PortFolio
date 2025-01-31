let btn = document.getElementById("real");
let home = document.getElementById("home");
let edu = document.getElementById("container");
let more = document.getElementById("more");
let project = document.getElementById("projectss");
let back = document.getElementById("back");
let backk = document.getElementById("backk");


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

back.onclick = function(){
    home.style.display = "block";
    edu.style.display = "none";

    project.style.display = "none";
}


backk.onclick = function(){
    home.style.display = "block";
    edu.style.display = "none";

    project.style.display = "none";
}
















