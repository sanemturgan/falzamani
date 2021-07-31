import React from "react";
import classes from "../styles/burclar.module.css";
import { Input } from "@chakra-ui/react";
import { FaSearch, FaSortDown } from "react-icons/fa";
import ZodiacImgtwo from "../public/img/zodiacsign.png";
import ZodiacImgone from "../public/img/venus.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";

SwiperCore.use([Navigation, A11y]);
function burclar() {
  return (
    <div className="burclar">
      <div className={classes.burchdr}>
        <h4>BURÇLAR</h4>
      </div>
      <div className={classes.search}>
        <div className={classes.srchi}>
          <Link href="/">
            <a>
              <FaSearch color="#281c3b" size="16px" />
            </a>
          </Link>
        </div>
        <Input variant="unstyled" placeholder="Ara" />
      </div>
      <div className={classes.burcmain}>
        <div className={classes.burcrght}>
          <div className={classes.rghthdr}>
            <h5>HAFTALIK BURÇ YORUMLARI</h5>
          </div>
          <div className={classes.hdrswp}>
            <Swiper
              className="swpbrc"
              spaceBetween={50}
              slidesPerView="auto"
              navigation
            >
              <SwiperSlide>
                <Image src={ZodiacImgtwo} alt="btmcrd" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={ZodiacImgtwo} alt="btmcrd" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={ZodiacImgtwo} alt="btmcrd" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={ZodiacImgtwo} alt="btmcrd" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={classes.rghtbtm}>
            <div className={classes.btmhdr}>
              <h6>Son Yazılar</h6>
            </div>
            <div className={classes.btmcrds}>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
              <div className={classes.btmcrd}>
                <div className={classes.btmcrdımg}>
                  <Image src={ZodiacImgone} alt="btmcrd" />
                </div>
                <div className={classes.btmcrdlink}>
                  <Link href="/burcdetay">
                    <a>Yengeç Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </div>
              </div>
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
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.flt}>
              <Link href="/burclar">
                <a>Kahve Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burclar">
                <a>Tarot Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burclar">
                <a>Su Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burclar">
                <a>Katina Aşk Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burclar">
                <a>İskambil Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burclar">
                <a>DuruGörü</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Yıldızname</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Venüs Burcu</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/burclar">
                <a>Mars Burcu</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default burclar;
