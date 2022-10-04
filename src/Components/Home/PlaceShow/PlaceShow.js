import React from "react";

const PlaceShow = ({ PlaceData }) => {
  const { _id, name, price, description, img } = PlaceData;

  return (
    <div class="card card-compact w-96 h-100 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="place" style={{ height: 300, width: "100%" }} />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-[#FFC107]">{name}</h2>
        <p class="text-xl font-black">${price}</p>
        <p class="text-gray-400 text-justify">{description}</p>

        <div class="card-actions justify-end">
          <a href={`/booking/${_id}`}>
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-sm btn-warning ">
              Booking Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaceShow;
