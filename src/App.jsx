import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
            <>
              <Header />

              <div className="home">
                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                  alt="plants"
                  className="home-image"
                />

                <h1>Paradise Nursery</h1>
                <p>Bring nature into your home with our beautiful plants 🌱</p>

                <Link to="/plants">
                  <button className="home-btn">Get Started</button>
                </Link>
              </div>
            </>
          }
        />

        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;