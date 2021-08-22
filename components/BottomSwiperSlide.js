import React from "react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

export default function BottomSwiperSlide({ blogData, classes }) {
  return (
    blogData.length > 0 &&
    blogData.map((data, index) => (
      <SwiperSlide key={index}>
        <div className={classes.altexp}>
          <Link href={`/blog/${data.id}`}>
            <a>{data.title}</a>
          </Link>
        </div>
      </SwiperSlide>
    ))
  );
}
