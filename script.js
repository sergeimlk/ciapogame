const challenges = [
    "Danser comme un robot pendant 30 secondes.",
    "Imiter un personnage célèbre pendant 1 minute.",
    "Faire une chanson avec des bruits d'animaux.",
    "Raconter une blague et faire en sorte que tout le monde rit.",
    "Créer une œuvre d'art avec des objets trouvés dans la pièce.",
    "Faire une pose de yoga en équilibre pendant 1 minute.",
    "Inventer une danse originale et la montrer à tout le monde.",
    "Chanter une chanson en changeant les paroles pour parler de quelqu'un dans la pièce.",
    "Faire un discours en tant que président de la soirée.",
    "Réaliser un mini-théâtre en 2 minutes avec des objets comme accessoires.",
    "Faire un tour complet sur soi-même sans tomber.",
    "Imiter un animal pendant 1 minute.",
    "Faire un quiz rapide et demander aux autres de répondre.",
    "Changer de place avec quelqu'un d'autre sans se faire remarquer.",
    "Raconter une histoire drôle en utilisant uniquement des gestes.",
    "Faire une cascade légère (comme sauter en arrière ou rouler au sol).",
    "Mimer un film célèbre et laisser les autres deviner.",
    "Essayer de lancer un objet dans un panier à une certaine distance.",
    "Imiter un accent étranger pendant 2 minutes.",
    "Prendre une photo originale et la montrer au groupe."
];

const generateButton = document.querySelector('.generate-btn');
const challengesContainer = document.querySelector('.challenges');

function displayChallenges() {
    challengesContainer.innerHTML = ''; // Clear previous buttons
    challenges.forEach(challenge => {
        const button = document.createElement('button');
        button.textContent = challenge;
        button.className = 'challenge-btn';
        challengesContainer.appendChild(button);
    });
}

generateButton.addEventListener('click', displayChallenges);