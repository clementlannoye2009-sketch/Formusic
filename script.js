const { useState } = React;

const COURSES = [
  { 
    id: 0, 
    title: "Note explicative", 
    content: `
Les débuts de la formation musicale.

Avant la première leçon, je te présente en dessous des informations sur les signes principaux pour l’étude de la musique afin que tu puisses te familiariser avec les différentes figures que tu pourrais retrouver dans les leçons même s’ils ne font pas l’objet d’une étude immédiate.

La portée :
Elle se compose de 5 lignes et de 4 interlignes.
![Portée](https://via.placeholder.com/300x80?text=Portée)

Les clés : 
Ils existent plusieurs clés : 
Sol :
![Clé de sol](https://via.placeholder.com/50x80?text=Sol)
Fa :
![Clé de fa](https://via.placeholder.com/50x80?text=Fa)
D’ut :
![Clé d'ut](https://via.placeholder.com/50x80?text=D'ut)

(Nous étudierons d’abord la clé de sol)

Les noms des notes sur une clé de sol :
![Notes](https://via.placeholder.com/300x80?text=Notes)

Les figures de note :
![Figures](https://via.placeholder.com/200x80?text=Figures)

La valeur des notes :
![Valeurs](https://via.placeholder.com/200x80?text=Valeurs)

Les 7 silences :
![Silences](https://via.placeholder.com/200x80?text=Silences)

Les altérations :
![Altérations](https://via.placeholder.com/200x80?text=Altérations)

Les chiffres indicateurs de mesure :
![Mesure](https://via.placeholder.com/100x50?text=Mesure)

Les chiffres du bas :
1 représente une noire
2-Blanche
4-Noire
8-Croche
`
  },
];
