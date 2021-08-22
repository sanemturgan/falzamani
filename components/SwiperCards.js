import React from "react";
import Link from "next/link";
import Image from "next/image";
import Kova from "../public/img/kova.png";
import classes from "../styles/SwiperCards.module.css";
export default function MiniCategoryMenu({ blogData, classes }) {
  return (
    <div className={classes.altcrd}>
      <div className={classes.altimg}>
        <Image
          src={Kova}
          // src={data.image}
          alt="dty"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className={classes.altexp}>
        <Link href={`/blog/${blogData.id}`}>
          <a>{blogData.title}</a>
        </Link>
      </div>
    </div>
  );
}
