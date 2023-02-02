+++
title = "Fabrication de mon meuble TV en acier et chêne"
date = 2023-01-23
draft = true

[taxonomies]
categories = ["Artisanat"]
tags = ["meuble", "tv", "artisanat", "bois", "chêne", "acier", "soudure", "mig"]

[extra]
lang = "fr"
toc = true
show_comment = true
math = false
mermaid = false
cc_license = true
outdate_warn = false
outdate_warn_days = 120
social_preview = true
+++

Aujourd'hui, je vais vous présenter le projet qui ma pris pas mal de temps, la fabrication de notre meuble TV suspendu en acier.

<!-- more -->

Pourquoi faire sont propre meuble TV ? Et bien, pour plusieurs raisons :

- On a pas trouvé de meuble TV qui nous plaisait
- On a pas envie de mettre 2500€ dans un meuble TV
- On a envie de faire quelque chose de sur mesure

Alors, ça ne m'a pas couté 2500€, mais ça m'a quand même pris pas mal de temps, plus de 6 mois, bien sur je n'y travailler pas a temps plein, mais avec un bébé, ce n'est pas toujours évident de trouver du temps pour soi.

## Conception

Je ne vais pas faire un tuto sur l'utilisation de SketchUp, il y a déjà pas mal de tuto sur le net, je vais juste vous montrer comment j'ai procédé pour faire le meuble.

La première chose a faire, c'est de dessiner le meuble, pour cela, j'ai utilisé [SketchUp](https://www.sketchup.com/fr), un logiciel de conception 3D qui est pas mal utilisé par les menuisiers.

Donc par ou commencer ? Par déssiner la pièce ou vas ce retrouvé le meuble et la TV, ça vous permet de vous projeter dans l'espace, de voir si ça vous plait et surtout de connaitre les dimensions du meuble qu'il vous faut.

{{ resize_image(path="/photos/meuble-tv-acier-bois/3D-1.png", width=720, height=10, op="fit_width", alt="Photo montrant un plan 3D partiel de notre salon ou vas ce trouvé notre meuble TV.") }}

Une fois la prise de mesure de la pièce faite, on peut la dessiner, il faudra ensuite déssiner et positionnée la TV, pour cela, il faut connaitre les dimensions de la TV, pour ma part, j'ai une TV 4K de 65 pouces.

Quand la TV est positionnée, vous allez pouvoir rajouter des règles pour formé un ractangle qui va définir la taille du meuble, libre a votre imagination :).

Pensé aussi a représenter avec une règle le block prises électriques/RJ45/etc... comme ça vous pourrez enticiper le positionnement des montants du meuble, voir sur la photo ci-dessous, j'ai rajouté des règles pour représenter le block.

{{ resize_image(path="/photos/meuble-tv-acier-bois/3D-3.png", width=720, height=10, op="fit_width", alt="Photo montrant un plan 3D du meuble TV vue de l'arriere") }}

Il faudra aussi définir la hauteur du meuble (400 mm dans mon cas) et l'espace entre le sol et le meuble (200 mm, pour que le netoyage du sol soit plus facile), pensé aussi a laisser un espace entre la TV et le meuble si votre TV est aussi suspendu pour pouvoir rajouté une bare de son par exemple.

