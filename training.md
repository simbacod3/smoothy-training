# Exercice Vue 3 : Cartes filtrables

## Objectif

L'objectif de cet exercice est de mettre en pratique vos connaissances en Vue 3 en créant un composant de carte réutilisable, une liste de ces cartes, et en implémentant un filtre pour filtrer les cartes affichées sur une page.

## Instructions

### Partie 1 : Créer le composant `Card`

1. Créez un nouveau composant Vue nommé `Card.vue`.
2. Dans `Card.vue`, définissez des props pour le titre, la description, et une image de la carte.
3. Mettez en forme votre carte avec du HTML/CSS. Assurez-vous d'inclure le titre, la description, et l'image dans le rendu du composant.

### Partie 2 : Créer une liste de cartes

1. Dans votre composant principal (`App.vue` ou un autre composant de votre choix), importez le composant `Card`.
2. Définissez une liste de données pour vos cartes, chaque élément de la liste doit contenir un titre, une description, et une URL d'image.
3. Utilisez la directive `v-for` pour afficher une liste de composants `Card`, en passant les données de chaque carte comme props.

### Partie 3 : Créer un filtre pour les cartes

1. Ajoutez un champ de saisie (input) au-dessus de votre liste de cartes pour permettre aux utilisateurs de saisir un texte de filtrage.
2. Utilisez une propriété calculée (`computed property`) pour filtrer la liste des cartes en fonction du texte saisi dans le champ de saisie. La liste filtrée ne doit afficher que les cartes dont le titre ou la description contient le texte recherché.
3. Assurez-vous que le filtre réagit en temps réel à la saisie de l'utilisateur.

## Résultat attendu

À la fin de cet exercice, vous aurez une application Vue 3 qui affiche une liste de cartes filtrables. Les utilisateurs pourront saisir du texte dans un champ de saisie pour filtrer les cartes par titre ou description. Les cartes filtrées s'afficheront en temps réel en fonction de la saisie.

## Bonus

- Ajoutez des animations ou des transitions lorsque les cartes apparaissent ou disparaissent de la liste.
- Rendez votre liste de cartes réactive en utilisant Vue 3 Composition API au lieu de l'Options API.
