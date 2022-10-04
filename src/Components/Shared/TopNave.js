import React from "react";

const TopNave = () => {
  return (
    <>
      <div class="mx-auto bg-[#45505C]">
        <div class="md:flex  justify-around">
          <div class="md:p-3 sm:pt-2 sm:pl-9">
            <p class="mt-2 text-slate-500">
              <span class="mr-3">
                <i style={{ color: "gray" }} class="far fa-envelope fa-1x"></i>
              </span>
              <span class="md:text-base sm:text-sm text-gray-300 ">
                <a href="mailto: abc@example.com">sr.raghib@gmail.com</a>
              </span>
              <span class="text-[#FFC107] md:mr-3 md:ml-3 sm:mr-1 sm:ml-1 text-lg">
                /
              </span>

              <span class=" md:mr-3 sm:mr-1">
                <i style={{ color: "gray" }} class="fas fa-phone-alt fa-1x"></i>
              </span>
              <span class="md:text-base sm:text-sm text-gray-300">
                <a href="tel: +8801689797288"> +8801689797288</a>
              </span>
            </p>
          </div>

          <div class="md:p-3 sm:pt-2 sm:pl-9">
            <div class="mt-2 text-slate-500">
              <div class="dropdown flex ">
                <label
                  tabindex="0"
                  class="md:text-base sm:text-sm text-gray-300 "
                >
                  Language
                  <span class="ml-1">
                    <i
                      style={{ color: "text-gray-300" }}
                      class="fas fa-chevron-down fa-1x"
                    ></i>
                  </span>
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 bg-[#ffffff] mt-5"
                >
                  <li>
                    <a>English</a>
                  </li>
                  <li>
                    <a>Bangla</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNave;
