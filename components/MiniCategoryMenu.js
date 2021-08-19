import React from "react";
import Link from "next/link";
export default function MiniCategoryMenu({ falData, classes }) {
  return (
    <ul className={classes.catalog}>
      {falData.length > 0 &&
        falData.map((data, index) => (
          <li key={index} className={classes.flt}>
            <Link href="/blog">
              <a>{data.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
}
