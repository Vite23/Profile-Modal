let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

// classlist allow to modify the property of css in html element

function openModal() {
    console.log("modal open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

function closeModal() {
    console.log("modal open");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}