import { useState, useRef, useEffect } from "react";
import classes from "../../styles/Navbar.module.css";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import Link from "next/link";
import useOutSideClick from "../../hooks/useOutSideClick";
import { FaBars, FaUserAlt } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import axios from "axios";
export default function Navbar(data) {
  // Dropdown Menu
  const menuRef = useRef();
  const [menuIsOpen, openMenu] = useState(false);
  useOutSideClick(menuRef, () => openMenu(false));
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(process.env.REACT_APP_CLIENT_API_URL + `/category/all`)
        .then((res) => {
          setCategory(res.data.data);
        })
        .catch((err) => console.log(err.response.data.error));
    }
    fetchData();
  }, []);

  console.log(category);
  return (
    <nav className={classes.navbarmain}>
      <div className={classes.logo}>
        <Link href="/">
          <a>
            <div className={classes.imglg}>
              <Image src={Logo} alt="logo" />
            </div>
            <h3>Fal Zamanı</h3>
          </a>
        </Link>
      </div>
      <ul className={classes.bar}>
        <li>
          <Link href="/userpage">
            <a>
              <FaUserAlt color="#140731" size="14px" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/uzmanlar">
            <a>Uzmanlar</a>
          </Link>
        </li>
        {/*  Dropdown Menu  */}
        <li ref={menuRef} onClick={() => openMenu(!menuIsOpen)}>
          Fal Türleri
          <FaAngleDown color="#140731" size="16px" />
          {menuIsOpen && (
            <div className={classes.navbarDropdownMenu}>
              <ul className={classes.dropdownmenu}>
                {category.map((data, index) => (
                  <Link key={index} href={`/falturleri/${data.id}`}>
                    <a>
                      <li>{data.name}</li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </li>
        {/* <li>
          <Link href="/burclar">
            <a>Burçlar</a>
          </Link>
        </li> */}
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/kredial">
            <a>Kredi Al</a>
          </Link>
        </li>
        <li>
          <Link href="/kariyer">
            <a>Kariyer</a>
          </Link>
        </li>
        <li>
          <Link href="/bizeulasin">
            <a>Bize Ulaşın</a>
          </Link>
        </li>
      </ul>
      <div className={classes.giris}>
        <Link href="/uyegiris">
          <a>
            <button className={classes.uyegiris}>Üye Girişi</button>
          </a>
        </Link>
      </div>
      <div className={classes.giris}>
        <Link href="/kayit">
          <a>
            <button className={classes.uyegiris}>Üye Ol</button>
          </a>
        </Link>
      </div>
      <div className={classes.hamburgermenu}>
        <Menu>
          <MenuButton>
            <FaBars color="#140731" size="20px" />
          </MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <Link href="/userpage">
              <a>
                <MenuItem>
                  <FaUserAlt color="#140731" size="14px" />
                  Profil
                </MenuItem>
              </a>
            </Link>
            <Link href="/falturleri">
              <a>
                <MenuItem>Fal Türleri</MenuItem>
              </a>
            </Link>
            <Link href="/uzmanlar">
              <a>
                <MenuItem>Uzmanlar</MenuItem>
              </a>
            </Link>
            {/* <MenuItem>
              {" "}
              <Link href="/burclar">
                <a>Burçlar</a>
              </Link>
            </MenuItem> */}
            <Link href="/blog">
              <a>
                <MenuItem>Blog</MenuItem>
              </a>
            </Link>
            <Link href="/kredial">
              <a>
                <MenuItem> Kredi Al</MenuItem>
              </a>
            </Link>
            <Link href="/kariyer">
              <a>
                <MenuItem>Kariyer</MenuItem>
              </a>
            </Link>
            <Link href="/bizeulasin">
              <a>
                {" "}
                <MenuItem>Bize Ulaşın</MenuItem>
              </a>
            </Link>{" "}
            <Link href="/uyegiris">
              <a>
                <MenuItem>Üye Girişi</MenuItem>
              </a>
            </Link>
            <Link href="/kayit">
              <a>
                <MenuItem>Üye Ol</MenuItem>
              </a>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
}
