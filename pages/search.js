import React, { useEffect, useState } from "react";
import classes from "../styles/search.module.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Link from "next/link";
export default function Search() {
  const [searchData, setSearchData] = useState([]);
  const getSearch = async (e) => {
    setSearchData(JSON.parse(localStorage.getItem("searchData")));
  };

  useEffect(() => {
    getSearch();
  }, []);
  return (
    <div className="search">
      <div className={classes.kariyerhdr}>
        <h4>ARAMA SONUÇLARI</h4>
      </div>
      <div className={classes.searchmain}>
        <h4>Arama Sonuçları</h4>
        <h5>Blog Arama Sonuçları</h5>
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
        <h5>İlan Arama Sonuçları</h5>
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
        <h5>Burç Arama Sonuçları</h5>
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
        <h5>Danışman Arama Sonuçları</h5>
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
      </div>
    </div>
  );
}
