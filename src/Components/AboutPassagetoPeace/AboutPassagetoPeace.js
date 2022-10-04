import React from "react";
import "./AboutPassagetoPeace.css";
const AboutPassagetoPeace = () => {
  
  const backgroundImg = {
    background: `url(
      "https://i.ibb.co/PFNqDD1/sakil-chowdhury-HDk-Asv-On-DME-unsplash.jpg"
    )`,
    backgroundSize: "cover",
  };
  return (
    <div style={backgroundImg} class="md:p-12 sm:p-3">
      <div class="max-w-md mx-auto overflow-hidden md:max-w-5xl">
        <div class="md:flex md:pt-12 md:pb-12">
          <div class="">
            <div>
              <h1 class="md:text-3xl font-bold text-white">
                PASSAGE
                <span class="text-amber-300 ml-2">
                  TO <br />
                </span>
                PEACE
              </h1>
            </div>

            <p class="mt-2 text-slate-500 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              accusamus ducimus ipsum blanditiis hic dolore nam, nihil inventore
              labore quis officia odio voluptatum iure in voluptatem fuga odit!
              Animi, laudantium?
            </p>

            <hr class="AboutPassagetoPeaceHr" />
          </div>

          <div class="md:shrink-0 ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/JE4g_RjTG4w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPassagetoPeace;
