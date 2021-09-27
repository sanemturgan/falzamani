import React, { useEffect, useState } from "react";
import classes from "../styles/search.module.css";
import axios from "axios";

import Link from "next/link";
export default function Search() {
  const [searchData, setSearchData] = useState([]);
  const getSearch = async (e) => {
    setSearchData(JSON.parse(localStorage.getItem("searchData")));
  };

  useEffect(() => {
    getSearch();
  }, []);
  console.log(JSON.parse(localStorage.getItem("searchData")).warlocks);
  return (
    <div className="search">
      <div className={classes.kariyerhdr}>
        <h4>ARAMA SONUÇLARI</h4>
      </div>
      <div className={classes.searchmain}>
        <h4>Arama Sonuçları</h4>
        {searchData.blogs &&
          searchData?.blogs.length > 0 &&
          searchData.blogs.map((data, index) => {
            return (
              <div className={classes.searchfilter} key={index}>
                <Link href={data.link}>
                  <a>
                    <p>{data.title}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        {searchData.gigs &&
          searchData?.gigs.length > 0 &&
          searchData.gigs.map((data, index) => {
            return (
              <div className={classes.searchfilter} key={index}>
                <Link href={data.link}>
                  <a>
                    <p>{data.title}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        {searchData.horoscopes &&
          searchData?.horoscopes.length > 0 &&
          searchData.horoscopes.map((data, index) => {
            return (
              <div className={classes.searchfilter} key={index}>
                <Link href={data.link}>
                  <a>
                    <p>{data.name}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        {searchData.warlocks &&
          searchData?.warlocks.length > 0 &&
          searchData.warlocks.map((data, index) => {
            return (
              <div className={classes.searchfilter} key={index}>
                <Link href={data.link}>
                  <a>
                    <p>{data.username}</p>
                  </a>
                </Link>
              </div>
            );
          })}

        <div className={classes.searchlist}>
          <ul>
            <li>
              <p>.......... için arama sonuçları</p>
            </li>
            <li>
              <p>.......... için arama sonuçları</p>
            </li>
            <li>
              <p>.......... için arama sonuçları</p>
            </li>
            <li>
              <p>.......... için arama sonuçları</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
