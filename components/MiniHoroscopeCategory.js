import React from "react";
import Link from "next/link";

export default function MiniHoroscopeCategory({ horoscopeData, classes }) {
  return (
    <ul className={classes.catalog}>
      {horoscopeData.length > 0 &&
        horoscopeData.map((data, index) => (
          <li key={index} className={classes.flt}>
            <Link href={`/burcdetay/${data.id}`}>
              <a>{data.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
}
