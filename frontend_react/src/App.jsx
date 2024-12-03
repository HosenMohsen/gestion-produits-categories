import './output.css';
import ProductTable from "./components/ProductTable";
import CategorieTable from './components/CategorieTable';


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


export default App;
export { App2 };