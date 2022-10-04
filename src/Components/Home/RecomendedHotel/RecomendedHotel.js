import { Container } from "@mui/material";
import React from "react";
import "./RecomendedHotel.css";

const RecomendedHotel = () => {
  const backgroundImgR1 = {
    background: `url(
          "https://i.ibb.co/NyGsNKK/r1.jpg"
          
        )`,
    backgroundSize: "cover",
  };
  const backgroundImgR2 = {
    background: `url(
              "https://i.ibb.co/XVcgMhW/r3.jpg"
              
            )`,
    backgroundSize: "cover",
  };
  const backgroundImgR3 = {
    background: `url(
              "https://i.ibb.co/b1myTTk/r4.jpg"
              
            )`,
    backgroundSize: "cover",
  };
  const backgroundImgR4 = {
    background: `url(
              "https://i.ibb.co/26nK3Y5/r2.jpg"
              
            )`,
    backgroundSize: "cover",
  };

  return (
    <div>
      <Container className="pt-12 pb-12">
        <div class="max-w-md mx-auto bg-white  overflow-hidden md:max-w-5xl ">
          <div class="md:flex">
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-[#FFC107] font-semibold">
                TOP RATED
              </div>

              <div>
                <span class="text-2xl font-black">RECOMENDED</span>
                <span class="text-2xl ml-2">HOTELS</span>
                <hr class="RecomendedHotelHr" />
              </div>

              <p class="mt-2 text-gray-400 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                cupiditate vitae libero harum? Provident tempora expedita fugiat
                non, quibusdam voluptatum!
              </p>
            </div>
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src="https://i.ibb.co/0Yx3cN0/happy-tourists-choosing-hotel-booking-room-online-flat-illustration-74855-10811.jpg"
                alt="Modern building architecture"
              />
            </div>
          </div>
        </div>

        <div class="wrapperRecomended grid md:grid-cols-4 sm:grid-cols-1 mb-12 mt-12">
          <div class="cardRecomended " style={backgroundImgR1}>
            <div class="fonRecomended"></div>
            <div class="textRecomended">
              <h2>HOTEL XYZ</h2>
              <p class=" font-black text-black text-[#ffc107]">
                $50
                <span class=" ml-1 text-gray-600 text-sm">per night</span>
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div class="triangleRecomended"></div>
            </div>
            <div class="btnRecomended">Booking</div>
          </div>
          <div class="cardRecomended" style={backgroundImgR2}>
            <div class="fonRecomended"></div>
            <div class="textRecomended">
              <h2>HOTEL XYZ</h2>
              <p class=" font-black text-black text-[#ffc107]">
                $250
                <span class=" ml-1 text-gray-600 text-sm">per night</span>
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div class="triangleRecomended"></div>
            </div>
            <div class="btnRecomended">Booking</div>
          </div>
          <div class="cardRecomended" style={backgroundImgR3}>
            <div class="fonRecomended"></div>
            <div class="textRecomended">
              <h2>HOTEL XYZ</h2>
              <p class=" font-black text-black text-[#ffc107]">
                $150
                <span class=" ml-1 text-gray-600 text-sm">per night</span>
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div class="triangleRecomended"></div>
            </div>
            <div class="btnRecomended">Booking</div>
          </div>
          <div class="cardRecomended" style={backgroundImgR4}>
            <div class="fonRecomended"></div>
            <div class="textRecomended">
              <h2>HOTEL XYZ</h2>
              <p class=" font-black text-black text-[#ffc107]">
                $100
                <span class=" ml-1 text-gray-600 text-sm">per night</span>
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div class="triangleRecomended"></div>
            </div>
            <div class="btnRecomended">Booking</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecomendedHotel;
