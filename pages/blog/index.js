/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "../../styles/blog.module.css";
import { Input, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

//import Image from "next/image";
import MiniCategoryMenu from "../../components/MiniCategoryMenu";
import MiniCategorySecondMenu from "../../components/MiniCategorySecondMenu";
import SwiperCards from "../../components/SwiperCards";
export default function Blog({ blogData, horoscopeData, falData }) {
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
                      src={`${data.image}`}
                      alt="blog"
                      objectFit="cover"
                      layout="fill"
                      borderRadius="40px 40px 0 0"
                      boxSize="356px"
                    />
                  </div>
                  <div className={classes.altexphdr}>
                    <h5>{data.title}</h5>
                  </div>
                  <div className={classes.blgcrdexp}>
                    <p>{data.description} </p>
                  </div>
                  <div className={classes.blgmore}>
                    <Link href={`/blog/${data.id}`}>
                      <a>Devamı için tıklayın</a>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className={classes.categories}>
            <MiniCategoryMenu classes={classes} falData={falData} />
            <div className={classes.altcatalog}>
              <ul className={classes.altct}>
                <li className={classes.altfirstli}>Son Yazılar</li>
                <MiniCategorySecondMenu classes={classes} blogData={blogData} />
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
                      objectFit="cover"
                      layout="fill"
                      borderRadius="20px"
                      boxSize="130px"
                    />
                  </div>
                  <div className={classes.btmcrdlink}>
                    <Link href={`/burcdetay/${data.id}`}>
                      <a>{data.name}</a>
                    </Link>
                  </div>
                </div>
              ))}
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
              {blogData.map((data, index) => (
                <SwiperSlide key={index}>
                  <SwiperCards classes={classes} blogData={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const blogRes = await fetch(process.env.NEXT_APP_API_URL + `/blog/all`, {
    method: "GET",
  });

  const blogData = await blogRes.json();
  const falRes = await fetch(process.env.NEXT_APP_API_URL + `/category/all`, {
    method: "GET",
  });

  const falData = await falRes.json();

  const horoscopeRes = await fetch(
    process.env.NEXT_APP_API_URL + `/horoscope/all`,
    {
      method: "GET",
    }
  );

  const horoscopeData = await horoscopeRes.json();

  if (!blogData || !horoscopeData || !falData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blogData: blogData.data,
      falData: falData.data,
      horoscopeData: horoscopeData.data,
    },
  };
}
