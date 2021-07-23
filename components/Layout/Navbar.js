import classes from "../../styles/Navbar.module.css";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={classes.navbarmain}>
      <div className={classes.logo}>
        <Link href="/homepage">
          <div className={classes.imglg}>
            <Image src={Logo} alt="logo" />
          </div>
          <h3>Fal Zamanı</h3>
        </Link>
      </div>
      <ul className={classes.bar}>
        <li>
          <Link href="/faltürleri">
            <a>
              Fal Türleri
              <FaAngleDown color="#140731" size="20px" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/uzmanlar">
            <a>Uzmanlar</a>
          </Link>
        </li>
        <li>
          <Link href="/burçlar">Burçlar</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/kredi">Kredi Al</Link>
        </li>
        <li>
          <Link href="/kariyer">Kariyer</Link>
        </li>
        <li>
          <Link href="/iletisim">Bize Ulaşın</Link>
        </li>
      </ul>
      <div className={classes.giris}>
        <button className={classes.uyegiris}>Üye Girişi</button>
      </div>
    </nav>
  );
}

export default Navbar;
