import React, { useState, useEffect } from "react";
import classes from "../styles/Homepage.module.css";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
import Img from "next/image";
import CardImg from "../public/img/falcard.png";
import Zodiacimg from "../public/img/zodiac.png";
import BannerImg from "../public/img/banner.png";
import { FaStar, FaPhoneAlt, FaEnvelope, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

SwiperCore.use([Navigation, A11y]);

function HomePage({ warlockData, horoscopeData }) {
  const [arrows, setArrows] = useState(true);
  useEffect(() => {
    if (window) {
      setArrows(window.innerHeight > 900);
    }
  }, []);

  return (
    <div className="wrapperClass">
      <div className={classes.banner}>
        <div className={classes.bnrhdr}>
          <h4>Fal Zamanına Hoş geldin!</h4>
          <h4>
            <span>
              50+ Gerçek Falcılar ile Online, Canlı Hemen Fal Baktır! Tüm Fal
              Severler Fal Zamanında!
            </span>
          </h4>
          <p>Gerçek Falcılar, Sorularını Yanıtlamak İçin Sabırsızlanıyor!</p>
          <div className={classes.bnruye}>
            <Link href="/kayit">
              <a>
                {" "}
                <button className={classes.bnrgiris}>Üye Ol</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.backImage}>
          <Img src={BannerImg} alt="teller" objectFit="cover" layout="fill" />
        </div>
      </div>
      <div className={classes.snm}>
        <div className={classes.snmhdr}>
          <h3>GERÇEK FALCILAR İLE ONLİNE CANLI FAL ZAMANINDA</h3>
        </div>
        <div className={classes.snmlist}>
          <ul>
            <li>
              <h6>Tüm Fal Severler Fal Zamanında!</h6>
              <p>
                Gerçek falcılara online fal baktırmak artık çok kolay. Kahve
                falı, tarot falı, katina aşk falı, ilişki danışmanlığı,
                astroloji falı, rüya yorumu ve el falı baktırmak için online
                gerçek falcını seçip hemen fal baktır.
              </p>
            </li>
            <li>
              <h6>Tüm Fal Severler Fal Zamanında!</h6>
              <p>
                Gerçek falcılara online fal baktırmak artık çok kolay. Kahve
                falı, tarot falı, katina aşk falı, ilişki danışmanlığı,
                astroloji falı, rüya yorumu ve el falı baktırmak için online
                gerçek falcını seçip hemen fal baktır.
              </p>
            </li>
            <li>
              <h6>Tüm Fal Severler Fal Zamanında!</h6>
              <p>
                Gerçek falcılara online fal baktırmak artık çok kolay. Kahve
                falı, tarot falı, katina aşk falı, ilişki danışmanlığı,
                astroloji falı, rüya yorumu ve el falı baktırmak için online
                gerçek falcını seçip hemen fal baktır.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Swiper
          className="swipercards"
          spaceBetween={30}
          slidesPerView="auto"
          navigation={arrows}
        >
          {warlockData.length > 0 &&
            warlockData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={classes.cardMain}>
                    <div className={classes.card}>
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
                      {/* <div className={classes.star}>
                        <FaStar color="#ECDCF5" size="14px" />
                        <FaStar color="#ECDCF5" size="14px" />
                        <FaStar color="#ECDCF5" size="14px" />
                        <FaStar color="#ECDCF5" size="14px" />
                        <FaStar color="#ECDCF5" size="14px" />
                        {data.rating}
                      </div> */}
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
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className={classes.zodiac}>
        <div className={classes.zodiachdr}>
          <h3>BURÇ YORUMLARI</h3>
        </div>
        <div className={classes.bottomSlider}>
          <Swiper
            className="zodiacswp"
            spaceBetween={30}
            slidesPerView="auto"
            navigation={arrows}
          >
            {horoscopeData.length > 0 &&
              horoscopeData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div key={index} className={classes.zdcmain}>
                    <div className={classes.zdcimg}>
                      <Image
                        src={data.image}
                        alt="zodiac"
                        objectFit="cover"
                        layout="fill"
                        borderRadius="full"
                        boxSize="250px"
                      />
                    </div>
                    <div className={classes.zdcrd}>
                      <Link href={`/burcdetay/${data.id}`}>
                        <a>{data.name}</a>
                      </Link>
                    </div>
                  </div>
                  ))
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  const warlockRes = await fetch(
    process.env.NEXT_APP_API_URL + `/warlock/all`,
    {
      method: "GET",
    }
  );
  const warlockData = await warlockRes.json();

  const horoscopeRes = await fetch(
    process.env.NEXT_APP_API_URL + `/horoscope/all`,
    {
      method: "GET",
    }
  );

  const horoscopeData = await horoscopeRes.json();

  if (!data || !warlockData || !horoscopeData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data, // will be passed to the page component as props
      warlockData: warlockData.data,
      horoscopeData: horoscopeData.data,
    },
  };
}

export default HomePage;
