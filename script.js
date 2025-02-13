// Password Validation
document.getElementById("passwordForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const password = document.getElementById("passwordInput").value;
    
    if(password === "08062024") {
        window.location.href = "main.html";
    } else {
        alert("Gabim! Provoni përsëri ❤️");
        document.getElementById("passwordInput").value = "";
    }
});
