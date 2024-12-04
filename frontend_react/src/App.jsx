import './output.css';
import ProductTable from "./components/ProductTable";
import CategorieTable from './components/CategorieTable';
import ProductForm from './components/ProductForm';
import CategoryForm from './components/CategoryForm';



function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des Produits</h1>
      <ProductTable />
    </div>

    
  );
}

function App2() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des Catégories</h1>
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


export default App;
export { App2, AjoutProduit, AjoutCategorie };