import React, { useEffect, useState } from "react";
import classes from "../../../styles/uzmandetay.module.css";
import { FaPhoneAlt, FaEnvelope, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import Comment from "../../../components/Comment";
import { Switch, FormControl, FormLabel, Image } from "@chakra-ui/react";

import GigCard from "../../../components/GigCard";
export default function Uzmandetay({ warlockSingleData, gigData }) {
  return (
    <div className="uzmanDetay">
      <div className={classes.uzmanhdr}>
        <h4>UZMANLAR</h4>
        <p>
          Aklınızda sorulara tecrübesiyle kişiselleştirilmiş cevap bulmanızı
          sağlayacak uzmanı seç.
        </p>
      </div>
      <div className={classes.uzmangenel}>
        <div className={classes.uzmantop}>
          <div className={classes.ustbir}>
            <div className={classes.cardimg}>
              {warlockSingleData.image ? (
                <Image
                  src={warlockSingleData.image}
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
            <h5>{warlockSingleData.name}</h5>
            <h6 className={classes.status}>{warlockSingleData.status}</h6>

            {/* <div className={classes.onlinebtn}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="alerts" mb="0" fontSize="14px">
                  Online Olduğunda Bildir
                </FormLabel>
                <Switch size="lg" id="alerts" />
              </FormControl>
            </div> */}
          </div>
          <div className={classes.ustiki}>
            <div className={classes.iletisim}>
              <div className={classes.cardicon}>
                <a href={`tel:${warlockSingleData.phone}`}>
                  <FaPhoneAlt color="#ECDCF5" size="20px" />
                </a>
              </div>
              <div className={classes.cardicon}>
                <FaEnvelope color="#ECDCF5" size="20px" />
                <p>{warlockSingleData.email}</p>
              </div>
            </div>
            <div className={classes.expbtm}>
              <p>{warlockSingleData.about}</p>
            </div>
          </div>
        </div>

        <div className={classes.uzmanmid}>
          <div className={classes.options}>
            {gigData.length > 0 &&
              gigData.map((data, index) => {
                return <GigCard key={index} gigData={data} />;
              })}
          </div>
        </div>
        <div className={classes.uzmanbtm}>
          <div className={classes.btmhdr}>
            <h4>FALCI YORUMLARI</h4>
          </div>
          <div className={classes.comments}>
            {warlockSingleData.Gig.map((data) => {
              return data.Comment.map((commentData, index) => {
                return <Comment key={index} data={commentData} />;
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const paramsData = await context.query;
  const res = await fetch(
    process.env.NEXT_APP_API_URL + `/warlock/${paramsData.id}`,
    {
      method: "GET",
    }
  );
  const warlockSingleData = await res.json();

  const gigRes = await fetch(
    process.env.NEXT_APP_API_URL + `/gig/${paramsData.id}/all`,
    {
      method: "GET",
    }
  );

  const gigData = await gigRes.json();

  if (!warlockSingleData || !gigData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      warlockSingleData: warlockSingleData.data,

      gigData: gigData.data,
    },
  };
}
