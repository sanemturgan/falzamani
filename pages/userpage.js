import React, { useEffect, useState } from "react";
import classes from "../styles/userpage.module.css";
import Link from "next/dist/client/link";
import axios from "axios";
import Cookies from "universal-cookie";

import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/react";
import CustomerHistory from "../components/CustomerHistory";

export default function Userpage() {
  const cookies = new Cookies();
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState("");
  const [notification, setNotification] = useState();

  useEffect(() => {
    async function fetchData() {
      if (cookies.get("jwt")) {
        await axios
          .get(process.env.REACT_APP_CLIENT_API_URL + `/customer/me`, {
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

  const logOut = () => {
    cookies.remove("jwt");
    cookies.remove("userData");
    router.replace("/uyegiris");
  };

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
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>E-Mail:</p>
              <p>{customerInfo.email}</p>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Telefon:</p>
              <p>{customerInfo.phone}</p>
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
          <div className={classes.exit}>
            <Link href="/uyegiris">
              <a>
                <button onClick={logOut}>Çıkış Yap</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.danismanlistbtm}>
          <div className={classes.btmhdr}>
            <h5>Fal Geçmişi</h5>
          </div>
          <div className={classes.btminfo}>
            <ul>
              <CustomerHistory classes={classes} />
              <CustomerHistory classes={classes} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
