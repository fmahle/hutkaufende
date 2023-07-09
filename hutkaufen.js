document.getElementById("closing-x").addEventListener("click", function() {
    document.getElementById("image-container-wrapper").style.top = "745px";
    document.getElementById("information_bar").remove();
});

document.getElementById("up-button").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
