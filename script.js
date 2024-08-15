const challenges = [
    // Défis généraux
    "Chanter une chanson a cappella",
    "Faire le coq",
    "Faire dix tours sur soi-même avec un balai",
    "Boire un cocktail préparé par les autres",
    "Faire du pole dance autour d’un lampadaire",
    "Parler sans utiliser une lettre définie",
    "Mimer une célébrité",
    "Faire la Macarena à l'envers",
    "Interdiction de dire 'non' toute la soirée",
    "Faire un strip-tease (habillé)",
    "Faire un tweet embarrassant",
    "Imiter la démarche de la personne à votre droite",
    "Faire un selfie dans une position ridicule",
    "Échanger vos vêtements avec une autre personne",
    "Faire un discours comme si vous étiez président",
    "Danser comme si personne ne regardait",
    "Faire un moonwalk",
    "Imiter un animal",
    "Chanter une chanson à l'envers",
    "Danser sur une chanson choisie",
    "Envoyer un message embarrassant à un ex",
    "Changer la sonnerie de ton téléphone pour un son ridicule",
    "Dire une phrase en chuchotant dans l’oreille d’un autre joueur",
    "Imiter un bébé qui pleure",
    "Porter une chaussette sur une main pendant deux tours",
    "Faire 10 pompes ou squats",
    "Faire un tour de la pièce en courant sur les genoux",
    "Appeler un restaurant et poser une question ridicule",
    "Parler en rimes pendant 5 minutes",
    "Dessiner quelque chose les yeux fermés",
    "Mettre un glaçon dans son pantalon",
    "Inventer une chanson de rap sur un sujet aléatoire",
    "Faire semblant de rire de manière excessive à tout ce qui est dit",
    "Dire un tongue twister trois fois rapidement",
    "Faire une déclaration d'amour à un inconnu sur les réseaux sociaux",
    "Faire une grimace pour le reste du tour",
    "Changer de voix à chaque phrase pendant 2 minutes",
    "Dessiner une moustache sur ton visage avec un marqueur",
    "Imiter un robot cassé",
    "Faire un cri d'animal chaque fois que quelqu'un dit ton prénom",
    "Prendre un selfie embarrassant et le poster en story",
    "Manger un citron sans faire de grimace",
    "Faire semblant d'être en slow motion pendant 2 minutes",
    "Imiter une publicité à la télé",
    "Porter des lunettes de soleil à l’intérieur jusqu’à la fin du tour",
    "Écrire un poème en 1 minute",
    "Essayer de toucher ton nez avec ta langue",
    "Faire semblant de parler une langue étrangère",
    "Porter une chaussette sur la tête pendant 3 minutes",
    "Changer de prénom pour le reste de la soirée",
    "Dire un mot interdit",
    "Manger un piment",
    // Défis axés sur Hiro
    "Hiro doit boire deux shots chaque fois que quelqu'un dit 'boire'",
    "Hiro doit faire un moonwalk après avoir bu deux shots",
    "Hiro doit imiter un animal après avoir pris deux bouffées d'herbe",
    "Hiro doit chanter une chanson à l'envers après deux verres de vin",
    "Hiro doit danser sur une chanson choisie par le groupe après avoir fumé deux fois",
    "Hiro doit mimer un film en ayant les yeux bandés après deux shots",
    "Hiro doit échanger son verre avec la personne en face et boire cul sec deux fois",
    "Hiro doit raconter une blague en tenant deux glaçons dans sa bouche",
    "Hiro doit faire le poirier après avoir bu deux cocktails",
    "Hiro doit parler avec un accent après avoir fumé deux fois",
    "Hiro doit faire une danse TikTok après deux verres de bière",
    "Hiro doit envoyer un message embarrassant à un ex après deux shots",
    "Hiro doit changer la sonnerie de son téléphone pour un son ridicule après deux verres",
    "Hiro doit dire une phrase en chuchotant dans l’oreille d’un autre joueur après deux bouffées",
    "Hiro doit imiter un bébé qui pleure après avoir bu deux verres",
    "Hiro doit porter une chaussette sur une main pendant deux tours après avoir fumé",
    "Hiro doit faire 10 pompes ou squats après avoir fumé deux fois",
    "Hiro doit faire un tour de la pièce en courant sur les genoux après deux shots",
    "Hiro doit appeler un restaurant et poser une question ridicule après deux verres",
    "Hiro doit parler en rimes pendant 5 minutes après deux shots",
    "Hiro doit dessiner quelque chose les yeux fermés après avoir fumé deux fois",
    "Hiro doit boire deux verres sans utiliser les mains",
    "Hiro doit faire semblant d'être en slow motion pendant 2 minutes après deux shots",
    "Hiro doit faire un bisou sur le crâne d’un chauve après deux verres",
    "Hiro doit convaincre un étranger de chanter bon anniversaire après deux bouffées",
    "Hiro doit faire un dessin de quelqu’un dans la rue et essayer de le lui vendre après deux shots",
    "Hiro doit garder un glaçon dans sa main jusqu’à la fonte totale après deux verres",
    "Hiro doit remplir un verre d’eau avec les mains attachées après deux bouffées",
    "Hiro doit chanter la Marseillaise dans un bar après deux shots",
    "Hiro doit faire un concours de grimaces après deux verres",
    "Hiro doit danser comme une poule après avoir fumé deux fois",
    "Hiro doit faire un discours de mariage après deux shots",
    "Hiro doit boire un shot cul sec chaque fois que quelqu'un dit 'Hiro'",
    "Hiro doit faire un concours de hula hoop après deux verres",
    "Hiro doit faire un concours de twerk après avoir fumé deux fois",
    "Hiro doit faire un concours de rap après deux shots",
    "Hiro doit faire un concours de karaoké après deux verres",
    "Hiro doit danser comme un robot après avoir fumé deux fois",
    "Hiro doit faire un compliment original à chaque personne après deux verres",
    "Hiro doit inverser ses vêtements avec une autre personne après avoir fumé deux fois",
    "Hiro doit boire à l'envers après deux shots",
    "Hiro doit dire l'alphabet à l'envers après deux verres",
    "Hiro doit changer de place avec la personne en face après avoir fumé deux fois",
    "Hiro doit faire un bisou à la personne de son choix après deux verres",
    "Hiro doit parler avec un accent après avoir fumé deux fois",
    "Hiro doit tenir en équilibre sur une jambe après deux shots",
    "Hiro doit faire un selfie de groupe après avoir fumé deux fois",
    "Hiro doit raconter un secret après deux verres",
    "Hiro doit écrire un mot sur le front de quelqu'un après avoir fumé deux fois",
    "Hiro doit chanter une chanson en remplaçant les mots par 'la la la' après deux shots",
    "Hiro doit manger un aliment bizarre après deux verres",
    "Hiro doit lancer un défi à quelqu'un d'autre après avoir fumé deux fois",
    "Hiro doit jouer à pierre-feuille-ciseaux après deux shots",
    "Hiro doit déclarer son amour à un objet après deux verres"
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