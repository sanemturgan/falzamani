import React, { useState, useEffect } from "react";
import classes from "../../styles/danisman.module.css";
import CardImg from "../../public/img/falcard.png";
import { Image, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";
import { FaUserAlt } from "react-icons/fa";
import FileBase64 from "react-file-base64";
import withAdmin from "../../HOC/withAdmin";
import WarlockCard from "../../components/WarlockCard";
function AdminDanisman() {
  const cookies = new Cookies();
  const [warlock, setWarlock] = useState([]);

  const adminWarlock = async () => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + `/warlock/all`, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        setWarlock(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!cookies.get("jwt")) {
      router.replace("/adminlogin");
    }
    adminWarlock();
  }, []);

  const getFiles = (files) => {
    setFiles(files);
    axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + "/warlock/image",
        { image: files.base64 },
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      )

      .then((res) => {
        console.log(res);
        adminWarlock();
      })
      .catch((err) => console.log(err.response.data.error));
  };

  const deleteUser = async (id) => {
    const userId = {
      id: id,
    };
    await axios
      .delete(process.env.REACT_APP_CLIENT_API_URL + "/admin", userId, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        console.log(res);
        adminWarlock();
      })
      .catch((err) => console.log(err.response.data.error));
  };

  return (
    <div className="danisman">
      <div className={classes.kariyerhdr}>
        <h4>DANIŞMAN PROFİLLERİ</h4>
      </div>
      <div className={classes.danismanmain}>
        <div className={classes.danismanlist}>
          <div className={classes.cardMain}>
            {warlock.length > 0 &&
              warlock.map((data) => {
                return <WarlockCard key={data.id} data={data} />;
              })}
          </div>
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.flt}>
              <Link href="/adminpage">
                <a>Hesabım</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/adminblog">
                <a>Blog Düzenle</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/adminkredi">
                <a>Kredi Düzenle</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default withAdmin(AdminDanisman);
