import React from "react";
import classes from "../styles/search.module.css";
export default function Search() {
  return (
    <div className="search">
      <div className={classes.kariyerhdr}>
        <h4>ARAMA SONUÇLARI</h4>
      </div>
      <div className={classes.searchmain}>
        <h4>Arama Sonuçları</h4>
        <div className={classes.searchfilter}>
          <p>.......... için arama sonuçları :</p>
        </div>
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
