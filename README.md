# TKORP Test Front
Partie front du test technique TKORP qui a pour objectif la consommation de l'API réalisé en NestJs et l'affichage des données avec pagination.
## Installation
### Prérequis
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
### Etapes d'installation
**1.** Cloner le dépôt
```bash
git clone https://github.com/brightmarc90/tkorp_test_front.git
```
**2.** Se rendre dans le dossier du projet
```bash
cd tkorp_test_front
```
**3.** Installer les dépendances
```bash
npm install
```
## Configuration
Pour la gestion des variables d'environnment créer le fichier ``.env.local`` à la racine du projet et ajouter la ligne suivante
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```
Si l'URL de base de votre API est différente de celle là mettez la ligne à jour.
## Scripts disponibles
- ``npm run dev`` : démarre l'application en mode développement généralement sur l'adresse http://localhost:3000
- ``npm run start`` : démarre l'application en mode production
- ``npm run build`` : compile l'application pour la production
## Fonctionnalités
- Affichage de la liste des personnes avec pagination
- Affichage de la liste des animaux avec pagination
- Affichage des informations détaillées sur une personne / un animal
- Affichage des réponses aux questions
## Technologies utilisées
- [NextJS](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Materail UI](https://mui.com/material-ui/getting-started/) et [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Axios](https://axios-http.com/fr/docs/intro)
