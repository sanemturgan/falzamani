import React from "react";
import classes from "../styles/userpage.module.css";
import Link from "next/dist/client/link";
function adminpage() {
  return (
    <div className="userpage">
      <div className={classes.kariyerhdr}>
        <h4>HESABIM</h4>
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
        <div className={classes.danismanlistbtm}>
          <div className={classes.btmhdr}>
            <h5>Fal Geçmişi</h5>
          </div>
          <div className={classes.btminfo}>
            <ul>
              <li className={classes.btminfolist}>
                <div className={classes.infofal}>
                  <h6>Kahve Falı</h6>
                </div>
                <div className={classes.payanddetails}>
                  <p>650 Kredi Ödendi</p>
                  <Link href="/detay">
                    <a>
                      <button className={classes.infodetail}>Detay Oku</button>
                    </a>
                  </Link>
                </div>
              </li>
              <li className={classes.btminfolist}>
                <div className={classes.infofal}>
                  <h6>Kahve Falı</h6>
                </div>
                <div className={classes.payanddetails}>
                  <p>650 Kredi Ödendi</p>
                  <Link href="/detay">
                    <a>
                      <button className={classes.infodetail}>Detay Oku</button>
                    </a>
                  </Link>
                </div>
              </li>
              <li className={classes.btminfolist}>
                <div className={classes.infofal}>
                  <h6>Kahve Falı</h6>
                </div>
                <div className={classes.payanddetails}>
                  <p>650 Kredi Ödendi</p>
                  <Link href="/detay">
                    <a>
                      <button className={classes.infodetail}>Detay Oku</button>
                    </a>
                  </Link>
                </div>
              </li>
              <li className={classes.btminfolist}>
                <div className={classes.infofal}>
                  <h6>Kahve Falı</h6>
                </div>
                <div className={classes.payanddetails}>
                  <p>650 Kredi Ödendi</p>
                  <Link href="/detay">
                    <a>
                      <button className={classes.infodetail}>Detay Oku</button>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default adminpage;
