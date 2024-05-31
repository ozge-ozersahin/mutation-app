import React from "react";
import "./header.css";
import { IoMdContact } from "react-icons/io";
import { PiSealQuestionFill } from "react-icons/pi";


export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="login"><IoMdContact></IoMdContact> Login</a></li>
          <li><a href="about"><PiSealQuestionFill /> How Works Mutation</a></li>
        </ul>
      </nav>
    </header>
  );
};
