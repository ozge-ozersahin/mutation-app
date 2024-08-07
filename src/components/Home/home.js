import React from "react";
import "./home.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Header } from "../Header/header";
import "../Header/header.css";
import logo from "../../images/brand-logo.png";



export const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <h1>
          <span className="change">Change</span> <br />
          <span className="yourLife">Your Life</span> <br />
        </h1>
        <img src={logo} alt="Logo" className="logo"></img>
        <div className="contact-info">
          <h2 className="contact">Contact with us</h2>
          <div className="contact-methods">
            <span className="email"><HiOutlineMail /> Email</span>
            <span className="instagram"><FaInstagram /> Instagram</span>
            <span className="tiktok"><FaTiktok /> Tiktok</span>
          </div>
        </div>
      </div>
    </div>
  );
};
