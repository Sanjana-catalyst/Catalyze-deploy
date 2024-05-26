import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-slate-500 shadow-6xl text-primary-content">
      <nav className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <a href="https://www.linkedin.com/" className="text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com/" className="text-2xl">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/" className="text-2xl">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/" className="text-2xl">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/" className="text-2xl">
          <FaTwitter />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
