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
import GigCard from "../../../components/gigCard";
export default function Falturleri({ gigData, falData, warlockData }) {
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
            {gigData.length > 0 &&
              gigData.map((data, index) => {
                return <GigCard key={index} gigData={data} />;
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

  const gigRes = await fetch(
    process.env.NEXT_APP_API_URL + `/gig/all/${paramsData.id}`,
    {
      method: "GET",
    }
  );

  const gigData = await gigRes.json();

  if (!warlockData || !falData || !gigData) {
    return {
      notFound: true,
    };
  }
  console.log(gigData);
  console.log(falData);
  return {
    props: {
      warlockData: warlockData.data,
      falData: falData.data,
      gigData: gigData.data,
    },
  };
}
