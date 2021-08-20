import React from "react";
import classes from "../../../styles/blogdetay.module.css";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Writer from "../../../public/img/writer.png";
import Geyik from "../../../public/img/geyik.png";
import Kova from "../../../public/img/kova.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import MiniCategoryMenu from "../../../components/MiniCategoryMenu";
import MiniCategorySecondMenu from "../../../components/MiniCategorySecondMenu";
import BottomSwiperSlide from "../../../components/BottomSwiperSlide";
export default function blogdetay({ blogSingleData, falData, blogData }) {
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
        <h4>Kahve Falında Geyik Görmek</h4>
      </div>
      <div className={classes.blogdtymain}>
        <div className={classes.blgdtyust}>
          <div className={classes.blgdtyrght}>
            <div className={classes.blogcard}>
              <div className={classes.blgcrdimg}>
                <Image
                  src={Geyik}
                  alt="dty"
                  objectFit="contain"
                  layout="fill"
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
                    src={Writer}
                    alt="dty"
                    objectFit="contain"
                    layout="fill"
                  />
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
                  <BottomSwiperSlide classes={classes} blogData={blogData} />
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
                  <BottomSwiperSlide classes={classes} blogData={blogData} />
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
                  <BottomSwiperSlide classes={classes} blogData={blogData} />
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
                  <BottomSwiperSlide classes={classes} blogData={blogData} />
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
                  <BottomSwiperSlide classes={classes} blogData={blogData} />
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
                  <BottomSwiperSlide classes={classes} blogData={blogData} />
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
                  <BottomSwiperSlide classes={classes} blogData={blogData} />
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
                  <BottomSwiperSlide classes={classes} blogData={blogData} />
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
  const paramsData = await context.query;
  const res = await fetch(
    process.env.NEXT_APP_API_URL + `/blog/${paramsData.id}`,
    {
      method: "GET",
    }
  );
  const blogRes = await fetch(process.env.NEXT_APP_API_URL + `/blog/all`, {
    method: "GET",
  });
  const blogData = await blogRes.json();
  const falRes = await fetch(process.env.NEXT_APP_API_URL + `/category/all`, {
    method: "GET",
  });

  const falData = await falRes.json();
  const blogSingleData = await res.json();

  if (!blogSingleData || !falData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blogSingleData: blogSingleData.data,
      falData: falData.data,
      blogData: blogData.data,
    },
  };
}
