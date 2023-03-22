import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../helpers/hooks/useGlobalContext";
import { ReactComponent as IconCart } from "../img/icon-cart.svg";
import logoIkea1 from "../img/ikea1.png";
import Login from "../img/user (1).png";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  const [isCartChanged, setCartChanged] = useState(false);
  const { state } = useGlobalContext();

  const prevCart = useRef(state?.cart || {});

  const toggleMenu = () => {
    setToggleMainMenu(!toggleMainMenu);
  };

  useLayoutEffect(() => {
    if (prevCart.current !== state.cart) {
      prevCart.current = state?.cart || {};
      setCartChanged(true);
      setTimeout(() => {
        setCartChanged(false);
      }, 550);
    }
  }, [state.cart]);

  return (
    <header
      aria-label="Site Header"
      className={[
        "fixed z-20 items-center w-full px-5 md:px-12 backdrop-blur-md",
      ].join(" ")}>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/">
              <img
                src={logoIkea1}
                alt="logoIkea"
                className="w-10 sm:w-30 md:w-20 lg:w-20"
              />
            </Link>
          </div>

          <div className="">
            <nav aria-label="Site Nav">
              <ul
                className={[
                  "fixed bg-white inset-0 flex flex-col items-center justify-center md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center",
                  toggleMainMenu
                    ? "opacity-100 z-30 visible"
                    : "invisible opacity-0",
                ].join(" ")}>
                <li>
                  <Link
                    to="/"
                    className="font-medium text-md text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-4 sm:mx-2">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/categories/3/products/1"
                    className="font-medium text-md border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-4 sm:mx-2">
                    Product Categories
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cart"
                    className="font-medium text-md border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-4 sm:mx-2">
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                to="/login"
                className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 w-7">
                <PersonIcon style={{ fontSize: 24 }} />
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className={[
                    "cart flex items-center justify-center w-8 h-8 ",
                    state.cart && Object.keys(state.cart).length > 0
                      ? "cart-filled"
                      : "",
                    isCartChanged ? "animate-bounce" : "",
                  ].join(" ")}
                  to="/cart">
                  <IconCart style={{ fontSize: 24 }} />
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className={[
                  "rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75",
                  toggleMainMenu ? "fixed" : "relative",
                ].join("")}
                onClick={() => setToggleMainMenu((prev) => !prev)}>
                <MenuIcon style={{ fontSize: 24 }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
