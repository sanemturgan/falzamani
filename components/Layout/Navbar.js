import { useState, useRef } from "react";
import classes from "../../styles/Navbar.module.css";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import Link from "next/link";
import useOutSideClick from "../../hooks/useOutSideClick";
function Navbar() {
  // Dropdown Menu
  const menuRef = useRef();
  const [menuIsOpen, openMenu] = useState(false);
  useOutSideClick(menuRef, () => openMenu(false));
  return (
    <nav className={classes.navbarmain}>
      <div className={classes.logo}>
        <Link href="/homepage">
          <a>
            <div className={classes.imglg}>
              <Image src={Logo} alt="logo" />
            </div>
            <h3>Fal Zamanı</h3>
          </a>
        </Link>
      </div>
      <ul className={classes.bar}>
        {/*  Dropdown Menu  */}
        <li ref={menuRef} onClick={() => openMenu(!menuIsOpen)}>
          Fal Türleri
          <FaAngleDown color="#140731" size="20px" />
          {menuIsOpen && <div className={classes.navbarDropdownMenu}>Menu</div>}
        </li>
        <li>
          <Link href="/uzmanlar">
            <a>Uzmanlar</a>
          </Link>
        </li>
        <li>
          <Link href="/burclar">
            <a>Burçlar</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/kredi">
            <a>Kredi Al</a>
          </Link>
        </li>
        <li>
          <Link href="/kariyer">
            <a>Kariyer</a>
          </Link>
        </li>
        <li>
          <Link href="/iletisim">
            <a>Bize Ulaşın</a>
          </Link>
        </li>
      </ul>
      <div className={classes.giris}>
        <button className={classes.uyegiris}>Üye Girişi</button>
      </div>
    </nav>
  );
}

export default Navbar;
