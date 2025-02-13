document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("passwordForm").addEventListener("submit", function (event) {

        event.preventDefault(); // Prevent form from actually submitting

        var passwordInput = document.getElementById("passwordInput").value; // Corrected ID

        var correctPassword = "06062024"; // Change this to your actual password

        if (passwordInput === correctPassword) {

            window.location.href = "main.html"; // Redirect to main page

        } else {

            alert("Incorrect password! Try again.");

        }

    });

});
