const modalOverLay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for ( let card of cards ) {
    card.addEventListener("click", function(){ 
        const videoId = card.getAttribute("id");
        var newVideoId =  videoId.slice(1);
        window.location.href = "/video?id="+newVideoId
    });
}






