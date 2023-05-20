import React from "react";
import logo from "../../../public/logo.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e9f6f8] text-base-content text-center">
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-40 py-8 md:py-14">
        <div>
          <div className="form-control text-center">
            <h5 className="text-secondary font-bold text-xl">NEWSLETTER</h5>

            <p className="label-text my-4 font-semibold text-sm text-[#777777]">
              Sign up for latest offers and promotions
            </p>

            <div className="relative">
              <input
                type="text"
                placeholder="Your email address"
                className="input input-bordered w-full md:w-96 rounded-r-3xl rounded-l-3xl"
              />
              <button className="py-3 px-4 rounded-r-3xl bg-primary text-white capitalize absolute top-0 right-0 rounded-l-none">
                submit
              </button>
            </div>
          </div>
        </div>
        <div className="font-medium pr-14 mx-auto md:mr-14">
          <span className="footer-title capitalize text-2xl">FOLLOW US</span>
          <div className="w-full text-3xl mt-7">
            <ul className="flex gap-6">
              <li>
                <a
                  href="https://www.facebook.com/naimul49"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/naimul49"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/naimul49"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-4 pb-4 md:pb-9 px-4 md:px-16 text-center">
        <div>
          <img src={logo} className="rounded-xl mx-auto" alt="" />

          <p>
            Sit amet conse ctetur adipisicing
            <br />
            elit, sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore
            <br />
            magna aliqua. labo dolore magna
            <br />
            aliqua.
          </p>
        </div>
        <div className="font-medium">
          <span className="footer-title capitalize text-2xl">INFORMATION</span>
          <br />
          <a className="link link-hover">specials</a>
          <br />
          <a className="link link-hover">Shop</a>
          <br />
          <a className="link link-hover">Brands</a>
          <br />
          <a className="link link-hover">Categories</a>
          <br />
          <a className="link link-hover">About Us</a>
          <br />
          <a className="link link-hover">Contact Us</a>
          <br />
          <a className="link link-hover">FAQs</a>
          <br />
        </div>
        <div className="font-medium">
          <h4 className="footer-title capitalize text-2xl">YOUR ACCOUNT</h4>
          <a className="link link-hover">Personal info</a>
          <br />
          <a className="link link-hover">orders</a>
          <br />
          <a className="link link-hover">Credit slips</a>
          <br />
          <a className="link link-hover">Address</a>
        </div>
        <div className="font-medium">
          <span className="footer-title capitalize text-2xl">
            STORE INFORMATION
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
