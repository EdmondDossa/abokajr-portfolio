# Portfolio · Marie Edmond DOSSA HEGNON

Portfolio de développeur full stack web & mobile, bilingue (français / anglais) : études de cas des projets avec captures réelles, parcours, compétences et CV téléchargeable.

En ligne : https://abokajr-portfolio.vercel.app

## Stack

React 19, Vite 6, Tailwind CSS 4 et Framer Motion. Plusieurs animations sont inspirées des composants gratuits d'[Originkit](https://www.originkit.dev/) (Stagger Text Rise, Scroll Text Highlight, Scramble Text, Glow Border, Shine Card, Pulse Grid, Hover Image Reveal), réécrites en version légère sans GSAP ni three.js. Toutes respectent `prefers-reduced-motion`.

## Commandes

```sh
npm install
npm run dev      # serveur de développement sur http://localhost:3000
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build
npm run cv       # régénère public/cv/Marie-Edmond-DOSSA-HEGNON-CV.pdf depuis cv/cv-fr.html (Google Chrome requis)
```

## Où modifier le contenu

| Fichier | Contenu |
| --- | --- |
| `content.ts` | Coordonnées, textes de l'interface, expériences, formation, compétences |
| `projects.ts` | Projets : accroche, besoin, réalisations, chiffres, stack, liens et galerie de captures |
| `cv/cv-fr.html` | Source du CV (2 pages A4). Relancer `npm run cv` après modification |
| `public/projects/<projet>/` | Captures en WebP : `-1200` / `-2400` pour le bureau, `-390` / `-780` pour le mobile |

Pour ajouter une capture, exportez-la dans les deux tailles, au format 16:10 pour le bureau, puis ajoutez une entrée dans la `gallery` du projet dans `projects.ts`.
