function verifier() {
    // Je te vois regarder le code, mais je ne peux pas te laisser faire ça.
    // Je suis désolé, mais je ne peux pas te laisser voir le code.
    // Si tu regardes, c'est que tu n'as rien à faire ici.
    // Houste ! Tu ne peux pas voir ça.
    // C'est privé ce que tu regardes.
    // Je ne suis pas ingénieur en cybersécurité.

    const dateCorrecte = "2024-09-20";
    const prenomEntree = document.getElementById("prenom").value;
    const prenomCorrect = "Lucie";
    const dateEntree = document.getElementById("date").value;

    if (dateEntree === dateCorrecte && prenomEntree === prenomCorrect) {
        window.location.href = "success.html"; // Page de succès
    } else {
        document.getElementById("erreur").textContent = "Date incorrecte. Partez d'ici.";
    }
}

function toggleDetails(container) {
    const content = container.querySelector('.content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}