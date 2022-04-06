import './App.css';
import ProductList from './components/product-list/product-list';
import products from './data/products.json';

function App() {

  return (
    <div className="App">
      <h1>Exo 02 - Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
