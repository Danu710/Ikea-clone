import React from "react";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useScrollToTop from "../helpers/hooks/useScrollToTop";

export default function HomePage() {
  useScrollAnchor();
  useScrollToTop();
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Footer />
    </>
  );
}
