import React from "react";
import classes from "../../styles/uzmanlar.module.css";
import { Input } from "@chakra-ui/react";
import { FaPhoneAlt, FaStar, FaEnvelope, FaSearch } from "react-icons/fa";
import CardImg from "../../public/img/falcard.png";
import Image from "next/image";
import Link from "next/link";

export default function uzmanlar({ warlockData }) {
  return (
    <div className="uzmanMain">
      <div className={classes.uzmanlar}>
        <div className={classes.uzmanhdr}>
          <h4>UZMANLAR</h4>
          <p>
            Aklınızda sorulara tecrübesiyle kişiselleştirilmiş cevap bulmanızı
            sağlayacak uzmanı seç.
          </p>
        </div>
        <div className={classes.search}>
          <div className={classes.srchi}>
            <Link href="/search">
              <a>
                <FaSearch color="#281c3b" size="16px" />
              </a>
            </Link>
          </div>
          <Input variant="unstyled" placeholder="Ara" />
        </div>
        <div className={classes.cardMain}>
          {warlockData.length > 0 &&
            warlockData.map((data, index) => {
              return (
                <div key={index} className={classes.card}>
                  <div className={classes.cardimg}>
                    <Image
                      src={CardImg}
                      alt="teller"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <h5>{data.name}</h5>
                  <h6 className={classes.online}>(ÇEVRİM İÇİ)</h6>
                  <h6 className={classes.offline}>(ÇEVRİM DIŞI)</h6>
                  <h6 className={classes.notavailable}>
                    (MEŞGUL){data.status}
                  </h6>
                  <div className={classes.star}>
                    <FaStar color="#ECDCF5" size="14px" />
                    <FaStar color="#ECDCF5" size="14px" />
                    <FaStar color="#ECDCF5" size="14px" />
                    <FaStar color="#ECDCF5" size="14px" />
                    <FaStar color="#ECDCF5" size="14px" />
                    {data.rating}
                  </div>
                  <p>{data.about}</p>
                  <div className={classes.crdi}>
                    <div className={classes.cardicon}>
                      <Link href="/uzmanlar/4">
                        <a>
                          <FaPhoneAlt color="#ECDCF5" size="20px" />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.cardicon}>
                      <Link href="/uzmanlar/4">
                        <a>
                          <FaEnvelope color="#ECDCF5" size="20px" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className={classes.cardbtn}>
                    <Link href="/uzmanlar/4">
                      <a>
                        <button className={classes.cardgiris}>
                          Fal Baktır
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const warlockRes = await fetch(
    process.env.NEXT_APP_API_URL + `/warlock/all`,
    {
      method: "GET",
    }
  );

  const warlockData = await warlockRes.json();

  console.log(warlockData);

  if (!warlockData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      warlockData: warlockData.data,
    },
  };
}
