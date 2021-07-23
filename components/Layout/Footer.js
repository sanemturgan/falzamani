import React from "react";
import classes from "../../styles/Footer.module.css";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcStripe,
  FaCcAmex,
} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.socialicons}>
        <FaInstagram color="#ECDCF5" size="60px" />
        <FaFacebookSquare color="#ECDCF5" size="60px" />
        <FaLinkedin color="#ECDCF5" size="60px" />
      </div>
      <div className={classes.ftrbtm}>
        <div className={classes.copyrght}>
          <p>
            © 2021 Fal, Online Fal, Canlı Fal, Gerçek Fal Sitesi FalZamanı. Tüm
            Hakları Saklıdır.
          </p>
        </div>
        <div className={classes.btmicons}>
          <FaCcVisa color="#ECDCF5" size="18px" />
          <FaCcMastercard color="#ECDCF5" size="18px" />
          <FaCcStripe color="#ECDCF5" size="18px" />
          <FaCcAmex color="#ECDCF5" size="18px" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
