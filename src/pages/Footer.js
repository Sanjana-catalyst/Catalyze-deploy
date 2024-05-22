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
    <div>
      <footer className="footer footer-center p-10 bg-neutral-100 shadow-6xl text-primary-content">
        <nav>
          <div className="grid grid-flow-col text-2xl gap-4">
            <a href="https://www.linkedin.com/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
