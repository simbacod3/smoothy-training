export interface Card {
  title: string;
  description: string;
  img: string;
}

export const samples: Card[] = [
  {
    title: 'Test 1',
    description: 'Ceci est une description pour Test 1, montrant comment remplir un objet Card avec des données factices.',
    img: 'https://via.placeholder.com/150'
  },
  {
    title: 'Test 2',
    description: 'Une courte description pour Test 2, illustrant l’utilisation de fausses données dans un composant Card.',
    img: 'https://via.placeholder.com/150'
  },
  {
    title: 'Test 3',
    description: 'Description pour Test 3, avec un exemple de données factices pour remplir un objet de type Card.',
    img: 'https://via.placeholder.com/150'
  },
  {
    title: 'Test 4',
    description: 'Cet exemple montre comment ajouter une description et une image à un objet Card pour Test 4.',
    img: 'https://via.placeholder.com/150'
  },
  {
    title: 'Test 5',
    description: 'Pour Test 5, voici une description exemple avec une URL d’image factice, complétant l’objet Card.',
    img: 'https://via.placeholder.com/150'
  }
];
