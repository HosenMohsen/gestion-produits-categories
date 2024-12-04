# TEST RECRUTEMENT DEV TEACH’R 2024 Mohsen Hosen partie 1

## Installation de Symfony
### Prérequis

- Php
- Composer
- Base de donnée (mysql)


### Installation 

```bash 
composer create-project symfony/skeleton api_symfony
cd api_symfony
composer require api symfony/orm-pack symfony/validator symfony/serializer-pack
composer require symfony/maker-bundle --dev
```

### Création de l'api/bdd

```bash
php bin/console make:entity
php bin/console make:migration
php bin/console doctrine:migrations:migrate

```



### Lancement de Symfony en http

```bash

symfony server:start --no-tls

```


### API

#### `GET /api/categories` : Récupérer toutes les catégories
#### `GET /api/produits` : Récupérer tous les produits
#### `POST /api/produits.json` : Ajouter un produit
```json
{
    "categorie": " /api/categorie/id",
    "nom": "string",
    "description": "text",
    "prix": "float",
    "date_creation": "datetime"

}   
```
#### `POST /api/categories.json` : Ajouter une catégorie
```json
{
    "nom":"<name>"
}

```


#### `PATCH /api/produits/{id}` : Changer les valeurs du produits (Content-type: application/merge-patch+json)
```json
{
    "nom":"<new name>"
}

```

#### `PATCH /api/categories/{id}` : Changer le nom de la catégorie (Content-type: application/json)
```json
{
    "nom":"<new name>"
}

```

#### `DELETE /api/produits/{id}` : Supprimer le produit selon son id 
#### `DELETE /api/categories/{id}` : Suprrimer la catégorie selon son id 





#### SQL

Un fichier sql de la BDD est disponible dans le dossier sql 