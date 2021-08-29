import React, { useEffect, useState } from "react";
import classes from "../../../styles/uzmandetay.module.css";
import { FaPhoneAlt, FaStar, FaEnvelope, FaSortDown } from "react-icons/fa";
import CardImg from "../../../public/img/falcard.png";
import Image from "next/image";
import Link from "next/link";
import Comment from "../../../components/Comment";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import GigCard from "../../../components/GigCard";
export default function Uzmandetay({ warlockSingleData, falData, gigData }) {
  const [gig, setGig] = useState();
  useEffect(() => {
    async function fetchData() {
      const gigObject = { warlockId: 15 };
      await axios
        .get(process.env.REACT_APP_CLIENT_API_URL + `/gig`, gigObject)
        .then((res) => {
          setGig(res.data.data);
          console.log(res);
        })
        .catch((err) => console.log());
    }

    fetchData();
  }, []);

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
              <Image
                src={CardImg}
                alt="teller"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <h5>{warlockSingleData.name}</h5>
            <h6 className={classes.status}>{warlockSingleData.status}</h6>

            <div className={classes.onlinebtn}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="alerts" mb="0" fontSize="14px">
                  Online Olduğunda Bildir
                </FormLabel>
                <Switch size="lg" id="alerts" />
              </FormControl>
            </div>
          </div>
          <div className={classes.ustiki}>
            <div className={classes.iletisim}>
              <div className={classes.cardicon}>
                <FaPhoneAlt color="#ECDCF5" size="20px" />
                <p>{warlockSingleData.phone}</p>
              </div>
              <div className={classes.cardicon}>
                <FaEnvelope color="#ECDCF5" size="20px" />
                <p>{warlockSingleData.email}</p>
              </div>
            </div>
            <div className={classes.expbtm}>
              <p>{warlockSingleData.about}</p>
            </div>
            <div className={classes.fallar}>
              <div className={classes.faldty}>
                <h5>{falData.name}</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
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
            {warlockSingleData.Gig.map((data, index) => {
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
  console.log(warlockSingleData);
  const falRes = await fetch(
    process.env.NEXT_APP_API_URL + `/category/${paramsData.id}`,
    {
      method: "GET",
    }
  );
  const falData = await falRes.json();

  const gigRes = await fetch(
    process.env.NEXT_APP_API_URL + `/gig/all/${paramsData.id}`,
    {
      method: "GET",
    }
  );

  const gigData = await gigRes.json();

  if (!warlockSingleData || !falData || !gigData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      warlockSingleData: warlockSingleData.data,
      falData: falData.data,
      gigData: gigData.data,
    },
  };
}
