// Tunggu sampai DOM selesai dimuat
window.onload = function () {
    const videoBubble = document.getElementById("videoBubble");
    const audioBubble = document.getElementById("audioBubble");
    const gambarBubble = document.getElementById("gambarBubble");

    videoBubble.addEventListener("click", function () {
        alert("Ini video Dora The Explorer");
    });

    audioBubble.addEventListener("click", function () {
        alert("Ini audio Dora The Explorer");
    });

    gambarBubble.addEventListener("click", function () {
        alert("Ini gambar Dora The Explorer");
    });
};
