import React from "react";
import classes from "../styles/adminpage.module.css";
import Link from "next/dist/client/link";
function adminpage() {
  return (
    <div className="adminpage">
      <div className={classes.kariyerhdr}>
        <h4>Admin Hesabım</h4>
      </div>
      <div className={classes.adminmain}>
        <div className={classes.admininfo}>
          <div className={classes.info}>
            <p>Kullanıcı Adı:Luna</p>
            <Link href="/changeusername">
              <a>Değiştir</a>
            </Link>
          </div>
          <div className={classes.info}>
            <p>Email:Luna@fdgfd.com</p>
            <Link href="/changeemail">
              <a>Değiştir</a>
            </Link>
          </div>
          <div className={classes.info}>
            <p>Şifre:********</p>
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
              <Link href="/cikis">
                <a>Çıkış Yap</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default adminpage;
