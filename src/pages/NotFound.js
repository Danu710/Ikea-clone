import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import PageErrorMessage from "../parts/PageErrorMessage";
import useScrollToTop from "../helpers/hooks/useScrollToTop";

export default function NotFound() {
  useScrollToTop();
  return (
    <>
      <Header />
      <PageErrorMessage />
      <Footer />
    </>
  );
}
