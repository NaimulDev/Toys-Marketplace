import React from "react";
import logo from "../../../public/logo.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-16 bg-base-200 text-base-content">
      <div>
        <img src={logo} className="w-20 rounded-xl" alt="" />
        <p className="text-3xl font-bold">Toy Street</p>
        <p>
          Copyright &copy; 2023 Toy Cars Project. <br />
          All rights reserved.
        </p>
      </div>
      <div className="font-medium">
        <span className="footer-title capitalize text-2xl">Quick Links</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Shop</a>
        <a className="link link-hover">Brands</a>
        <a className="link link-hover">Categories</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Shipping Information</a>
        <a className="link link-hover">Return Policy</a>
      </div>
      <div className="font-medium">
        <span className="footer-title capitalize text-2xl">
          Contact Information
        </span>
        <a className="link link-hover">info@toystreet.com</a>
        <a className="link link-hover">+1 123-456-7890</a>
        <a className="link link-hover">123 Toy Street, Dhaka, Bangladesh</a>
      </div>
      <div className="font-medium">
        <span className="footer-title capitalize text-2xl">
          Subscribe to Our Newsletter
        </span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-secondary capitalize absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="font-medium">
        <span className="footer-title capitalize text-2xl">
          social media links
        </span>
        <div className="w-full text-3xl">
          <ul className="flex gap-6">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100006694475266"
                target="_blank"
              >
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <FaTwitter></FaTwitter>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram></FaInstagram>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube></FaYoutube>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
