document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("passwordForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const password = document.getElementById("passwordInput").value;
        // CORRECT PASSWORD SET TO 08062024
        if (password === "08062024") {
            window.location.href = "main.html";
        } else {
            alert("Gabim! Provoni përsëri ❤️");
        }
    });
});
