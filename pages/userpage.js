import React, { useEffect, useState } from "react";
import classes from "../styles/userpage.module.css";
import Link from "next/dist/client/link";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

export default function Userpage() {
  const cookies = new Cookies();
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState("");
  const [notification, setNotification] = useState();

  useEffect(() => {
    async function fetchData() {
      if (cookies.get("jwt")) {
        await axios
          .get(process.env.REACT_APP_CLIENT_API_URL + `/customer`, {
            headers: {
              Authorization: `${cookies.get("jwt")}`,
            },
          })
          .then((res) => {
            setCustomerInfo(res.data.data);
          })
          .catch((err) => setNotification(err.response.data.error));
      } else {
        router.replace("/uyegiris");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="userpage">
      <div className={classes.kariyerhdr}>
        <h4>HESABIM</h4>
      </div>
      <div className={classes.adminmain}>
        <div className={classes.admininfo}>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Kullanıcı Adı:</p>
              <p>{customerInfo.username}</p>
            </div>
            <Link href="/changeusername">
              <a>Değiştir</a>
            </Link>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>E-Mail:</p>
              <p>{customerInfo.email}</p>
            </div>
            <Link href="/changeemail">
              <a>Değiştir</a>
            </Link>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Telefon:</p>
              <p>{customerInfo.phone}</p>
            </div>
            <Link href="/changeemail">
              <a>Değiştir</a>
            </Link>
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
