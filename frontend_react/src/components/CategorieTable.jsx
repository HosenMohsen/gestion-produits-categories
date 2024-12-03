import React, { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "../services/api";

export default function CategorieTable() {
  const [categories, setCategories] = useState([]);

  useEffect(() => { 
    fetchCategories();
  }, []);


  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data); 
    } catch (error) {
      console.error("Erreur pour fetch les catégories ", error);
    }
  };
  
  

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategories();
    } catch (error) {
      console.error("Erreur pour supprimer la catégorie:", error);
    }
  };

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Nom</th>
          <th className="border border-gray-300 px-4 py-2"> Actions</th>
        </tr>
      </thead>
      <tbody>
            {Array.isArray(categories) && categories.length > 0 ? (
                categories.map((categorie) => (
                <tr key={categorie.id}>
                    <td className="border border-gray-300 px-4 py-2">{categorie.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{categorie.nom}</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(categorie.id)}
                    >
                        Supprimer
                    </button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan="4" className="text-center py-4">
                    Aucune catégorie disponible.
                </td>
                </tr>   
            )}
        </tbody>

    </table>
  );
}
