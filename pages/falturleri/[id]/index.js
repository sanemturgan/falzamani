import React from "react";
import classes from "../../../styles/falturleri.module.css";
import { Input } from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
} from "react-icons/fa";
import CardImg from "../../../public/img/falcard.png";
import Image from "next/image";
import Link from "next/link";
import MiniCategoryMenu from "../../../components/MiniCategoryMenu";
export default function Falturleri({ warlockData, falData }) {
  return (
    <div className="falturleri">
      <div className={classes.faltrhdr}>
        <h4>FAL TÜRLERİ</h4>
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
      <div className={classes.falmain}>
        <div className={classes.faltur}>
          <div className={classes.falturhdr}>
            <div className={classes.falHeader}>
              <h3>{falData.name}</h3>
              <p>{falData.description}</p>
            </div>
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
          {/* <div className={classes.more}>
            <Link href="/more">
              <a>
                {" "}
                <FaSortDown color="#ECDCF5" size="30px" />
              </a>
            </Link>
          </div> */}
        </div>
        <div className={classes.categories}>
          <MiniCategoryMenu classes={classes} falData={falData} />
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const paramsData = await context.query;
  const warlockRes = await fetch(
    process.env.NEXT_APP_API_URL + `/warlock/all`,
    {
      method: "GET",
    }
  );
  const warlockData = await warlockRes.json();

  const falRes = await fetch(
    process.env.NEXT_APP_API_URL + `/category/${paramsData.id}`,
    {
      method: "GET",
    }
  );
  const falData = await falRes.json();

  if (!warlockData || !falData) {
    return {
      notFound: true,
    };
  }
  console.log(falData);
  return {
    props: {
      warlockData: warlockData.data,
      falData: falData.data,
    },
  };
}
