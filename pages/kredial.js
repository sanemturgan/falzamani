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
          <h3>500 Kredi</h3>
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>50 TL</h4>
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
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>50 TL</h4>
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
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>50 TL</h4>
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
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>50 TL</h4>
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
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>50 TL</h4>
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
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>50 TL</h4>
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
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>50 TL</h4>
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
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>50 TL</h4>
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
