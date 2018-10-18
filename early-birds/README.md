Early Birds Technical Test
==========================

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Test's description
**1ère partie : import du catalogue produit**
Crées une commande permettant l'import du flux produit au format CSV. Cette commande prend en paramètre l'adresse du fichier CSV.

Les produits sont chargés où tu le souhaites (en RAM, dans un MongoDB...)

**2ème partie : récupération des couleurs**
Crées une commande permettant l'interrogation de l'API Google Vision pour récupérer la couleur dominante.

Attention, le catalogue contient 500 produits hors l'API Google Vision en version gratuite est limitée à 1000 calls. Il est donc fortement recommandé de faire des tests sur un petit nombre de produits pour ne pas être bloqué. Néanmoins, tu auras besoin de valider le fonctionnement sur l'ensemble du catalogue. Quand tu es prêt, récupères les couleurs dominantes pour l'ensemble du catalogue et persiste les.

**3ème partie : création du endpoint de recommandation**
Crées une API avec un endpoint prenant en paramètre un ID de produit et retournant les produits dont la couleur dominante est la plus proche
Tu peux utiliser (ou t'inspirer) de ce module : https://github.com/gausie/colour-proximity

Tout autre méthode est également acceptée.

### How to use it

* clone the repo with `git clone https://github.com/adriantombu/early-birds`
* cd into the cloned repo
* install the dependencies with `yarn` or `npm i`
* duplicate `.env.exemple` as `.env` and fill the variables
* launch the project localy with `yarn debug` or `npm run debug` (the server will restart automagically when you change a file)
* launch the worker localy with `yarn debugWorker` or `npm run debugWorker `

### Endpoints

* **CSV import:** https://early-birds.herokuapp.com/import/products?url={csvUrl}
* **Vision API:** https://early-birds.herokuapp.com/enrichment/products/color
* **Similar products:** https://early-birds.herokuapp.com/products/{productId}/similar?nb={nbSimilarProducts}

### CSV test files can be found here
* [Short list of products](https://gist.githubusercontent.com/adriantombu/523cad6a163209bcf842b2e84ac8cf33/raw/5650d66152a7f6fff457cab31d2f6ac896151fcf/products-small.csv)
* [Full list of products](https://gist.githubusercontent.com/adriantombu/9dbfa3f6994cb1182ad6f7c0280130c3/raw/fcb7a74e812cd6f7d56e38037d2b00eceb5b6332/products.csv)

### How to contribute

* Clone the repo and modify whatever files you want
* When everything's done, you can run a little `yarn lint` or `npm run lint` to check that everything is well formated (I could enforce it with a pre-commit, but not today)
* Send your PR
* That's all folks !

Copyright (c) 2018 SASU Otso
