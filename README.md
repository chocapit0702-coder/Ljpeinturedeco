# LJ Peinture & Décoration — site vitrine

Site statique (HTML + CSS + un petit fichier JavaScript), sans dépendance ni outil de compilation.
Publié par GitHub Pages : https://chocapit0702-coder.github.io/Ljpeinturedeco/

## Structure

```
index.html                 page unique (toutes les sections)
assets/style.css           mise en forme (couleurs en tête de fichier)
assets/site.js             menu mobile, en-tête, agrandissement des photos
assets/logo-lj.png         logo d'origine, non modifié
assets/img/                logo redimensionné et images d'illustration
assets/realisations/       vos photos de chantiers
assets/fonts/              polices Lora et Mulish (licence SIL OFL), hébergées sur le site
```

## Ajouter une photo de chantier

1. Déposer la photo dans `assets/realisations/` (environ 1600 px de large, JPG ou WebP).
2. Dans `index.html`, section « RÉALISATIONS », copier le bloc modèle indiqué en commentaire
   dans `<div class="gallery">`, puis adapter le nom du fichier, le texte `alt` et la légende.
3. Les cadres « Photos de chantiers à venir » disparaissent automatiquement dès la première photo.

Ne publier que des photos de vrais chantiers.

## Activer les avis Google

La section `#avis` est présente mais masquée (attribut `hidden`). Retirer `hidden`, coller de vrais
avis et le lien de la fiche Google, comme expliqué dans le commentaire au-dessus de la section.

## Images d'illustration

Les photos de l'accueil et des prestations proviennent de la maquette validée. Elles sont signalées
comme illustratives (mention sur la photo d'accueil, textes alternatifs et mentions légales).
Les remplacer par de vraies photos dès que possible : même nom de fichier dans `assets/img/`.
