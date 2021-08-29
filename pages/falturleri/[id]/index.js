import React from "react";
import classes from "../../../styles/falturleri.module.css";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import Link from "next/link";
import MiniCategoryMenu from "../../../components/MiniCategoryMenu";

import GigCard from "../../../components/gigCard";
export default function Falturleri({ gigData, falData, falCategoryData }) {
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
              <h3>{falCategoryData.name}</h3>
              <p>{falCategoryData.description}</p>
            </div>
          </div>
          <div className={classes.cardMain}>
            {gigData.length > 0 &&
              gigData.map((data, index) => {
                return <GigCard key={index} gigData={data} />;
              })}
          </div>
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

  const falCategoryRes = await fetch(
    process.env.NEXT_APP_API_URL + `/category/${paramsData.id}`,
    {
      method: "GET",
    }
  );
  const falCategoryData = await falCategoryRes.json();

  const falRes = await fetch(process.env.NEXT_APP_API_URL + `/category/all`, {
    method: "GET",
  });
  const falData = await falRes.json();

  const gigRes = await fetch(
    process.env.NEXT_APP_API_URL + `/gig/all/${paramsData.id}`,
    {
      method: "GET",
    }
  );

  const gigData = await gigRes.json();

  if (!warlockData || !falCategoryData || !gigData || !falData) {
    return {
      notFound: true,
    };
  }

  console.log(falCategoryData);
  return {
    props: {
      warlockData: warlockData.data,
      falCategoryData: falCategoryData.data,
      gigData: gigData.data,
      falData: falData.data,
    },
  };
}
