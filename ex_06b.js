window.onload = function() {
    let msgImg = document.querySelector("img"); 
     if (msgImg) {
        msgImg.addEventListener("mouseover", function() {
            alert("Pretty, isn't it?");
        });
    }
};

