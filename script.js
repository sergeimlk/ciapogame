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

document.getElementById('new-challenge-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    document.getElementById('challenge-display').textContent = challenges[randomIndex];
});