# TP 5 : projet 2, Raphaël LEVECQUE, G8

**Créer le dossier tp5/dist/**

```bash
tp5$ npm install
```

```bash
tp5$ npm run build
```

**Exécuter l'application**

Ouvrir le fichier `tp5/dist/index.html` dans un navigateur. 

### Travail réalisé

Le travail a été réalisé dans son entièreté.

* App
  * SelectCity
  * DataForCity
    * MeteoData (12)
  * DataComparison 
    * MeteoData (2)
  * ChartZone

12 composants `meteoData` inclus dans `dataForCity` et 2 inclus dans `dataComparison`.

L'application contient :

* Un composant `App` qui est la "racine" de l'application, il permet de connaître et de diffuser la ville actuellement choisie et la ville favorite, ainsi que de connaître l'état de fermeture de `ChartZone`. Il contient les composants `SelectCity`,  `DataForCity`, `DataComparison` et `ChartZone`
* Un composant `SelectCity` qui permet de choisir une ville pour laquelle les données seront affichées dans `DataForCity`, `DataComparison` et `ChartZone`
* Un composant `DataForCity` qui permet de présenter les différentes mesures mensuelles pour une ville choisie à l'aide des composants `meteoData`
* Un composant `DataComparison` qui permet de comparer les mesures moyennes d'une ville choisie et de la ville favorite. 
* Un composant `ChartZone` qui permet à l'aide d'un graphique de comparer mensuellement une mesure choisie pour la ville favorite et la ville choisie
* Un composant `meteoData` qui permet d'afficher les valeurs de chaque mesure.
