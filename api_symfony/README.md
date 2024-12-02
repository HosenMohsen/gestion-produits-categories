# TEST RECRUTEMENT DEV TEACH’R 2024 Mohsen Hosen partie 1

## Installation de Symfony
### Prérequis

- Php
- Composer
- Base de donnée (mysql)

### Clonage du projet

```bash
git@github.com:HosenMohsen/gestion-produits-categories.git
```

### Installation 

```bash 
composer create-project symfony/skeleton api_symfony
cd api_symfony
composer require api symfony/orm-pack symfony/validator symfony/serializer-pack
composer require symfony/maker-bundle --dev
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

