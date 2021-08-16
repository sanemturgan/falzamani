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
                    {console.log(data.image)}

                    <Image
                      src={`${data.image}`}
                      alt="blog"
                      objectFit="cover"
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
                      <a>Devamı için tıklayın</a>
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
                      src={`${data.image}`}
                      alt="dty"
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
