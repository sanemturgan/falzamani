import React from "react";
import classes from "../styles/falturleri.module.css";
import { Input } from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
} from "react-icons/fa";
import CardImg from "../public/img/falcard.png";
import Image from "next/image";
import Link from "next/link";
function falturleri() {
  return (
    <div className="falturleri">
      <div className={classes.faltrhdr}>
        <h4>FAL TÜRLERİ</h4>
      </div>
      <div className={classes.search}>
        <div className={classes.srchi}>
          <Link href="/">
            <a>
              <FaSearch color="#281c3b" size="16px" />
            </a>
          </Link>
        </div>
        <Input variant="unstyled" placeholder="Ara" />
      </div>
      <div className={classes.falmain}>
        <div className={classes.faltur}>
          <div className={classes.falturhdr}>
            <h3>Kahve Falı</h3>
            <p>
              Canlı ve online Kahve Falına mı baktırmak istiyorsun? İçtiğin
              kahvenin telvesinin fotoğrafını, gerçek kahve falı yorumcularımıza
              mesaj ile atın, falın sana gelsin! Falcılarımızdan birini seç ve
              telefonda canlı kahve falı baktırmak için Fal Baktıra tıkla!
            </p>
          </div>
          <div className={classes.cardMain}>
            <div className={classes.card}>
              <div className={classes.cardimg}>
                <Image src={CardImg} alt="teller" />
              </div>
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="20px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="20px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <Link href="/uzmandetay">
                  <a>
                    <button className={classes.cardgiris}>Fal Baktır</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardimg}>
                <Image src={CardImg} alt="teller" />
              </div>
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="20px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="20px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <Link href="/uzmandetay">
                  <a>
                    <button className={classes.cardgiris}>Fal Baktır</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardimg}>
                <Image src={CardImg} alt="teller" />
              </div>
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="20px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="20px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <Link href="/uzmandetay">
                  <a>
                    <button className={classes.cardgiris}>Fal Baktır</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardimg}>
                <Image src={CardImg} alt="teller" />
              </div>
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="20px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="20px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <Link href="/uzmandetay">
                  <a>
                    <button className={classes.cardgiris}>Fal Baktır</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardimg}>
                <Image src={CardImg} alt="teller" />
              </div>
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="20px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="20px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <Link href="/uzmandetay">
                  <a>
                    <button className={classes.cardgiris}>Fal Baktır</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardimg}>
                <Image src={CardImg} alt="teller" />
              </div>
              <h5>Luna</h5>
              <div className={classes.star}>
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
                <FaStar color="#ECDCF5" size="14px" />
              </div>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım
              </p>
              <div className={classes.crdi}>
                <div className={classes.cardicon}>
                  <FaPhoneAlt color="#ECDCF5" size="20px" />
                </div>
                <div className={classes.cardicon}>
                  <FaEnvelope color="#ECDCF5" size="20px" />
                </div>
              </div>
              <div className={classes.cardbtn}>
                <Link href="/uzmandetay">
                  <a>
                    <button className={classes.cardgiris}>Fal Baktır</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.more}>
            <Link href="/more">
              <a>
                {" "}
                <FaSortDown color="#ECDCF5" size="30px" />
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Kahve Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Tarot Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Su Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Katina Aşk Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>İskambil Falı</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>DuruGörü</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Yıldızname</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Venüs Burcu</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/falturleri">
                <a>Mars Burcu</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default falturleri;
