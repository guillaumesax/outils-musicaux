import { AppConfig } from './types';

export const DASHBOARD_APPS: AppConfig[] = [
  {
    id: 'saxguide',
    name: 'SaxGuide',
    description: "L'outil pour tous les apprentis saxophonistes",
    url: 'https://guillaumesax.github.io/saxguide',
    iconUrl: 'https://guillaumesax.github.io/saxguide/apple-touch-icon.png',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'mo2',
    name: 'MO2',
    description: 'Ne plus avoir de secrets sur les modes musicaux',
    url: 'https://guillaumesax.github.io/MO2/',
    iconUrl: 'https://guillaumesax.github.io/MO2/apple-touch-icon.png',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'patternlab',
    name: 'PatternLab',
    description: "Créer son propre pattern de batterie, sa suite d'accords et l'exporter en midi",
    url: 'https://guillaumesax.github.io/patternlab',
    iconUrl: 'https://guillaumesax.github.io/patternlab/apple-touch-icon.png',
    color: 'from-amber-500 to-orange-400'
  },
  {
    id: 'maohouse',
    name: 'MAO House',
    description: 'Une fiche de travail pour composer une musique en MAO',
    url: 'https://huggingface.co/spaces/Guillaumesax/maohouse',
    // URL MISE À JOUR
    iconUrl: 'https://i.postimg.cc/vHVdGzpv/307E2CE7-0E78-4884-A130-58893BF76416.png',
    color: 'from-emerald-500 to-teal-400'
  }
];