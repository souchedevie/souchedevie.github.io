# Mise en place du Sass 

## Visual Studio Code 

Vous pouvez utiliser l'extension Live Sass Compiler pour compiler votre Sass. 

Voici la configuration à mettre dans votre settings.json (accès : ctrl + shift + P et taper "user settings")

```
"liveSassCompile.settings.generateMap": false, 
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/css"
        }
    ],
    "liveSassCompile.settings.excludeList": [
        "scss/*[!(app)].scss"
    ],
```

## Utilisation des mixins 

```
@include responsive(sm) {
    // ...
}
