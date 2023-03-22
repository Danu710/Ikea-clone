import React from "react";
import Header from "../parts/Header";
import Login1 from "../parts/LoginPage";
import Footer from "../parts/Footer";
import useScrollToTop from "../helpers/hooks/useScrollToTop";

export default function Login() {
  useScrollToTop();
  return (
    <>
      <Header />
      <Login1 />
      <Footer />
    </>
  );
}
