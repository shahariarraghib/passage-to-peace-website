import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [coxBazar, setCoxBazar] = useState([]);
  const [patuakhali, setPatuakhali] = useState([]);
  const [sylhet, setSylhet] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Cox%27s%20Bazar&appid=022af5d58cf3bfd0312588b5e0bcdb9a&units=metric"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoxBazar(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=patuakhali&appid=022af5d58cf3bfd0312588b5e0bcdb9a&units=metric"
    )
      .then((res) => res.json())
      .then((data) => {
        setPatuakhali(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=sylhet&appid=022af5d58cf3bfd0312588b5e0bcdb9a&units=metric"
    )
      .then((res) => res.json())
      .then((data) => {
        setSylhet(data);
      });
  }, []);

  return (
    <>
      <div class="grid md:grid-cols-4 sm:grid-cols-1">
        <div>
          <div class="center">
            <div class="card">
              <div class="additional">
                <div class="user-card">
                  <img
                    src="https://images.unsplash.com/photo-1595879468810-210db077599c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt=""
                  />
                </div>

                <div class="more-info">
                  <h1 class=" font-black mt-3">COX'S BAZAR</h1>
                  <div class="coords mt-4 ">
                    <div>
                      <div>
                        <span class="text-black">HOTEL COX'S</span>
                      </div>
                      <div class="rating rating-xs">
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p class="font-black text-black">
                      $50
                      <span class="ml-1 text-gray-600 text-sm mt-1">
                        per night
                      </span>
                    </p>
                    <p class="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem, repellat!
                    </p>
                    <button class="mt-4 text-sm text-gray-600 hover font-bold">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
              {coxBazar?.main?.temp ? (
                <div class="general">
                  <h1 class="flex justify-center md:ml-12 sm:ml-12 font-black mb-4 p-2">
                    COX'S BAZAR
                  </h1>
                  <p class="flex justify-center md:ml-12 sm:ml-12 font-black text-yellow-400">
                    LOCAL TEMPERATURE
                  </p>

                  <div class="flex justify-center items-center">
                    <div class="scale-50 rounded-full">
                      <img
                        src={`http://openweathermap.org/img/wn/${coxBazar?.weather[0]?.icon}@2x.png`}
                        alt=""
                      />
                    </div>

                    <div>
                      <p class="font-black">
                        {Math.round(coxBazar?.main?.temp)}℃ /
                      </p>
                    </div>
                    <div>
                      {coxBazar.weather[0].main ? (
                        <p class="font-black">{coxBazar.weather[0].main}</p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div>
          <div class="center">
            <div class="card">
              <div class="additional">
                <div class="user-card">
                  <img
                    src="https://images.unsplash.com/photo-1577363700017-21b8624f0f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt=""
                  />
                </div>

                <div class="more-info">
                  <h1 class=" font-black mt-3">KUYAKATA</h1>
                  <div class="coords mt-4 ">
                    <div>
                      <div>
                        <span class="text-black">HOTEL Kuyakata</span>
                      </div>
                      <div class="rating rating-xs">
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p class="font-black text-black">
                      $30
                      <span class="ml-1 text-gray-600 text-sm mt-1">
                        per night
                      </span>
                    </p>
                    <p class="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem, repellat!
                    </p>
                    <button class="mt-4 text-sm text-gray-600 hover font-bold">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
              {patuakhali?.main?.temp ? (
                <div class="general">
                  <h1 class="flex justify-center md:ml-12 sm:ml-12 font-black mb-4 p-2">
                    KUYAKATA
                  </h1>
                  <p class="flex justify-center md:ml-12 sm:ml-12 font-black text-yellow-400">
                    LOCAL TEMPERATURE
                  </p>

                  <div class="flex justify-center items-center">
                    <div class="scale-50 rounded-full">
                      <img
                        src={`http://openweathermap.org/img/wn/${patuakhali?.weather[0]?.icon}@2x.png`}
                        alt=""
                      />
                    </div>

                    <div>
                      <p class="font-black">
                        {Math.round(patuakhali?.main?.temp)}℃ /
                      </p>
                    </div>
                    <div>
                      {patuakhali.weather[0].main ? (
                        <p class="font-black">{patuakhali.weather[0].main}</p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div>
          <div class="center">
            <div class="card">
              <div class="additional">
                <div class="user-card">
                  <img
                    src="https://images.unsplash.com/photo-1596374004290-2d0788efc9b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>

                <div class="more-info">
                  <h1 class=" font-black mt-3">TANGUAR HAOR</h1>
                  <div class="coords mt-4 ">
                    <div>
                      <div>
                        <span class="text-black">HOTEL TANGUAR</span>
                      </div>
                      <div class="rating rating-xs">
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p class="font-black text-black">
                      $100
                      <span class="ml-1 text-gray-600 text-sm mt-1">
                        per night
                      </span>
                    </p>
                    <p class="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem, repellat!
                    </p>
                    <button class="mt-4 text-sm text-gray-600 hover font-bold">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
              {sylhet?.main?.temp ? (
                <div class="general">
                  <h1 class="flex justify-center md:ml-12 sm:ml-12 font-black mb-4 p-2">
                    TANGUAR HAOR
                  </h1>
                  <p class="flex justify-center md:ml-12 sm:ml-12 font-black text-yellow-400">
                    LOCAL TEMPERATURE
                  </p>

                  <div class="flex justify-center items-center">
                    <div class="scale-50 rounded-full">
                      <img
                        src={`http://openweathermap.org/img/wn/${sylhet?.weather[0]?.icon}@2x.png`}
                        alt=""
                      />
                    </div>

                    <div>
                      <p class="font-black">
                        {Math.round(sylhet?.main?.temp)}℃ /
                      </p>
                    </div>
                    <div>
                      {sylhet.weather[0].main ? (
                        <p class="font-black">{sylhet.weather[0].main}</p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div>
          <div class="center">
            <div class="card">
              <div class="additional">
                <div class="user-card">
                  <img
                    src="https://images.unsplash.com/photo-1578128178075-a7fbe741fcf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>

                <div class="more-info">
                  <h1 class=" font-black mt-3">SAJEK VALLEY</h1>
                  <div class="coords mt-4 ">
                    <div>
                      <div>
                        <span class="text-black">HOTEL Sajek Valley</span>
                      </div>
                      <div class="rating rating-xs">
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-5"
                          class="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p class="font-black text-black">
                      $150
                      <span class="ml-1 text-gray-600 text-sm mt-1">
                        per night
                      </span>
                    </p>
                    <p class="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorem, repellat!
                    </p>
                    <button class="mt-4 text-sm text-gray-600 hover font-bold">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
              {coxBazar?.main?.temp ? (
                <div class="general">
                  <h1 class="flex justify-center md:ml-12 sm:ml-12 font-black mb-4 p-2">
                    SAJEK VALLEY
                  </h1>
                  <p class="flex justify-center md:ml-12 sm:ml-12 font-black text-yellow-400">
                    LOCAL TEMPERATURE
                  </p>

                  <div class="flex justify-center items-center">
                    <div class="scale-50 rounded-full">
                      <img
                        src={`http://openweathermap.org/img/wn/${coxBazar?.weather[0]?.icon}@2x.png`}
                        alt=""
                      />
                    </div>

                    <div>
                      <p class="font-black">
                        {Math.round(coxBazar?.main?.temp)}℃ /
                      </p>
                    </div>
                    <div>
                      {coxBazar.weather[0].main ? (
                        <p class="font-black">{coxBazar.weather[0].main}</p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
