import React from "react";
import Link from "next/link";
import classes from "../styles/MiniCategoryMenu.module.css";
export default function MiniCategoryMenu({ falData, classes }) {
  return (
    <ul className={classes.catalog}>
      {falData.length > 0 &&
        falData.map((data, index) => (
          <li key={index} className={classes.flt}>
            <Link href={`/falturleri/${data.id}`}>
              <a>{data.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
}
