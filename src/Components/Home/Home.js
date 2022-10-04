import React from "react";
import About from "../About/About";
import AboutPassagetoPeace from "../AboutPassagetoPeace/AboutPassagetoPeace";
import Slide from "../Shared/Slide/Slide";
import PlaceData from "./PlaceData/PlaceData";
import RecomendedHotel from "./RecomendedHotel/RecomendedHotel";

const Home = () => {
  return (
    <div>
      <Slide></Slide>

      <PlaceData></PlaceData>
      <RecomendedHotel></RecomendedHotel>
      <AboutPassagetoPeace></AboutPassagetoPeace>
      <About></About>
    </div>
  );
};

export default Home;
