import React from "react";
import classes from "../styles/blogdetay.module.css";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Writer from "../public/img/writer.png";
import Geyik from "../public/img/geyik.png";
import Kova from "../public/img/kova.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";

function blogdetay() {
  return (
    <div className="blogdetay">
      <div className={classes.bloghdr}>
        <h4>BLOG</h4>
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
      <div className={classes.blghdr}>
        <h4>Kahve Falında Geyik Görmek</h4>
      </div>
      <div className={classes.blogdtymain}>
        <div className={classes.blgdtyust}>
          <div className={classes.blgdtyrght}>
            <div className={classes.blogcard}>
              <div className={classes.blgcrdimg}>
                <Image src={Geyik} alt="dty" />
              </div>
              <div className={classes.altexphdr}>
                <h5>Kahve Falında Geyik Görmek </h5>
              </div>
              <div className={classes.blgcrdexp}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur….
                </p>
              </div>
              <div className={classes.writer}>
                <div className={classes.wrtimg}>
                  <Image src={Writer} alt="dty" />
                </div>
                <div className={classes.wrtexp}>
                  <h4>Vivi</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.categories}>
            <ul className={classes.catalog}>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>Kahve Falı</a>
                </Link>
              </li>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>Tarot Falı</a>
                </Link>
              </li>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>Su Falı</a>
                </Link>
              </li>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>Katina Aşk Falı</a>
                </Link>
              </li>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>İskambil Falı</a>
                </Link>
              </li>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>DuruGörü</a>
                </Link>
              </li>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>Yıldızname</a>
                </Link>
              </li>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>Venüs Burcu</a>
                </Link>
              </li>
              <li className={classes.flt}>
                <Link href="/blog">
                  <a>Mars Burcu</a>
                </Link>
              </li>
            </ul>
            <div className={classes.altcatalog}>
              <ul className={classes.altct}>
                <li className={classes.altfirstli}>Son Yazılar</li>
                <li className={classes.altli}>
                  <Link href="/blogdetay">
                    <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </li>
                <li className={classes.altli}>
                  <Link href="/blogdetay">
                    <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </li>
                <li className={classes.altli}>
                  <Link href="/blogdetay">
                    <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </li>

                <li className={classes.altli}>
                  <Link href="/blogdetay">
                    <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </li>
                <li className={classes.altli}>
                  <Link href="/blogdetay">
                    <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.blgalt}>
          <div className={classes.althdr}>
            <h4>Popüler Yazılar</h4>
          </div>
          <div className={classes.altswp}>
            <Swiper
              className="swpalt"
              spaceBetween={20}
              slidesPerView="auto"
              navigation
            >
              <SwiperSlide>
                <div className={classes.altcrd}>
                  <div className={classes.altimg}>
                    <Image src={Kova} alt="dty" />
                  </div>
                  <div className={classes.altexp}>
                    <Link href="/blogdetay">
                      <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.altcrd}>
                  <div className={classes.altimg}>
                    <Image src={Kova} alt="dty" />
                  </div>
                  <div className={classes.altexp}>
                    <Link href="/blogdetay">
                      <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.altcrd}>
                  <div className={classes.altimg}>
                    <Image src={Kova} alt="dty" />
                  </div>
                  <div className={classes.altexp}>
                    <Link href="/blogdetay">
                      <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.altcrd}>
                  <div className={classes.altimg}>
                    <Image src={Kova} alt="dty" />
                  </div>
                  <div className={classes.altexp}>
                    <Link href="/blogdetay">
                      <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.altcrd}>
                  <div className={classes.altimg}>
                    <Image src={Kova} alt="dty" />
                  </div>
                  <div className={classes.altexp}>
                    <Link href="/blogdetay">
                      <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.altcrd}>
                  <div className={classes.altimg}>
                    <Image src={Kova} alt="dty" />
                  </div>
                  <div className={classes.altexp}>
                    <Link href="/blogdetay">
                      <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.altcrd}>
                  <div className={classes.altimg}>
                    <Image src={Kova} alt="dty" />
                  </div>
                  <div className={classes.altexp}>
                    <Link href="/blogdetay">
                      <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.altcrd}>
                  <div className={classes.altimg}>
                    <Image src={Kova} alt="dty" />
                  </div>
                  <div className={classes.altexp}>
                    <Link href="/blogdetay">
                      <a>Kova Burcu Aylık Burç Yorumları - Temmuz 2021</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blogdetay;
