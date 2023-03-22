import React from "react";
import Header from "../parts/Header";
import LoginForm from "../parts/LoginForm";
import Footer from "../parts/Footer";
import useScrollToTop from "../helpers/hooks/useScrollToTop";

export default function FormLogin() {
  useScrollToTop();
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}
