/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "../styles/blog.module.css";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Kova from "../public/img/kova.png";
import Geyik from "../public/img/geyik.png";

import ZodiacImgone from "../public/img/venus.png";
//import img from "next/img";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import Image from "next/image";

export default function Blog({ blogData, horoscopeData }) {
  return (
    <div className="blog">
      <div className={classes.bloghdr}>
        <h4>BLOG</h4>
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
      <div className={classes.blghdr}>
        <h4>Son Yazılar</h4>
      </div>
      <div className={classes.blgmain}>
        <div className={classes.blgust}>
          <div className={classes.blgrght}>
            {blogData.length > 0 &&
              blogData.map((data, index) => (
                <div key={index} className={classes.blogcard}>
                  <div className={classes.blgcrdimg}>
                    <Image
                      src={Geyik}
                      alt="blog"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <div className={classes.altexphdr}>
                    <h5>{data.title}</h5>
                  </div>
                  <div className={classes.blgcrdexp}>
                    <p>{data.description.split(0, 200)}</p>
                  </div>
                  <div className={classes.blgmore}>
                    <Link href="/blogdetay">
                      <a>Devamı için tıklayı n</a>
                    </Link>
                  </div>
                </div>
              ))}
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
        <div className={classes.rghtbtm}>
          <div className={classes.btmhdr}>
            <h6>Burçlar</h6>
          </div>
          <div className={classes.btmcrds}>
            {horoscopeData.length > 0 &&
              horoscopeData.map((data, index) => (
                <div key={index} className={classes.btmcrd}>
                  <div className={classes.btmcrdimg}>
                    <Image
                      src="data:image/jpeg;base64,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"
                      alt="horoscope"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <div className={classes.btmcrdlink}>
                    <Link href="/burcdetay">
                      <a>{data.name}</a>
                    </Link>
                  </div>
                </div>
              ))}
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
                    <Image
                      src={Kova}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
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
                    <Image
                      src={Kova}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
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
                    <Image
                      src={Kova}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
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
                    <Image
                      src={Kova}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
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
                    <Image
                      src={Kova}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
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
                    <Image
                      src={Kova}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
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
                    <Image
                      src={Kova}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
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
                    <Image
                      src={Kova}
                      alt="dty"
                      objectFit="contain"
                      layout="fill"
                    />
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

export async function getServerSideProps(context) {
  const blogRes = await fetch(process.env.NEXT_APP_API_URL + `/blog/all`, {
    method: "GET",
  });

  const blogData = await blogRes.json();

  const horoscopeRes = await fetch(
    process.env.NEXT_APP_API_URL + `/horoscope/all`,
    {
      method: "GET",
    }
  );

  const horoscopeData = await horoscopeRes.json();

  console.log(blogData);
  console.log(horoscopeData);
  if (!blogData || !horoscopeData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blogData: blogData.data,
      horoscopeData: horoscopeData.data,
    },
  };
}
