import classes from "../../styles/Navbar.module.css";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={classes.navbarmain}>
      <div className={classes.logo}>
        <a href="/">
          <div className={classes.imglg}>
            <Image src={Logo} />
          </div>
          <h3>Fal Zamanı</h3>
        </a>
      </div>
      <ul className={classes.bar}>
        <li>
          <a href="/">
            Fal Türleri
            <FaAngleDown color="#140731" size="20px" />
          </a>
        </li>
        <li>
          <a href="/">Uzmanlar</a>
        </li>
        <li>
          <a href="/">Burçlar</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Kredi Al</a>
        </li>
        <li>
          <a href="/">Kariyer</a>
        </li>
        <li>
          <a href="/">Bize Ulaşın</a>
        </li>
      </ul>
      <div className={classes.giris}>
        <button className={classes.uyegiris}>Üye Girişi</button>
      </div>
    </nav>
  );
}

export default Navbar;
