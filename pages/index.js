import React, { useState, useEffect } from "react";
import classes from "../styles/Homepage.module.css";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CardImg from "../public/img/falcard.png";
import Zodiacimg from "../public/img/zodiac.png";
import BannerImg from "../public/img/banner.png";
import { FaStar, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
SwiperCore.use([Navigation, A11y]);

function HomePage({ data }) {
  const [arrows, setArrows] = useState(true);
  useEffect(() => {
    if (window) {
      setArrows(window.innerHeight > 900);
    }
    console.log(data);
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
          <Image src={BannerImg} alt="teller" objectFit="cover" layout="fill" />
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
          {Array.from(Array(10)).map((e, i) => (
            <SwiperSlide key={i}>
              <div className={classes.card}>
                <div className={classes.cardimg}>
                  <Image
                    src={CardImg}
                    alt="teller"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
                <h5>Luna</h5>
                <div className={classes.star}>
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                </div>
                <p>
                  20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                  yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
                </p>
                <div className={classes.crdi}>
                  <div className={classes.cardicon}>
                    <FaPhoneAlt color="#ECDCF5" size="20px" />
                  </div>
                  <div className={classes.cardicon}>
                    <FaEnvelope color="#ECDCF5" size="20px" />
                  </div>
                </div>
                <div className={classes.cardbtn}>
                  <Link href="/uzmandetay">
                    <a>
                      <button className={classes.cardgiris}>Fal Baktır</button>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.zodiac}>
        <div className={classes.zodiachdr}>
          <h3>HAFTALIK BURÇ YORUMLARI</h3>
        </div>
        <div className={classes.bottomSlider}>
          <Swiper
            className="zodiacswp"
            spaceBetween={30}
            slidesPerView="auto"
            navigation={arrows}
          >
            {Array.from(Array(10)).map((e, i) => (
              <SwiperSlide key={i}>
                <div className={classes.zdcmain}>
                  <div className={classes.zdcimg}>
                    <Image
                      src={Zodiacimg}
                      alt="zodiac"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <div className={classes.zdcrd}>
                    <Link href="/burcdetay">
                      <a>Koç Burcunda Bu Hafta...</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default HomePage;
