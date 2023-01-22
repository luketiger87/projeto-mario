const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function altenerModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click",() => {
    altenerModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    altenerModal();
    video.setAttribute("src", "");
});