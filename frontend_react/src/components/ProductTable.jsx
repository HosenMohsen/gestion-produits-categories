import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => { 
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data); 
    } catch (error) {
      console.error("Erreur pour fetch les produits ", error);
    }
  };
  
  

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Erreur pour lors de la suppression du produit:", error);
    }
  };

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Nom</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Prix</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                <tr key={product.id}>
                    <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.nom}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.prix}</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(product.id)}
                    >
                        Supprimer
                    </button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan="4" className="text-center py-4">
                    Aucun produit disponible.
                </td>
                </tr>   
            )}
        </tbody>

    </table>
  );
}
