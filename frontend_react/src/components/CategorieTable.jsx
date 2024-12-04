import React, { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "../services/api";
import ModifyCategory from "./ModifyCategory";

export default function CategorieTable() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [isEditing, setIsEditing] = useState(false); 


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


  const handleEdit = (categorie) => {
    setSelectedCategory(categorie);
    setIsEditing(true); 
  };

  const handleSuccess = () => {
    fetchCategories(); 
    setIsEditing(false); 
  };

  return (
    <div>
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
                    className="text-blue-500 hover:text-blue-700 mr-4"
                    onClick={() => handleEdit(categorie)} 
                  >
                    Modifier
                  </button>
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


    {isEditing && selectedCategory && (
        <ModifyCategory product={selectedCategory} onSuccess={handleSuccess} />
      )}
    </div>
  );
}
