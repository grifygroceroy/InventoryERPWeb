import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddProduct from "./components/master/AddProduct";
import ProductList from "./components/list/ProductList";
import Logout from "./components/Logout";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/master/add-product" element={<AddProduct />} />
          <Route path="/list/product-list" element={<ProductList />} />
          <Route path="/logout" exact element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
