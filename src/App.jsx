import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Header from "./components/Header";


function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>Paradise Nursery</h1>
              <p>Bring nature home 🌱</p>
              <Link to="/plants">
                <button>Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;