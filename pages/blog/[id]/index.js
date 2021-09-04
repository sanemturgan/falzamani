import React from "react";
import classes from "../../../styles/blogdetay.module.css";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Writer from "../../../public/img/writer.png";
import Geyik from "../../../public/img/geyik.png";
import { Image } from "@chakra-ui/react";
//import Image from "next/image";
import Link from "next/link";
import SwiperCards from "../../../components/SwiperCards";
import { Swiper, SwiperSlide } from "swiper/react";

import MiniCategoryMenu from "../../../components/MiniCategoryMenu";
import MiniCategorySecondMenu from "../../../components/MiniCategorySecondMenu";

export default function blogdetay({
  blogSingleData,
  falData,
  blogData,
  adminData,
}) {
  return (
    <div className="blogdetay">
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
        <h4>{blogSingleData.title}</h4>
      </div>
      <div className={classes.blogdtymain}>
        <div className={classes.blgdtyust}>
          <div className={classes.blgdtyrght}>
            <div className={classes.blogcard}>
              <div className={classes.blgcrdimg}>
                <Image
                  src={blogSingleData.image}
                  alt="dty"
                  objectFit="cover"
                  layout="fill"
                  borderRadius="40px"
                  htmlWidth="600px"
                />
              </div>
              <div className={classes.altexphdr}>
                <h5>{blogSingleData.title}</h5>
              </div>
              <div className={classes.blgcrdexp}>
                <p>{blogSingleData.description}</p>
              </div>
              <div className={classes.writer}>
                <div className={classes.wrtimg}>
                  <Image
                    src={adminData.image}
                    alt="dty"
                    objectFit="cover"
                    layout="fill"
                    borderRadius="full"
                    boxSize="100px"
                  />
                </div>
                <div className={classes.wrtexp}>
                  <h4>{adminData.name}</h4>
                  <p>{adminData.about}</p>
                </div>
              </div>
            </div>
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

export async function getServerSideProps(context) {
  const paramsData = await context.query;
  const res = await fetch(
    process.env.NEXT_APP_API_URL + `/blog/${paramsData.id}`,
    {
      method: "GET",
    }
  );
  const blogSingleData = await res.json();

  const blogRes = await fetch(process.env.NEXT_APP_API_URL + `/blog/all`, {
    method: "GET",
  });
  const blogData = await blogRes.json();

  const falRes = await fetch(process.env.NEXT_APP_API_URL + `/category/all`, {
    method: "GET",
  });
  const falData = await falRes.json();

  const adminres = await fetch(
    process.env.NEXT_APP_API_URL + `/admin/${blogSingleData.data.adminId}`,
    {
      method: "GET",
    }
  );
  const adminData = await adminres.json();

  if (!blogSingleData || !falData || !adminData || !blogData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blogSingleData: blogSingleData.data,
      falData: falData.data,
      blogData: blogData.data,
      adminData: adminData.data,
    },
  };
}
