import React from "react";
import classes from "../styles/Homepage.module.css";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CardImg from "../public/img/falcard.png";
import Zodiacimg from "../public/img/zodiac.png";
import { FaStar, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
SwiperCore.use([Navigation, A11y]);

function HomePage() {
  return (
    <div className="wrapperClass">
      <div className={classes.banner}>
        <div className={classes.bnrhdr}>
          <h4>Fal Zamanı'na Hoş geldin!</h4>
          <h4>
            <span>
              50+ Gerçek Falcılar ile Online, Canlı Hemen Fal Baktır! Tüm Fal
              Severler Fal Zamanı'nda!
            </span>
          </h4>
          <p>Gerçek Falcılar, Sorularını Yanıtlamak İçin Sabırsızlanıyor!</p>
          <div className={classes.bnruye}>
            <button className={classes.bnrgiris}>Üye Ol</button>
          </div>
        </div>
      </div>
      <div className={classes.snm}>
        <div className={classes.snmhdr}>
          <h3>GERÇEK FALCILAR İLE ONLİNE CANLI FAL ZAMANI'NDA</h3>
        </div>
        <div className={classes.snmlist}>
          <ul>
            <li>
              <h6>Tüm Fal Severler Fal Zamanı'nda!</h6>
              <p>
                Gerçek falcılara online fal baktırmak artık çok kolay. Kahve
                falı, tarot falı, katina aşk falı, ilişki danışmanlığı,
                astroloji falı, rüya yorumu ve el falı baktırmak için online
                gerçek falcını seçip hemen fal baktır.
              </p>
            </li>
            <li>
              <h6>Tüm Fal Severler Fal Zamanı'nda!</h6>
              <p>
                Gerçek falcılara online fal baktırmak artık çok kolay. Kahve
                falı, tarot falı, katina aşk falı, ilişki danışmanlığı,
                astroloji falı, rüya yorumu ve el falı baktırmak için online
                gerçek falcını seçip hemen fal baktır.
              </p>
            </li>
            <li>
              <h6>Tüm Fal Severler Fal Zamanı'nda!</h6>
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
          spaceBetween={50}
          slidesPerView="auto"
          navigation
        >
          <SwiperSlide>
            <div className={classes.card}>
              <Image src={CardImg} />
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="34px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="34px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <button className={classes.cardgiris}>Fal Baktır</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={classes.card}>
              <Image src={CardImg} />
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="34px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="34px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <button className={classes.cardgiris}>Fal Baktır</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={classes.card}>
              <Image src={CardImg} />
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="34px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="34px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <button className={classes.cardgiris}>Fal Baktır</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={classes.card}>
              <Image src={CardImg} />
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="34px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="34px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <button className={classes.cardgiris}>Fal Baktır</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={classes.card}>
              <Image src={CardImg} />
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="34px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="34px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <button className={classes.cardgiris}>Fal Baktır</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={classes.card}>
              <Image src={CardImg} />
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="34px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="34px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <button className={classes.cardgiris}>Fal Baktır</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={classes.card}>
              <Image src={CardImg} />
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
                <FaStar color="#ECDCF5" size="20px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="34px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="34px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <button className={classes.cardgiris}>Fal Baktır</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={classes.zodiac}>
        <div className={classes.zodiachdr}>
          <h3>HAFTALIK BURÇ YORUMLARI</h3>
        </div>
        <div className={classes.bottomSlider}>
          <Swiper
            className="zodiacswp"
            spaceBetween={60}
            slidesPerView="auto"
            navigation
          >
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.zdcmain}>
                <div className={classes.zdcimg}>
                  <Image src={Zodiacimg} />
                </div>
                <div className={classes.zdcrd}>
                  <Link className={classes.zdch3} href="/">
                    <a>Koç Burcunda Bu Hafta...</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
