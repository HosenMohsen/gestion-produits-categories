import React from "react";
import AjoutProduit from "../components/ProductForm";
import ProduitTable from "../components/ProductTable";

const ProductsPage = () => {
  return (
    <div className="p-6">
       <ProduitTable  />
      <AjoutProduit />
    </div>
  );
};

export default ProductsPage;
