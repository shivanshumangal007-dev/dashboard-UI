const notifiacationSpan = document.querySelectorAll("h2 span");

notifiacationSpan.forEach(span => {
    if(span.innerText.trim().length === 0){
        span.style.display = "none";
    }
});