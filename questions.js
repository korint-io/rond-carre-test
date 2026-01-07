const questions = [
    {
        id: 1,
        question: "Vous oubliez ou perdez vos affaires (carte bleue, navigo, clés, lunettes de soleil...)**",
        multiple: true,
        options: [
            { value: 0, text: "Jamais" },
            { value: 1, text: "Vous avez souvent l'impression d'avoir perdu quelque chose que vous mettez du temps à chercher (chez vous, dans votre sac etc) mais que vous finissez par retrouver" },
            { value: 2, text: "C'est déjà arrivé une fois dans votre vie de réellement perdre un objet important (carte bleue, clé, navigo)" },
            { value: 3, text: "Ça vous est arrivé plusieurs fois" },
            { value: 4, text: "Ça vous arrive souvent" }
        ]
    },
    {
        id: 2,
        question: "Pour laver la vaisselle et les surfaces vous avez**",
        multiple: true,
        options: [
            { value: 2, text: "Une seule éponge, que vous changez régulièrement" },
            { value: 3, text: "Une seule éponge très sale" },
            { value: 1, text: "Une éponge pour la vaisselle, une éponge pour les surfaces" },
            { value: 0, text: "Une éponge pour la vaisselle, une pour les surfaces et une pour sol/four/très sale" },
            { value: 3, text: "Vous laissez votre éponge dans votre évier après avoir fait la vaisselle, sans l'avoir essorée" }
        ]
    },
    {
        id: 3,
        question: "Quand vous avez rendez-vous avec des amis, vous êtes",
        multiple: false,
        options: [
            { value: 3, text: "Systématiquement en retard" },
            { value: 0, text: "Ponctuel" },
            { value: -1, text: "Systématiquement ponctuel, parfois même en avance" },
            { value: 2, text: "Souvent en retard" },
            { value: 1, text: "Souvent à l'heure, mais des retards peuvent arriver" }
        ]
    },
    {
        id: 4,
        question: "Quand vous allez au restaurant",
        multiple: false,
        options: [
            { value: -1, text: "Vous avez réservé le restaurant, étudié le menu dans les détails et savez déjà ce que vous allez commander. Business plan en option, ça va vous coûter" },
            { value: 0, text: "Vous réservez souvent vos restaurants la veille ou l'avant-veille pour être sûr d'avoir de la place" },
            { value: 1, text: "Vous ne réservez jamais sauf occasion spéciale et allez au restaurant selon votre envie du moment, souvent sans savoir exactement ce que vous allez trouver sur la carte" },
            { value: 3, text: "Vous ne réservez jamais, ne savez pas vraiment dans quel restaurant vous êtes (népalais ? Tibétain ? Indien ?)" },
            { value: 4, text: "Vous laissez quelqu'un d'autre choisir votre plat pour vous car n'avez pas idée de ce que vous faites ici" }
        ]
    },
    {
        id: 5,
        question: "Vous avez cuisiné, mangé, vous êtes fatigué et la vaisselle s'amoncelle dans l'évier",
        multiple: false,
        options: [
            { value: 2, text: "Vous la ferez demain matin, vous la rincez un peu et allez vous coucher" },
            { value: 1, text: "Vous faites la vaisselle avant de dormir quoi qu'il arrive" },
            { value: 3, text: "Vous la laissez dans l'évier sans la rincer et la ferez demain" },
            { value: 4, text: "Vous la laisser dans l'évier sans la rincer, potentiellement plusieurs jours" },
            { value: 0, text: "Vous faites la vaisselle quoi qu'il arrive, vous la séchez et vous lavez l'égouttoir pour qu'il brille" }
        ]
    },
    {
        id: 6,
        question: "Utilisez-vous un agenda pour vos rendez-vous (de loisirs)",
        multiple: false,
        options: [
            { value: -1, text: "Oui, un agenda papier alors que vous disposez d'un téléphone avec agenda électronique" },
            { value: 0, text: "Oui, votre agenda (papier ou téléphone que vous tenez à jour et consultez régulièrement, même si vous connaissez votre emploi du temps par cœur de toute façon" },
            { value: 1, text: "Oui, vous utilisez un agenda mais oubliez de le remplir régulièrement" },
            { value: 2, text: "Vous disposez d'un agenda mais oubliez de le remplir régulièrement par cœur et pouvez faire des erreurs si vous oubliez de le consulter (erreur que vous rectifiez)" },
            { value: 3, text: "Non, vous ne notez aucun rdv s'il ne s'agit pas de rdv important" }
        ]
    },
    {
        id: 7,
        question: "Vous tâchez vos vêtements",
        multiple: false,
        options: [
            { value: 4, text: "Tellement souvent que vous vous y êtes fait et vivez avec votre tâche en toute quiétude" },
            { value: 3, text: "Ça arrive souvent, vous essayez de laver la tâche grossièrement avec de l'eau" },
            { value: 2, text: "Ça arrive souvent, vous vous changez si vous le pouvez" },
            { value: 1, text: "Ça arrive très rarement" },
            { value: 0, text: "Ça ne vous est jamais arrivé depuis que vous êtes une personne adulte" }
        ]
    },
    {
        id: 8,
        question: "Vous avez déjà raté un train ou un avion",
        multiple: false,
        options: [
            { value: 3, text: "Oui" },
            { value: 0, text: "Non" },
            { value: 1, text: "Non mais vous arrivez systématiquement en sprint avec 5min d'avance" },
            { value: -1, text: "Vous arrivez 3h en avance et avez le temps de terminer tous les romans emportés" }
        ]
    },
    {
        id: 9,
        question: "Vous possédez une brosse adhésive anti-poil",
        multiple: false,
        options: [
            { value: -1, text: "Oui et vous n'avez pas d'animal" },
            { value: 0, text: "Oui et vous avez un animal" },
            { value: 3, text: "Non, pourtant vous avez un animal" },
            { value: 1, text: "Non mais vous n'avez pas d'animal" }
        ]
    },
    {
        id: 10,
        question: "Vous écrivez un texte sur word",
        multiple: false,
        options: [
            { value: 0, text: "Tout est justifié, les interlignes sont égaux, les tableaux sont ajustés et centrés, la pagination est exacte, le remplissage des pages est optimisé" },
            { value: 1, text: "Le texte est justifié et les tableaux presque ajustés (personne ne verra), vous avez une page qui n'est remplie qu'à moitié seulement 3 lignes, tant pis" },
            { value: 3, text: "Le texte n'est pas justifié (ça veut dire quoi ?), les cases des tableaux ne sont pas de la même taille, vous avez utilisé la barre d'espace pour ajuster les éléments au lieu d'utiliser les outils « colonne » ou « alinéa »" }
        ]
    },
    {
        id: 11,
        question: "Votre budget",
        multiple: false,
        options: [
            { value: 0, text: "Vous faites vos comptes chaque mois et calculez vos futures dépenses dans chaque catégorie, vous mettez de l'argent de côté sur des livrets d'épargne quand vous le pouvez" },
            { value: 1, text: "Vous vérifiez de temps en temps vos comptes et mettez de l'argent de côté" },
            { value: 2, text: "Vous vérifiez vos comptes mais seulement pour paniquer, vous mettez peu d'argent de côté mais essayez de ne pas être dans le rouge, vos efforts ne payent pas forcément" },
            { value: 3, text: "Vous vérifiez peu ou jamais et êtes peut-être souvent dans le rouge, pas d'idée" }
        ]
    },
    {
        id: 12,
        question: "Vous tombez",
        multiple: false,
        options: [
            { value: 0, text: "Hein ? Jamais !" },
            { value: 2, text: "Parfois" },
            { value: 3, text: "Parfois en marchant sur vos lacets défaits" }
        ]
    },
    {
        id: 13,
        question: "Dans votre appartement",
        multiple: false,
        options: [
            { value: 0, text: "Tout à une place bien précise, vous replacez les objets (ustensile de cuisine, produit de salle de bain) si quelqu'un les range ailleurs" },
            { value: 1, text: "Vous faites en sorte qu'il n'y ait pas de choses qui traînent, peu importe leur place" },
            { value: 2, text: "Vous faites en sorte que rien ne traîne seulement si vous recevez des invités" },
            { value: 3, text: "Vous jetez aléatoirement vos vêtements et objets dans l'appartement quand vous rentrez chez vous" }
        ]
    },
    {
        id: 14,
        question: "Vous lavez vos draps",
        multiple: false,
        options: [
            { value: 4, text: "Non" },
            { value: 3, text: "Une fois tous les 6 mois" },
            { value: 2, text: "Une fois tous les 2 mois" },
            { value: 1, text: "Une fois par mois" },
            { value: 0, text: "Plus d'une fois par mois" }
        ]
    },
    {
        id: 15,
        question: "Vous n'entendez pas votre réveil ou vous rendormez et êtes en retard (le matin ou en journée lors d'une sieste)",
        multiple: false,
        options: [
            { value: 0, text: "Jamais" },
            { value: 2, text: "Ça arrive de temps en temps" },
            { value: 3, text: "Ça arrive régulièrement" }
        ]
    },
    {
        id: 16,
        question: "Vous arrive-t-il de ne plus avoir de batterie sur votre téléphone et rien pour le charger",
        multiple: false,
        options: [
            { value: -1, text: "Jamais, vous avez une batterie externe toujours avec vous" },
            { value: 0, text: "Jamais, vous faites en sorte de le charger avant chaque sortie" },
            { value: 1, text: "Rarement, mais ça peut arriver" },
            { value: 2, text: "Ça arrive régulièrement" },
            { value: 3, text: "Ça arrive tout le temps" }
        ]
    },
    {
        id: 17,
        question: "Utilisez-vous un marque-page",
        multiple: false,
        options: [
            { value: -1, text: "Bien sûr, toujours le même" },
            { value: 0, text: "Oui, vous changez de temps en temps car vous le perdez" },
            { value: 1, text: "Oui mais en vrai d'ailleurs vous avez trois cents perdus dans tous vos livres" },
            { value: 4, text: "Non je plie mes pages ou mets un bout de chips" },
            { value: 2, text: "Non, mais j'utilise des objets du quotidien qui remplisse bien cette tâche" }
        ]
    },
    {
        id: 18,
        question: "À quelle fréquence passez-vous l'aspirateur",
        multiple: false,
        options: [
            { value: 4, text: "Moins d'une fois par mois" },
            { value: 3, text: "Une fois par mois" },
            { value: 2, text: "Deux fois par mois" }
        ]
    },
    {
        id: 19,
        question: "Enlevez-vous les cheveux du siphon de votre douche",
        multiple: false,
        options: [
            { value: 3, text: "Non" },
            { value: 2, text: "Quand c'est bouché" },
            { value: 1, text: "De temps en temps en prévention" },
            { value: 0, text: "Régulièrement" }
        ]
    },
    {
        id: 20,
        question: "Quand vous cuisinez avec une poêle",
        multiple: false,
        options: [
            { value: 0, text: "Vous utilisez des cuillères en bois ou en silicone mou" },
            { value: 2, text: "Vous utilisez des outils en métal ou plastique dur" },
            { value: 3, text: "Vous utilisez des couteaux / fourchettes" }
        ]
    },
    {
        id: 21,
        question: "Refermez-vous les objets du quotidien après leur utilisation (porte de placard, bouteille, Tupperware, shampoing etc.)",
        multiple: false,
        options: [
            { value: 0, text: "Tout le temps" },
            { value: 1, text: "Ça vous arrive d'oublier" },
            { value: 2, text: "Plus tard quand vous repassez devant" },
            { value: 3, text: "Presque jamais" }
        ]
    },
    {
        id: 22,
        question: "Avez-vous déjà annulé au dernier moment ou oublié un rendez-vous (avec des amis, soirées, sport, rdv médical etc)",
        multiple: false,
        options: [
            { value: 0, text: "Jamais ou très rarement si impératif, en prévenant et présentant vos plus plates excuses" },
            { value: 1, text: "De temps en temps" },
            { value: 2, text: "Souvent" },
            { value: 3, text: "Votre venue est totalement aléatoire, les gens le savent et n'attendent même plus vos messages d'excuses" }
        ]
    }
];