une fois les dimensions du meuble définie, vous pouvez commencer a dessiner les différentes pièces du meuble, pour ma part, j'ai décidé de faire un meuble à 3 portes et une niche central au dessus pour pouvoir y placer l'Apple TV (ou n'importe quel box TV).

Voici le résultat :

{{ resize_image(path="/photos/meuble-tv-acier-bois/3D-2.png", width=720, height=10, op="fit_width", alt="Photo montrant un plan 3D du meuble TV.") }}

Concernant le style et les choix des materiaux, j'ai voulu mixer l'acier et le bois (du Chêne).

J'ai pris des tube carrer de 20x20x2mm en acier chez [CCL](https://ccl.fr) pour faire l'ossature du meuble, et du 3 plis chêne en 19 mm pour le plateau du dessus et la niche, j'ai utilisé du MDF de 19 mm pour faire les portes qui on été recouvertes par de la tôle d'acier de 1 mm.

## Materiel

Il vous faudra de quoi soudé, meuler et couper de l'acier.

Voici la liste des outils que j'ai utilisé :

- Poste a souder MIG/MAG [DECA MIGA 220](https://www.soudure.pro/poste-a-souder-mig-mag-semi-automatique/100864-poste-mig-mag-semi-automatique-multi-procedes-deca-miga-220-8011399032963.html)
- Meuleuse angulaire [BOSCH GWS 18-125 V-LI](https://www.bosch-professional.com/be/fr/products/gws-18-125-v-li-060193A307)
- Scie à ruban [Sidamo SR 125 MV](https://www.sidamo.com/fr/gammes-produits/machines-pour-le-travail-du-metal/scies-ruban/scie-ruban-sr125-mv-0)
- Scie circulaire [BOSCH GKS 18V-57 G](https://www.bosch-professional.com/fr/fr/products/gks-18v-57-g-06016A2101)
- Ponceuse excentrique [BOSCH GEX 125-150 AVE](https://www.sobrico.com/p/bosch-060137b101-ponceuse-excentrique-400w-gex-125-150-ave-coffret-boxx-bosch-060137b101_SKU744193.html)
- Rail de guidage [BOSCH FSN 1600](https://www.bosch-professional.com/fr/fr/products/fsn-1600-1600Z0000F)
- [Positionneur magnétique](https://www.soudure.pro/positionneur-magnetique-et-pince/101621-positionneur-magnetique-grand-modele-8029388091402.html?controllerUri=product)
- Pince étau [FACOM 501APB](https://www.sobrico.com/p/facom-501apb-pince-etau-becs-longs-facom-501apb_SKU647628.html)
- Equerre à chapeau [FACOM DELA.1257.07](https://www.sobrico.com/p/facom-dela-1257-07-equerre-90-simple-chapeau-165x250mm-facom-dela-1257-07_SKU454107.html)

Bien evidement, vous pouvez utiliser d'autres outils et on est d'accord que si vous devais vous équipé pour faire ce meuble, ça va vous couter plus cher que d'acheter un meuble fait par un artisant...

## Matériaux

Pour l'acier il faut calculer le nombre de tube carré que vous allez avoir besoin, en général, il sont vendu par ~6050 mm, donc il faut calculer combien de pièces vous allez pouvoir faire avec les 6000 mm.

Je me rappel plus exactement combien de tube carré j'ai utilisé.

On appel ça un plan de découpe, il faudra tenir compte de l'epaisseur de coupe de votre lame de scie à ruban, il ne suffit pas de calculer le metre linéaire de vos pièces car vous allez avoir des chutes qui seront perdues et donc des metres linéaires en moins.

Il vous faudra de l'espace pour pouvoir couper ces tubes...

J'ai crée un site en ligne pour faire mes plans de découpe, il est en ligne [ici](https://www.stockcutsplanner.app) (bon il ne marche plus Heroku ne propose plus d'offre gratuit, à l'occasion je changerais de provider...).

Pour le bois, il faut calculer le nombre de planche que vous allez avoir besoin, en général, il sont vendu par 2100x2030 mm, donc il faut calculer combien de pièces vous allez pouvoir faire avec, pour mon cas un seul panneau été largement suffisant.

Par contre la aussi il faut utilisé un site pour faire vos plans de découpe, j'ai utilisé [CutList Optimizer](https://cutlistoptimizer.com), ça va voir permetrre d'optimiser vos plans de découpe pour avoir le moins de chutes possible.

{{ resize_image(path="/photos/meuble-tv-acier-bois/cutlist.png", width=720, height=10, op="fit_width", alt="Photo montrant le plan de découpe du panneau de chêne.") }}

Donc voici les matériaux que j'ai utilisé :

- Tube carré 20x20x2mm de chez CCL
- 3 plis chêne 19 mm en 2100x2030 mm (il faut être 2 pour le porter)

## Fabrication

Il faut commencer par faire les découpes des tubes carrés, pour cela, j'ai utilisé une scie à ruban et le plan de découpe que j'ai fait sur mon site.

Ça prend un peu de temps, pensé a bien pensé vos découpes avec les coupe d'onglet, ça vous évitera de devoir refaire des découpes.

Mon site en ligne pour le plan de découpe ne prend pas en compte les coupe d'onglet donc si vous prévoyez de le faire, il vous restera un peu plus de chute que prévu.

Pensé a ébavurer les bords des tubes carrés, ça vous évitera de vous couper et faire un chanfrein sur les bords des tubes carrés, ça permet d'avoir une meilleur surface pour la soudures.

### Ossature

Une fois les découpes faites, il faut assembler l'ossature, pour cela, j'ai utilisé un positionneur magnétique (une equerre magnétique).

On commence par le cadre du bas (voir la photo ci-dessous), on pointe uniquement pour être sur que tous est bien aligné et d'equerre, pour ce faire il vous suffit de mesuré la distance en diagonale entre les 2 coins opposés, si elle est égale à la longueur de l'autre diagonale, c'est que tout est bien aligné.

J'ai présenté le cadre sur le sol pour pouvoir vérifier que je n'avais pas vu trop grand :)

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_1560.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant le 1er cadre du bas du meuble TV posé au sol.") }}

Maintenant que tout est bien aligner et d'equerre, on peut commencer à faire la soudure définive, attention au risque de déformation...

On peux faire le 2eme cadre du haut, c'est la même chose, on pointe pour être sur que tout est bien aligné et d'equerre.

Ensuite on meule les soudure pour avoir une surface lisse.

Maintenant on peut commencer à assembler les 2 cadres, on commence par le cadre du bas et on positionne les montants exterieurs, on utilise encore une fois les equerres magnétiques pour être sur que tout est bien aligné et on pointe pour faire tenir un minimum les montants.

On peut positionnée le cadre du haut et on le pointe aussi.

Voila ce que ça donne :

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_1723.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant l'ossature du meuble TV avec les 2 cadres assemblés.") }}

On peut ajuster pour que tout soit bien aligné et d'equerre ensuite on attaque les montants interieurs, ainsi que les traverses pour faire la niche.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_1729.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant l'ossature du meuble TV avec la niche.") }}

Des que tout est bien aligné, on soude définitivement et meuler les soudure.

Pour les cotés, j'avais pensé a le faire en bois, mais finalement j'ai préféré le faire en acier, j'ai donc pris des fer plat de 15x2mm et j'ai fait un cadre en coupe d'onglet pour le positionné a l'interieur de l'ossature légérement enfoncé.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_2637.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant l'ossature du meuble TV avec le cadre en fer plat.") }}

J'ai ensuite découpé de la tôle d'acier de 1mm d'épaisseur pour faire les cotés, j'ai utilisé la scie circulaire avec une lame pour l'acier et j'ai positionné ces plaque par l'interieur du cadre en fer plat.

Pour souder de la tôle il faut faire attention à ne pas faire une soudures trop longue, sinon la tôle va fondre et vous allez avoir des trous dans votre tôle, le mieux c'est de faire uniquement des points a plusieurs endroit.

une fois les soudures faites, on peut attaquer la fabrication des portes.

### Portes

Il y a 3 portes 2 identique et une moins haute, pour faire les portes, j'ai utilisé du MDF de 19mm d'épaisseur, j'ai découpé les portes avec la scie circulaire et la lame pour le bois.

J'ai ensuite découpé de la tôle d'acier de 1mm d'épaisseur pour recouvrir les portes sur la face et les cotés, j'ai utilisé la scie circulaire avec une lame pour l'acier et j'ai positionné les tôles sur chaque porte et j'ai maintenu les tôles avec des pinces et du scotch.

J'ai pointer les tôles pour les maintenir en place et j'ai souder les tôles point par point.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_2911.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant un porte du meuble TV avec les pinces.") }}

Voici le resultat une fois les soudure meuler :

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_2913.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant un porte du meuble TV avec les soudure meuler.") }}

Comme les soudures on légérement déformé les tôles, il été très compliqué de sortir les tôles pour pouvoir les passé a l'hematite, j'ai donc mis des vis dans chaque coin pour pouvoir les sortir, il faut pensé a cassé la pointe de la vis au risque de perser la tôle...

### Le traintement de l'acier

Pour le traitement de l'acier, j'ai utilisé de l'[hématite](https://www.laverdure.fr/oxydation-et-patine-des-mtaux/1804-2372-hematite-1-4l.html), ça donne un style canon de fusil, autre avantage ça ne rajoute aucune sur epaisseur.

Par contre l'inconvénient c'est que ce n'est pas super pratique a appliquer sur des grosse structure, il faut pas laissé trop longtemps et il faut bien rincer a l'eau clair pour enlever le produit, une fois séché, il faut passé une [huile de jade](https://www.laverdure.fr/huiles/1328-2407-huile-de-jade-antioxydante-14l.html#/617-conditionnement-250_ml) pour arrêter l'oxydation et protégé l'acier.

Vous imaginé bien que j'ai passé un bon moment a faire ça, j'ai même du demandé de l'aide pour allez vite... mais ça n'a pas suffit, l'acier commencé a rouiller, j'ai du passé pas mal de temps pour gratter la rouille avec de la paille de fer

j'ai réussi a ratrapé le coup mais il reste toujours un reflé rouiller, ce n'est pas moche, ça donne un style, mais clairement je ne referais pas ça comme ça.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_3093.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant un porte du meuble TV avec l'hématite") }}

### Fixation au mur

Pour fixer le meuble au mur, j'ai mis 8 plaque d'acier avec 2 trous fraisé par plaque réparti sur le fond du meuble, j'ai utilisé des chevilles crampons pour fixer le meuble au mur (mur en brique).

Avec 16 chevilles crampons, ça tient bien, je me suis assis dessus (~98Kg) et ça ne bouge pas.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_2916.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant le meuble prêt a être fixer au mur") }}

J'avoue que j'ai vu large avec 16 chevilles crampons, surtout pour y mettre uniquement une Apple TV...

### Le bois

Pour le bois, il a fallu découpé les differentes plances, le plateau, les cotés, le fond et le plateau de la niche.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_3092.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant le panneau de 3 plis chêne dans mon garage.") }}

Pour pouvoir fixer les planches de la niche et le plateau, j'avais positioné des triangle avec un trou fraisé dans chaque angle pour pouvoir fixé les planches avec une vis, comme j'ai utilisé des tube carré de 20x20mm et que mes planches sont en 19mm et qu'il fallais les mettre légérement enfoncé, j'ai du faire des défonssage dans les angles des planches pour pouvoir les positionné.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_3118.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant le meuble tv avec les triangle et les planches.") }}

J'ai utilisé du contreplaqué de 19mm pour le fond du meuble qui n'était pas visible, peint en blanc.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_2194.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant une planche du bas du meuble tv avec l'angle défoncé.") }}

J'ai monté a blanc les planches de la niche pour voir si il fallait faire des ajustement.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_3119.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant la niche avec ces planches.") }}

### Le traitement du bois

J'ai utilisé une [huile de chez Blanchon](https://www.blanchon.com/professionnels/huile-pour-parquet.html) pour traiter le bois et le protéger.

### Assemblage

Il faut maintenant monté les portes sur le meuble, j'ai utilisé des charnière invisible, les mêmes qui sont utilisé pour vos meuble de cuisine et dressing.

J'ai maintenu la porte avec des serre-joint et j'ai fixé les charnières avec des vis sur les planches du fond.

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_4024.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant la porte sur le meuble TV.") }}

J'ai fait pareil pour les 2 autres portes, j'ai aussi mis une sorte d'equerre pliable pour retenir les 2 grande portes et un cable pour retenir la petite porte.

Une fois les 3 portes monté, j'ai fixé les planches de la niche et le plateau.

### Resultat

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_4046.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant le meuble TV fini.") }}

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_4049.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant le meuble TV fini.") }}

{{ resize_image(path="/photos/meuble-tv-acier-bois/IMG_4052.jpeg", width=720, height=10, op="fit_width", alt="Photo montrant le meuble TV fini.") }}

## Conclusion

Ça à été long, mais je suis content du résultat !

Je tiens a remercier Lydia qui m'a beaucoup aidé pour le traitement de l'acier, ainsi que pour porté le panneau, etc...

Voici le lien pour télécharger le [plan 3D SketchUp 2017 du meuble TV](/files/meuble-tv-acier-bois.skp).
