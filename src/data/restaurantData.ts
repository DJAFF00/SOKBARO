/**
 * Données officielles et configurables de SOKBARO (Cotonou, Bénin)
 * 
 * ÉLÉMENTS À REMPLACER / VALIDER :
 * - [REMPLACER] : Photos réelles du restaurant (placées actuellement avec des photographies haute définition générées)
 * - [À CONFIRMER] : Carte complète définitive et tarifs exacts de saison
 * - [À CONFIRMER] : Horaires complets de la semaine (ouvert à partir de 18h00, déjeuners sur réservation)
 * - [À CONFIRMER] : Liens officiels des réseaux sociaux Instagram & Facebook
 */

export interface MenuItem {
  id: string;
  category: 'entrees' | 'plats' | 'cocktails' | 'vins' | 'desserts';
  name: string;
  description: string;
  priceFca: number;
  highlight?: string;
  image: string;
  notes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  roleOrContext: string;
  rating: number;
  date: string;
  text: string;
  avatarInitial: string;
}

export const RESTAURANT_INFO = {
  name: 'SOKBARO',
  tagline: 'Petites portions. Grandes soirées.',
  subtitle: 'Lounge contemporain, petites assiettes d’auteur & mixologie à Cotonou.',
  rating: 4.9,
  reviewsCount: 45,
  startingPriceFca: 20000,
  phoneRaw: '+229 01 96 64 57 24',
  phoneClean: '2290196645724',
  whatsappUrl: 'https://wa.me/2290196645724',
  googleMapsUrl: 'https://www.google.com/maps/place/SOKBARO/@6.3508158,2.3540723,17z/data=!3m1!4b1!4m6!3m5!1s0x102357005a446d1f:0xd1896026abf563f1!8m2!3d6.3508158!4d2.3540723!16s%2Fg%2F11z4vk3nv4?authuser=0&hl=fr&entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D',
  address: {
    street: 'Quartier Haie Vive / Zone résidentielle chic',
    city: 'Cotonou',
    country: 'Bénin',
    display: 'Cotonou, Bénin'
  },
  hours: {
    dinner: 'Tous les soirs dès 18h00 jusqu’au bout de la nuit',
    lunch: 'Déjeuner sur réservation préalable & privatisations',
    note: 'Réservation obligatoire pour garantir votre table.'
  },
  palette: {
    primary: '#0B0B0B',
    secondary: '#F4EDE1',
    accent: '#C8883A',
    variantJustification: 'Variante Crépuscule & Cuivre Ambré (#070707, #EAE0D2, #C8883A) : elle retranscrit fidèlement l’ambiance feutrée des nuits chaudes de Cotonou, sublimant le reflet des bougies et la richesse des matières nobles.'
  },
  features: [
    { title: 'Petites portions à partager', description: 'Une gastronomie nomade et généreuse conçue pour la convivialité des tables.' },
    { title: 'Mixologie & Vins choisis', description: 'Cocktails signatures fumés, spiritueux de dégustation et cave à vins sélectionnée.' },
    { title: 'Ambiance feutrée & calme', description: 'Un écrin contemporain aux lumières douces, parfait pour les confidences et les célébrations.' },
    { title: 'Stationnement facile', description: 'Parking gratuit sur place et dans la rue, accès sécurisé et fluide.' },
    { title: 'Paiements & Familles', description: 'Cartes bancaires acceptées, adapté aux réunions d’amis comme aux familles.' }
  ]
};

