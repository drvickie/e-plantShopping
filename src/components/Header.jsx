import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <h2 className="logo">🌿 Paradise Nursery</h2>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;