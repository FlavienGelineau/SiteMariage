document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    document.getElementById("confirmation").style.display = "block";
});