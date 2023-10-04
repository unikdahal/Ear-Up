import { useState } from "react";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <header className="bg-gradient-to-r from-orange-400 to-red-600 shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="logo-container">
            <img className="logo w-36" src={logo} alt="Logo" />
          </div>
          <nav className="nav-items">
            <ul className="flex space-x-6 text-white items-center">
              <li className="hover:text-yellow-300 transition-colors duration-300">
                <Link to="./">Home</Link>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-300">
                <Link to="./about">About Us</Link>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-300">
                <Link to="./contact">Contact Us</Link>
              </li>
              <li className="relative flex items-center">
                <Link to="./cart" className="hover:text-yellow-300 transition-colors duration-300">
                  Cart 🛒
                </Link>
                {cartItems.length > 0 && (
                  <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                    {cartItems.length}
                  </span>
                )}
              </li>
              <button
                className="bg-yellow-300 text-yellow-800 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-yellow-900 transition-colors duration-300"
                onClick={() => {
                  setBtnName(btnName === "Login" ? "Logout" : "Login");
                }}
              >
                {btnName}
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
