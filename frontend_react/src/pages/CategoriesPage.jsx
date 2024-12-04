import React from "react";
import AjoutCategorie from "../components/CategoryForm";
import CategorieTable from "../components/CategorieTable";

const CategoriesPage = () => {
  return (
    <div className="p-6">
       <CategorieTable />
      <AjoutCategorie />
    </div>
  );
};

export default CategoriesPage;
