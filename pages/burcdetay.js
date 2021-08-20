import React from "react";
import classes from "../styles/burcdetay.module.css";
import ZodiacImgthree from "../public/img/burcdty.png";
import { Input } from "@chakra-ui/react";
import { FaSearch, FaSortDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Burcdetay({ data, HoroscopeDescriptionData }) {
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
        {HoroscopeDescriptionData.length > 0 &&
          HoroscopeDescriptionData.map((data, index) => {
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
                <div className={classes.categories}>
                  <ul className={classes.catalog}>
                    <li className={classes.fldr}>Genel</li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>Kahve Falı</a>
                      </Link>
                    </li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>Tarot Falı</a>
                      </Link>
                    </li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>Su Falı</a>
                      </Link>
                    </li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>Katina Aşk Falı</a>
                      </Link>
                    </li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>İskambil Falı</a>
                      </Link>
                    </li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>DuruGörü</a>
                      </Link>
                    </li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>Yıldızname</a>
                      </Link>
                    </li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>Venüs Burcu</a>
                      </Link>
                    </li>
                    <li className={classes.flt}>
                      <Link href="/burcdetay">
                        <a>Mars Burcu</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
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
  const HoroscopeDescriptionRes = await fetch(
    process.env.NEXT_APP_API_URL + `/horoscopeDescription`,
    {
      /*method: "GET",*/
    }
  );

  const HoroscopeDescriptionData = await HoroscopeDescriptionRes.json();

  if (!HoroscopeDescriptionData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      HoroscopeDescriptionData: HoroscopeDescriptionData.data,
    },
  };
}
