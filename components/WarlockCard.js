import React from "react";
import classes from "../styles/danisman.module.css";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import Verified from "../components/Verified";
import axios from "axios";
import Cookies from "universal-cookie";

export default function WarlockCard({ data, adminWarlock }) {
  const cookies = new Cookies();

  const deleteUser = async (id) => {
    const userId = {
      id: id,
    };
    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + "/admin", userId, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        console.log(res);
        adminWarlock();
      })
      .catch((err) => {
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
      });
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardimg}>
        {data.image ? (
          <Image
            src={data.image}
            alt="dty"
            objectFit="contain"
            layout="fill"
            borderRadius="full"
            boxSize="100px"
          />
        ) : (
          <FaUserAlt fontSize="90px" color="lightgray" />
        )}
      </div>
      <h5>{data.name}</h5>
      <h6 className={classes.status}>{data.status}</h6>

      <p>{data.about}</p>
      <div className={classes.crdi}>
        <div className={classes.cardicon}>
          <Link href={`/uzmanlar/${data.id}`}>
            <a></a>
          </Link>
        </div>
        <div className={classes.cardicon}>
          <Link href={`/uzmanlar/${data.id}`}>
            <a></a>
          </Link>
        </div>
      </div>
      <div className={classes.cardbtn}>
        <Link href={`/uzmanlar/${data.id}`}>
          <a>
            <button className={classes.cardgiris}>Detay Görüntüle</button>
          </a>
        </Link>
      </div>
      <div className={classes.cardbtn}>
        <button
          onClick={() => {
            deleteUser(data.id);
          }}
          className={classes.deleteWarlock}
        >
          Üyeyi Sil
        </button>
      </div>
      {data.verified ? (
        <span style={{ color: "white" }}>ONAYLANDI</span>
      ) : (
        <Verified data={data} adminWarlock={adminWarlock} />
      )}
    </div>
  );
}
