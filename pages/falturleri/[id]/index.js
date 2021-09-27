import React from "react";
import classes from "../../../styles/falturleri.module.css";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Search from "../../../components/Search";
import Link from "next/link";
import MiniCategoryMenu from "../../../components/MiniCategoryMenu";

import GigCard from "../../../components/GigCard";
export default function Falturleri({ gigData, falData, falCategoryData }) {
  return (
    <div className="falturleri">
      <div className={classes.faltrhdr}>
        <h4>FAL TÜRLERİ</h4>
      </div>
      <Search />
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

  if (!falCategoryData || !gigData || !falData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      falCategoryData: falCategoryData.data,
      gigData: gigData.data,
      falData: falData.data,
    },
  };
}
