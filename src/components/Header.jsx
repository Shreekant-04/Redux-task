import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const items = useSelector((state) => state.cart.cartItems.length); // Updated state selector
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white p-4 flex justify-between items-center ">
      <NavLink to="/" className="logo">
        Logo
      </NavLink>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "text-white hover:text-blue-400"
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400 relative "
              }
            >
              Cart{" "}
              <span className="text-red-400 text-xs fixed ml-0.5	">{items}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
