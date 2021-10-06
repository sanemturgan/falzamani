import React from "react";
import classes from "../styles/kredial.module.css";
import Link from "next/link";

export default function Kredial() {
  return (
    <div className="kredial">
      <div className={classes.kredihdr}>
        <h4>KREDİ AL</h4>
      </div>
      <div className={classes.kredi}>
        <div className={classes.kredicar}>
          <h3>200 Kredi</h3>
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>20 TL</h4>
          <div className={classes.kredibtn}>
            <Link href="/odeme">
              <a>
                <button className={classes.cardbuy}>Satın Al</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>300 Kredi</h3>
          <p>
            Fal Zamanını denemeniz için yeni bir paket. Hemen canlı fal baktır!
          </p>
          <h4>30 TL</h4>
          <div className={classes.kredibtn}>
            <Link href="/odeme">
              <a>
                <button className={classes.cardbuy}>Satın Al</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>500 Kredi</h3>
          <p>3 yazılı Fal veya 16 dk telefonda canlı fal sizlerle !!</p>
          <h4>45 TL</h4>
          <div className={classes.kredibtn}>
            <Link href="/odeme">
              <a>
                <button className={classes.cardbuy}>Satın Al</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>1000 Kredi</h3>
          <h4>(Popüler Kredi)</h4>
          <p>6 yazılı fal veya 34 dk telefonda canlı fal sizlerle !!</p>
          <h4>85 TL</h4>
          <div className={classes.kredibtn}>
            <Link href="/odeme">
              <a>
                <button className={classes.cardbuy}>Satın Al</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>1500 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>125 TL</h4>
          <div className={classes.kredibtn}>
            <Link href="/odeme">
              <a>
                <button className={classes.cardbuy}>Satın Al</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>2000 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>160 TL</h4>
          <div className={classes.kredibtn}>
            <Link href="/odeme">
              <a>
                <button className={classes.cardbuy}>Satın Al</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>3000 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>225 TL</h4>
          <div className={classes.kredibtn}>
            <Link href="/odeme">
              <a>
                <button className={classes.cardbuy}>Satın Al</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>10.000 Kredi</h3>
          <p>Fal Zamanını Premium paketlerinden biri. Doya doya fal baktır!</p>
          <h4>700 TL</h4>
          <div className={classes.kredibtn}>
            <Link href="/odeme">
              <a>
                <button className={classes.cardbuy}>Satın Al</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
