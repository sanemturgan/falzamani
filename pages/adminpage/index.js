import React from "react";
import classes from "../../styles/adminpage.module.css";
import Link from "next/dist/client/link";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
export default function Adminpage() {
  const cookies = new Cookies();
  const router = useRouter();
  const logOut = () => {
    cookies.remove("jwt");
    cookies.remove("userData");
    router.replace("/adminlogin");
  };
  return (
    <div className="adminpage">
      <div className={classes.kariyerhdr}>
        <h4>Admin Hesabım</h4>
      </div>
      <div className={classes.adminmain}>
        <div className={classes.admininfo}>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Kullanıcı Adı:</p>
              <p>Luna</p>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>E-Mail:</p>
              <p>Luna@fgdg.com</p>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Şifre:</p>
              <p>*********</p>
            </div>
            <Link href="/changepassword">
              <a>Değiştir</a>
            </Link>
          </div>
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.flt}>
              <Link href="/adminblog">
                <a>Blog Düzenle</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/danisman">
                <a>Danışmanlar</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/adminkredi">
                <a>Kredi Düzenle</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <div className={classes.exit}>
                <Link href="/adminlogin">
                  <a>
                    <button onClick={logOut}>Çıkış Yap</button>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
