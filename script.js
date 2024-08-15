const challenges = [
    "Chanter une chanson a cappella",
    "Faire le coq",
    "Faire dix tours sur soi-même avec un balai",
    "Boire un cocktail préparé par les autres",
    "Faire du pole dance autour d’un lampadaire",
    "Parler sans utiliser une lettre définie",
    "Mimer une célébrité",
    "Faire la vaisselle à la fin de la soirée",
    "Faire la Macarena à l'envers",
    "Interdiction de dire 'non' toute la soirée",
    "Faire un strip-tease (habillé)",
    "Parler en chantant",
    "Faire un tweet embarrassant",
    "Raconter une blague sans rire",
    "Imiter la démarche de la personne à votre droite",
    "Faire un selfie dans une position ridicule",
    "Échanger vos vêtements avec une autre personne",
    "Faire un discours comme si vous étiez président",
    "Tenir un œuf sur une cuillère et faire le tour de la pièce",
    "Danser comme si personne ne regardait"
];

let challengeCount = 0;

function displayRandomChallenge() {
    if (challengeCount < 20) {
        const randomIndex = Math.floor(Math.random() * challenges.length);
        document.getElementById('challenge-display').textContent = challenges[randomIndex];
        challengeCount++;
        document.getElementById('challenge-counter').textContent = `${challengeCount}/20`;
        document.getElementById('progress').style.width = `${(challengeCount / 20) * 100}%`;
    }
    if (challengeCount === 20) {
        document.getElementById('new-challenge-btn').style.display = 'none';
        const replayBtn = document.getElementById('replay-btn');
        replayBtn.style.display = 'inline-block';
        replayBtn.classList.add('large');
    }
}

document.getElementById('new-challenge-btn').addEventListener('click', displayRandomChallenge);

document.getElementById('replay-btn').addEventListener('click', () => {
    challengeCount = 0;
    document.getElementById('new-challenge-btn').style.display = 'inline-block';
    document.getElementById('replay-btn').style.display = 'none';
    document.getElementById('replay-btn').classList.remove('large');
    document.getElementById('challenge-display').textContent = "Cliquez sur le bouton pour un défi !";
    document.getElementById('challenge-counter').textContent = "0/20";
    document.getElementById('progress').style.width = "0%";
});