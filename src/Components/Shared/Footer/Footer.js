import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationIcon from "@mui/icons-material/AddLocation";

import "./Footer.css";

import { NavLink } from "react-router-dom";
import logo from "../../Image/logo.png";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div class="bg-base-200">
        <Container>
          <footer class="footer p-10 text-base-content w-100 ">
            <div>
              <img src={logo} alt="" style={{ height: "50px" }} />
              <p>
                Passage to peace Industries Ltd.
                <br />
                Providing reliable tech since 2022
              </p>
            </div>
            <div>
              <span class="footer-title">Useful Links</span>
              <div>
                <NavLink to="/home">Home</NavLink>
              </div>

              <div>
                <NavLink to="/about">About</NavLink>
              </div>

              <div>
                <NavLink to="/allbooking">All Bookings</NavLink>
              </div>

              <div>
                <NavLink to="/place">AddPlace</NavLink>
              </div>
            </div>

            <div>
              <span class="footer-title">Contact Us</span>

              <div className="d-flex justify-content-start">
                <PhoneIcon sx={{ fontSize: 20 }} />
                <p class="ml-2">+8801000000001</p>
              </div>

              <div className="d-flex justify-content-start">
                <EmailIcon sx={{ fontSize: 20 }} />
                <p class="ml-2">CoronaCorner@gmail.com</p>
              </div>

              <div className="d-flex justify-content-start">
                <AddLocationIcon sx={{ fontSize: 20 }} />
                <p class="ml-2">Tejgaon, Dhaka</p>
              </div>
            </div>

            <div>
              <span class="footer-title">Newsletter</span>
              <div class="form-control md:w-80 sm:w-50">
                <label class="label">
                  <span class="label-text">Enter your email address</span>
                </label>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    class="input input-bordered w-full pr-16"
                  />
                  <button class="btn btn-warning absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </footer>
          <hr class="footerhr" />
          <footer class="footer items-center p-4  text-neutral-content">
            <div class="items-center grid-flow-col">
              <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <a href="https://www.facebook.com/shahariar.raghib/">
                <FacebookOutlinedIcon />
              </a>
              <a href="https://www.instagram.com/shahariar_raghib/?fbclid=IwAR2sSTFfRtqbPhs4XRFtQ6wbNVk3W8IYAEPnNqOUfWVrsr3MoZzTtHEpXSE">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/in/shahariar-bhuiyan-2a6b04130/">
                <LinkedInIcon />
              </a>
            </div>
          </footer>
        </Container>
      </div>
    </>
  );
};

export default Footer;
