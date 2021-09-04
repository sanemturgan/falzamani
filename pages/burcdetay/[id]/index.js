import React from "react";
import classes from "../../../styles/burcdetay.module.css";
import ZodiacImgthree from "../../../public/img/burcdty.png";
import { Input, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import Link from "next/link";
import MiniHoroscopeCategory from "../../../components/MiniHoroscopeCategory";

export default function Burcdetay({ horoscopeDescriptionData, horoscopeData }) {
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
                      src="https://images2.alphacoders.com/110/110412.jpg"
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                      borderRadius="40px"
                      htmlWidth="500px"
                      marginBottom="50px"
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
          <MiniHoroscopeCategory
            classes={classes}
            horoscopeData={horoscopeData}
          />
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

  const horoscopeRes = await fetch(
    process.env.NEXT_APP_API_URL + `/horoscope/all`,
    {
      method: "GET",
    }
  );

  const horoscopeData = await horoscopeRes.json();
  const horoscopeDescriptionData = await res.json();

  if (!horoscopeDescriptionData || !horoscopeData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      horoscopeDescriptionData: horoscopeDescriptionData.data,
      horoscopeData: horoscopeData.data,
    },
  };
}
