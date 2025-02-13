document.addEventListener("DOMContentLoaded", function() {
    function checkPassword() {
        const password = document.getElementById("password").value;
        const correctPassword = "yourpassword"; // Change this to your actual password

        if (password === correctPassword) {
            window.location.href = "main.html";
        } else {
            document.getElementById("error-message").textContent = "Incorrect password. Try again.";
        }
    }
    window.checkPassword = checkPassword;
});

/* style.css */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f9f9f9;
}
.container {
    margin-top: 50px;
}
input, button {
    margin: 10px;
    padding: 10px;
}
