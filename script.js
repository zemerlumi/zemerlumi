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

// Heart Spawn Animation
function createHeartSpawn() {
    const heart = document.createElement('div');
    heart.className = 'heart-spawn';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1500);
}

setInterval(createHeartSpawn, 800);
