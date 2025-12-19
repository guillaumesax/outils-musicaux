import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'daily',
    title: 'Mes Outils',
    links: [
      { 
        label: 'SaxGuide', 
        url: 'https://huggingface.co/spaces/Guillaumesax/Saxguide', 
        description: 'Outil pour saxophoniste débutant' 
      },
      { 
        label: 'MO2', 
        url: 'https://guillaumesax.github.io/MO2/', 
        description: "S'y retrouver avec tous ces modes" 
      },
      { 
        label: 'PatternLab', 
        url: 'https://guillaumesax.github.io/patternlab/', 
        description: "Créer son pattern de batterie / Sa suite d'accords et export midi" 
      },
      { 
        label: 'MAO House', 
        url: 'https://huggingface.co/spaces/Guillaumesax/maohouse', 
        description: 'Exemple de fiche de travail MAO' 
      },
    ],
  }
];