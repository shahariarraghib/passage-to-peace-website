import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Slide.css";

const Slide = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div>
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className="slide-style ">
            <div class="hero min-h-screen bg-[#ddeaee]">
              <div class="hero-content flex-col lg:flex-row-reverse pb-5">
                <div class="columns-2 ">
                  <img
                    class="w-full aspect-video max-w-sm rounded-lg shadow-2xl"
                    src="https://images.unsplash.com/photo-1611001560674-9ed5a2b156db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                  <img
                    class="w-full aspect-square max-w-sm rounded-lg shadow-2xl"
                    src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80"
                  />
                </div>
                <div>
                  <h1 class="text-5xl font-bold text-black">Cox's Bazar</h1>
                  <p class="py-6 text-gray-400">
                    Cox's Bazar Beach located at Cox's Bazar, Bangladesh, is the
                    longest natural sea beach in the world running 120
                    kilometres.
                  </p>
                  <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="slide-style">
            <div class="hero min-h-screen bg-[#ddeaee]">
              <div class="hero-content flex-col lg:flex-row-reverse pb-5">
                <div class="columns-2">
                  <img
                    class="w-full aspect-video max-w-sm rounded-lg shadow-2xl"
                    src="https://images.unsplash.com/photo-1606407171179-04f350518a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  />
                  <img
                    class="w-full aspect-square max-w-sm rounded-lg shadow-2xl"
                    src="https://images.unsplash.com/photo-1602528495711-f52bf3988a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80"
                  />
                </div>
                <div>
                  <h1 class="text-5xl font-bold text-black">Rangamati</h1>
                  <p class="py-6 text-gray-400">
                    Rangamati is the administrative headquarter and town of
                    Rangamati Hill District in the Chittagong Hill Tracts of
                    Bangladesh.
                  </p>
                  <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="slide-style">
            <div class="hero min-h-screen bg-[#ddeaee]">
              <div class="hero-content flex-col lg:flex-row-reverse pb-5">
                <div class="columns-2">
                  <img
                    class="w-full aspect-video max-w-sm rounded-lg shadow-2xl"
                    src="https://images.unsplash.com/photo-1582555599578-5068e6474677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
                  />
                  <img
                    class="w-full aspect-square max-w-sm rounded-lg shadow-2xl"
                    src="https://images.unsplash.com/photo-1619090973910-6a8f0e131cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                </div>
                <div className="w-3/4">
                  <h1 class="text-5xl font-bold text-black">Dhaka</h1>
                  <p class="py-6 text-gray-400">
                    Dhaka formerly known as Dacca, is the capital and largest
                    city of Bangladesh.Dhaka formerly known as Dacca, is the
                    capital and largest city of Bangladesh.
                  </p>
                  <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Slide;
