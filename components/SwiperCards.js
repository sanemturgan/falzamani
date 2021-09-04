import React from "react";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
//import Image from "next/image";
import Kova from "../public/img/kova.png";
import classes from "../styles/SwiperCards.module.css";
export default function MiniCategoryMenu({ blogData, classes }) {
  return (
    <div className={classes.altcrd}>
      <div className={classes.altimg}>
        <Image
          src={blogData.image}
          alt="dty"
          objectFit="cover"
          layout="fill"
          borderRadius="24px"
          htmlWidth="200px"
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
