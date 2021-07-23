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
        <FaInstagram color="#ECDCF5" size="30px" />
        <FaFacebookSquare color="#ECDCF5" size="30px" />
        <FaLinkedin color="#ECDCF5" size="30px" />
      </div>
      <div className={classes.ftrbtm}>
        <div className={classes.copyrght}>
          <p>
            © 2021 Fal, Online Fal, Canlı Fal, Gerçek Fal Sitesi FalZamanı. Tüm
            Hakları Saklıdır.
          </p>
        </div>
        <div className={classes.btmicons}>
          <FaCcVisa color="#ECDCF5" size="14px" />
          <FaCcMastercard color="#ECDCF5" size="14px" />
          <FaCcStripe color="#ECDCF5" size="14px" />
          <FaCcAmex color="#ECDCF5" size="14px" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
