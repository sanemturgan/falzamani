import React from "react";
import Link from "next/link";

export default function BottomSwiperSlide({ blogData, classes }) {
  return (
    <div className={classes.altswp}>
      {blogData.length > 0 &&
        blogData.map((data, index) => (
          <div key={index} className={classes.altexp}>
            <Link href={`/blog/${data.id}`}>
              <a>{data.title}</a>
            </Link>
          </div>
        ))}
    </div>
  );
}
