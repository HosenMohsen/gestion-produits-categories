import React, { useState } from 'react';
import { updateProduct } from '../services/api'; 

const ModifyProduct = ({ product, onSuccess }) => {
  const [formData, setFormData] = useState({
    nom: product?.nom || '',
    description: product?.description || '',
    prix: product?.prix || '',
    categorie: product?.categorie || '',
    date_creation: product?.date_creation || '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      prix: parseFloat(formData.prix), 
    };

    


    try {
      await updateProduct(product.id, dataToSend); 
      onSuccess(); 
    } catch (error) {
      console.error('Erreur lors de la modification du produit :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-[#f9f9f9] shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Modifier le produit</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Nom :</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Description :</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Prix :</label>
        <input
          type="number"
          step="0.01"
          name="prix"
          value={formData.prix}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Catégorie (URL) :</label>
        <input
          type="text"
          name="categorie"
          value={formData.categorie}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Date de création :</label>
        <input
          type="datetime-local"
          name="date_creation"
          value={formData.date_creation}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-text-color text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Modifier
      </button>
    </form>
  );
};

export default ModifyProduct;
