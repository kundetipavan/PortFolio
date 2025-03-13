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

//----projects----------
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



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    
    document.getElementById("nameError").style.display = name ? "none" : "block";
    document.getElementById("emailError").style.display = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? "none" : "block";
    document.getElementById("subjectError").style.display = subject ? "none" : "block";
    document.getElementById("messageError").style.display = message ? "none" : "block";
    
    if (!name || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || !subject || !message) {
        isValid = false;
    }
    
    if (isValid) {
        let form = event.target;
        let formData = new FormData(form);
        document.getElementById("submitButton").textContent = "Sending...";
        document.getElementById("submitButton").disabled = true;
        
        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("submitButton").textContent = "Send Message";
            document.getElementById("submitButton").disabled = false;
            if (data.success) {
                document.getElementById("response").style.display = "block";
                form.reset();
            }
        })
        .catch(error => {
            document.getElementById("submitButton").textContent = "Send Message";
            document.getElementById("submitButton").disabled = false;
            console.error("Error:", error);
        });
    }
});











