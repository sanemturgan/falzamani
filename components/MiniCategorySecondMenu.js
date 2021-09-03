import React from "react";
import Link from "next/link";

export default function MiniCategorySecondMenu({ blogData, classes }) {
  return (
    <ul className={classes.altct}>
      {blogData.length > 0 &&
        blogData.map((data, index) => (
          <li key={index} className={classes.altli}>
            <Link href={`/blog/${data.id}`}>
              <a>{data.title}</a>
            </Link>
            <Link href={`/blog/${data.id}`}>
              <a>{data.description}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
}
