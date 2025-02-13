// Password Protection
function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "08062024") {
        window.location.href = "valentine.html";
    } else {
        document.getElementById("error-message").innerText = "Gabim! Provo prapë! ❤️";
    }
}

// Floating Hearts Animation
document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});

