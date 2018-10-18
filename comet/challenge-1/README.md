Aujourd'hui, nous allons commencer par un peu de cryptographie simple !

> Il s'agit de réaliser un *chiffrement par transposition*, plus précisément un *route cipher en spirale* (https://en.wikipedia.org/wiki/Transposition_cipher#Route_cipher).

*Kesako*

> Le mieux est de prendre un example. Ce type de chiffrement accepte deux paramètres : les dimensions de la grille de transposition, et bien sûr le message à crypter. Prenons par example le message suivant, à transposer sur une grille de `9 par 3` :

`Yes, brother, comet is the bomb`

> Nous allons commencer par placer le message (sans espaces ni ponctuation), dans une grille de `9 par 3` (les cases vides sont remplies avec des `X`) :

```
Y e s b r o t h e
r c o m e t i s t
h e b o m b X X X
```

> puis nous allons prendre les lettres une par une, en commençant par le coin *en haut à droite*, en traçant une spirale dans le sens des aiguilles d'une montre, pour arriver au chiffrement suivant :

`etxxxbmobehrYesbrothsitemoc`

> Votre solution devra renvoyer le message crypté dans la variable `output`, et recevra dans la variable `input` les paramètres suivants :

```
input = {
  text: "Yes, brother, comet is the bomb",
  grid: [9, 3]
}
```

**N'oubliez pas d'optimiser,  il y a près d'1Mo d'inputs de test :p**
