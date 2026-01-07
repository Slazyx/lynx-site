// Effet texte lors du clic
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerText = "DOWNLOAD";
    });
});
