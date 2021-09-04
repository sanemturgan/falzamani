import React from "react";
import classes from "../../styles/uzmanlar.module.css";
import { Input, Image } from "@chakra-ui/react";
import { FaPhoneAlt, FaUserAlt, FaEnvelope, FaSearch } from "react-icons/fa";
import CardImg from "../../public/img/falcard.png";
import Img from "next/image";
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
                        <a>
                          <FaPhoneAlt color="#ECDCF5" size="20px" />
                        </a>
                      </Link>
                    </div>
                    <div className={classes.cardicon}>
                      <Link href={`/uzmanlar/${data.id}`}>
                        <a>
                          <FaEnvelope color="#ECDCF5" size="20px" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className={classes.cardbtn}>
                    <Link href={`/uzmanlar/${data.id}`}>
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
