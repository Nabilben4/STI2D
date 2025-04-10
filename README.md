# Séquences Pédagogiques STI2D

Une application web interactive présentant les 12 séquences pédagogiques STI2D sous forme de vignettes cliquables.

## Prérequis

Avant de pouvoir exécuter l'application, vous devez installer :

1. **Node.js** : Téléchargez et installez Node.js depuis [le site officiel](https://nodejs.org/)
   - Choisissez la version LTS (Long Term Support)
   - Suivez les instructions d'installation pour Windows
   - Pour ajouter Node.js au PATH système :
     1. Ouvrez le menu Démarrer et recherchez "Variables d'environnement"
     2. Cliquez sur "Modifier les variables d'environnement système"
     3. Dans la fenêtre Propriétés système, cliquez sur "Variables d'environnement"
     4. Dans la section "Variables système", sélectionnez "Path" et cliquez sur "Modifier"
     5. Cliquez sur "Nouveau" et ajoutez ces deux chemins :
        - C:\Program Files\nodejs\
        - C:\Users\[VotreNom]\AppData\Roaming\npm\
     6. Cliquez sur "OK" pour fermer toutes les fenêtres
     7. Redémarrez votre terminal pour que les changements prennent effet

## Installation

Une fois Node.js installé, ouvrez un terminal PowerShell dans ce dossier et exécutez :

```bash
npm install
```

## Démarrage de l'application

Pour lancer l'application en mode développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173)

## Fonctionnalités

- Affichage des 12 séquences pédagogiques sous forme de grille
- Interface responsive adaptée à tous les écrans
- Dialogue détaillé pour chaque séquence
- Design moderne et animations fluides
- Navigation intuitive