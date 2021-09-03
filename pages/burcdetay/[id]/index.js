import React from "react";
import classes from "../../../styles/burcdetay.module.css";
import ZodiacImgthree from "../../../public/img/burcdty.png";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import MiniCategoryMenu from "../../../components/MiniCategoryMenu";

export default function Burcdetay({ horoscopeDescriptionData, falData }) {
  return (
    <div className="burcdetay">
      <div className={classes.burchdr}>
        <h4>BURÇLAR</h4>
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
      <div className={classes.detaymain}>
        {horoscopeDescriptionData.length > 0 &&
          horoscopeDescriptionData.map((data, index) => {
            return (
              <div key={index} className={classes.descriptionmain}>
                <div className={classes.dtyrght}>
                  <div className={classes.dtyimg}>
                    <Image
                      src={ZodiacImgthree}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <div className={classes.dtyexp}>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <div className={classes.categories}>
          <MiniCategoryMenu classes={classes} falData={falData} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const paramsData = await context.query;
  const res = await fetch(
    process.env.NEXT_APP_API_URL + `/horoscopeDescription/${paramsData.id}`,
    {
      method: "GET",
    }
  );

  const falRes = await fetch(process.env.NEXT_APP_API_URL + `/category/all`, {
    method: "GET",
  });

  const falData = await falRes.json();
  const horoscopeDescriptionData = await res.json();

  if (!horoscopeDescriptionData || !falData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      horoscopeDescriptionData: horoscopeDescriptionData.data,
      falData: falData.data,
    },
  };
}