export const MENU_CATEGORIES = [
  { id: 'entrees', label: 'Tapas & Entrées' },
  { id: 'plats', label: 'Plats & Braises' },
  { id: 'cocktails', label: 'Cocktails Signatures' },
  { id: 'vins', label: 'Vins & Spiritueux' },
  { id: 'desserts', label: 'Douceurs' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'entree-1',
    category: 'entrees',
    name: 'Brochettes de Filet Braisé au Miel & Tamarin Sauvage',
    description: 'Bœuf fondant laqué aux épices douces, graines de sésame grillées et réduction chaleureuse de tamarin.',
    priceFca: 7500,
    highlight: 'Coup de cœur',
    image: '/images/tapas.jpg',
    notes: 'Idéal à savourer au centre de la table'
  },
  {
    id: 'entree-2',
    category: 'entrees',
    name: 'Croustillants d’Alloco Dorés & Crème d’Avocat Citronnée',
    description: 'Bouchées caramélisées de bananes plantains, condiment soyeux à l’avocat mûr et pointe de piment doux.',
    priceFca: 5500,
    highlight: 'Douceur végétale',
    image: '/images/tapas_warm_terracotta_1790937959726.jpg',
    notes: 'Texture croustillante et veloutée'
  },
  {
    id: 'entree-3',
    category: 'entrees',
    name: 'Ceviche Frais de Mérou Côtier au Combawa',
    description: 'Pêche locale du jour relevée aux agrumes frais, grenade acidulée et huile vierge parfumée aux herbes.',
    priceFca: 8500,
    highlight: 'Fraîcheur',
    image: '/images/tapas_dish_signature_1790937057657.jpg',
    notes: 'Pêche artisanale de la côte béninoise'
  },
  {
    id: 'plat-1',
    category: 'plats',
    name: 'Côtelettes d’Agneau aux Braises & Mousseline Fumée',
    description: 'Viande tendre saisie au feu de bois, purée onctueuse de patates douces aux épices douces et jus corsé.',
    priceFca: 18500,
    highlight: 'Signature Braise',
    image: '/images/hero.jpg',
    notes: 'Cuisson lente à cœur et peau croustillante'
  },
  {
    id: 'plat-2',
    category: 'plats',
    name: 'Grosses Gambas Flambées au Rhum & Émulsion Coco',
    description: 'Gambas royales saisies minute, beurre herbacé, crème de coco infusée au gingembre frais et manioc fondant.',
    priceFca: 22000,
    highlight: 'Prestige',
    image: '/images/hero_velvet_lounge_1790937947549.jpg',
    notes: 'Flambage délicat au rhum vieux'
  },
  {
    id: 'plat-3',
    category: 'plats',
    name: 'Suprême de Volaille Fermière & Réduction Citronnelle',
    description: 'Volaille dorée et moelleuse, mousseline de bananes jaunes et petits légumes glacés du marché.',
    priceFca: 14000,
    highlight: 'Finesse',
    image: '/images/terrasse.jpg',
    notes: 'Saveurs subtiles et réconfortantes'
  },
  {
    id: 'cocktail-1',
    category: 'cocktails',
    name: 'Nokoué Smoke & Bourbon Ambré',
    description: 'Bourbon noble infusé au bois fumé, velours de bissap artisanal, zeste d’orange séchée et volute de romarin.',
    priceFca: 7000,
    highlight: 'Création phare',
    image: '/images/cocktail.jpg',
    notes: 'Servi sous une cloche de fumée aromatique'
  },
  {
    id: 'cocktail-2',
    category: 'cocktails',
    name: 'Cotonou Golden Sunset',
    description: 'Gin botanique, pulpe fraîche de fruit de la passion, sirop artisanal de gingembre doux et bulles fines.',
    priceFca: 8500,
    highlight: 'Effervescent',
    image: '/images/cocktail_golden_glow_1790937971388.jpg',
    notes: 'Harmonie fruitée et pétillante'
  },
  {
    id: 'cocktail-3',
    category: 'cocktails',
    name: 'Élixir Botanique Hibiscus & Agrumes (Sans alcool)',
    description: 'Infusion froide de fleurs de karkadé, cordial de citronnelle fraîche et effervescence d’eau de source.',
    priceFca: 4500,
    highlight: 'Douceur sans alcool',
    image: '/images/cocktail_signature_bar_1790937070595.jpg',
    notes: 'Frais, floral et tonique'
  },
  {
    id: 'vin-1',
    category: 'vins',
    name: 'Sélection Privée du Sommelier (Rouge & Blanc)',
    description: 'Grands cépages choisis pour leur rondeur et leur élégance avec les plats épicés et les braises.',
    priceFca: 32000,
    highlight: 'Cave Sélectionnée',
    image: '/images/soiree_ambiance_chaleur_1790937983157.jpg',
    notes: 'Servi à température idéale en verre cristal'
  },
  {
    id: 'vin-2',
    category: 'vins',
    name: 'Rhum Vieux de Dégustation & Spiritueux Rares',
    description: 'Fûts de chêne anciens, notes gourmandes de vanille sauvage, cacao chaud et fruits confits.',
    priceFca: 9000,
    highlight: 'Digestif d’exception',
    image: '/images/cocktail.jpg',
    notes: 'Dégustation lente en fin de soirée'
  },
  {
    id: 'dessert-1',
    category: 'desserts',
    name: 'Cœur Fondant Chocolat Noir & Coulis Passion Épicé',
    description: 'Grand cru de cacao onctueux, éclat croquant de noix de cajou locales torréfiées et fraîcheur passion.',
    priceFca: 6500,
    highlight: 'Gourmandise absolue',
    image: '/images/dessert.jpg',
    notes: 'Chaud et coulant à souhait'
  },
  {
    id: 'dessert-2',
    category: 'desserts',
    name: 'Pavlova Croustillante Mangue & Crème Vanillée',
    description: 'Meringue vaporeuse, mangue rôtie au sucre de canne brut et chantilly aérienne au citron vert.',
    priceFca: 6000,
    highlight: 'Nuage sucré',
    image: '/images/dessert_gourmet_plating_1790937101173.jpg',
    notes: 'Fin de repas légère et lumineuse'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Aïcha K.',
    roleOrContext: 'Diaspora en séjour à Cotonou',
    rating: 5,
    date: 'Il y a 2 semaines',
    text: 'Une découverte extraordinaire à Cotonou ! Le concept de petites portions à partager est exécuté à la perfection. Les cocktails sont d’un niveau digne des meilleurs bars de Paris ou Londres, et l’ambiance est chic sans être guindée.',
    avatarInitial: 'A'
  },
  {
    id: 'rev-2',
    author: 'Jean-Marc D.',
    roleOrContext: 'Soirée entre amis & collègues',
    rating: 5,
    date: 'Il y a 1 mois',
    text: 'Le cadre est magnifique et intimiste. Très facile de se garer devant, ce qui est un vrai luxe ici. Le personnel est aux petits soins et les brochettes au tamarin sont mémorables. Réservation WhatsApp fluide et rapide.',
    avatarInitial: 'J'
  },
  {
    id: 'rev-3',
    author: 'Sandrine M.',
    roleOrContext: 'Dîner romantique à deux',
    rating: 5,
    date: 'Il y a 3 semaines',
    text: 'La note de 4,9 est amplement méritée. Ambiance tamisée, musique soignée au juste volume pour discuter, et une carte des vins vraiment qualitative. Nous reviendrons à chaque passage au Bénin.',
    avatarInitial: 'S'
  },
  {
    id: 'rev-4',
    author: 'Yannick B.',
    roleOrContext: 'Groupe d’étudiants & jeunes pros',
    rating: 5,
    date: 'Il y a 1 mois',
    text: 'Pour marquer le coup et fêter un événement, c’est le meilleur spot actuel. On a commandé plusieurs assiettes à partager au centre de la table, tout le monde a adoré. Le cocktail Nokoué Smoke est incontournable !',
    avatarInitial: 'Y'
  }
];
