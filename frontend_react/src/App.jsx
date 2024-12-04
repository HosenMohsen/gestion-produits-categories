import './output.css';
import ProductTable from "./components/ProductTable";
import CategorieTable from './components/CategorieTable';
import ProductForm from './components/ProductForm';
import CategoryForm from './components/CategoryForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import Home from './pages/Home';

function Nav() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />  
      </Routes>
    </Router>
  );
}

function ProduitTable() {
  return (
    <div className="container mx-auto p-4">
      <ProductTable />
    </div>

    
  );
}

function CategoryTable() {
  return (
    <div className="container mx-auto p-4">
      <CategorieTable />
    </div>

    
  );

}


function AjoutProduit() {


  const handleSuccess = (data) => {
    console.log("Un nouveau produit a été ajouter :", data);
  };
  return (
    <div>
      <ProductForm onSuccess={handleSuccess} />
    </div>
  );
}


function AjoutCategorie() {


  const handleSuccess = (data) => {
    console.log("Une nouvelle catégorie a été ajouter :", data);
  };
  return (
    <div>
      <CategoryForm onSuccess={handleSuccess} />
    </div>
  );
}



export { CategoryTable, AjoutProduit, AjoutCategorie, Nav, ProduitTable };