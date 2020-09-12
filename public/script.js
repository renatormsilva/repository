const modalOverLay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll(".card")
// const closeModal = document.querySelector(".close-modal");

for ( let card of cards ) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverLay.classList.add('active');
        modalOverLay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    });
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverLay.classList.remove("active");
    modalOverLay.querySelector("iframe").src = "";
});






