import '../styles/App.scss';
import Products from './main/Products';
import Product from './product/Product';
import {  Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <p className="App-header-title">Shop</p>
        <Link to="/"
          className="App-header-element text"
        >Главная</Link>
      </header>

      <Routes>
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/" element={<Products />} />
      </Routes>
        
      <footer className="App-footer">
        <p className="App-footer-text">2023</p>
      </footer>
    </main> 
  );
}

export default App;