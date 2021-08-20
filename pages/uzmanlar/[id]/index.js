import React from "react";
import classes from "../../../styles/uzmandetay.module.css";
import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
} from "react-icons/fa";
import CardImg from "../../../public/img/falcard.png";
import Image from "next/image";
import Link from "next/link";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";

export default function uzmandetay() {
  return (
    <div className="uzmanDetay">
      <div className={classes.uzmanhdr}>
        <h4>UZMANLAR</h4>
        <p>
          Aklınızda sorulara tecrübesiyle kişiselleştirilmiş cevap bulmanızı
          sağlayacak uzmanı seç.
        </p>
      </div>
      <div className={classes.uzmangenel}>
        <div className={classes.uzmantop}>
          <div className={classes.ustbir}>
            <div className={classes.cardimg}>
              <Image
                src={CardImg}
                alt="teller"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <h5>Luna</h5>
            <h6 className={classes.online}>(ÇEVRİM İÇİ)</h6>
            <h6 className={classes.offline}>(ÇEVRİM DIŞI)</h6>
            <h6 className={classes.notavailable}>(MEŞGUL)</h6>
            <div className={classes.star}>
              <FaStar color="#ECDCF5" size="14px" />
              <p>5/5</p>
            </div>
            <div className={classes.cardbtn}>
              <Link href="/odeme">
                <a>
                  <button className={classes.uzmrandevu}>Randevu Al</button>
                </a>
              </Link>
              {/* <Link href="/etkilesim">
                <a>
                  <button className={classes.etkilesim}>Hızlı Etkileşim</button>
                </a>
              </Link> */}
            </div>
            <div className={classes.onlinebtn}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="alerts" mb="0" fontSize="14px">
                  Online Olduğunda Bildir
                </FormLabel>
                <Switch size="lg" id="alerts" />
              </FormControl>
            </div>
            <div className={classes.cesit}>
              <Link href="/falturleri">
                <a>Kahve Falı</a>
              </Link>
              <Link href="/falturleri">
                <a>El Falı</a>
              </Link>
              <Link href="/falturleri">
                <a>Katina Aşk Falı</a>
              </Link>
              <Link href="/falturleri">
                <a>Su Falı</a>
              </Link>
              <Link href="/falturleri">
                <a>Tarot Falı</a>
              </Link>
            </div>
          </div>
          <div className={classes.ustiki}>
            <div className={classes.exp}>
              <p>
                20 yıldır yorumculuk yapıyorum. Doğuştan gelen psişik
                yeteneklere sahibim. Hislerimi sizler için kullanmaya hazırım.
                Benimle burada karşılaşman bir tesadüf değil. Meleklerin bizi
                buluşturma isteği. Aklındaki karanlık noktaları aydınlatayım
                istiyorsan hemen gelmelisin.
              </p>
            </div>
            <div className={classes.iletisim}>
              <div className={classes.cardicon}>
                <FaPhoneAlt color="#ECDCF5" size="20px" />
                <p>+955 155 55 55</p>
              </div>
              <div className={classes.cardicon}>
                <FaEnvelope color="#ECDCF5" size="20px" />
                <p>Yazılı Fal</p>
              </div>
            </div>
            <div className={classes.expbtm}>
              <p>
                Uzmanlarımıza, adınızı, burcunuzu, yaşınızı, mesleğinizi ve
                sormak istediğiniz soruları yazınız. Falınız size yazılı olarak
                gelsin!
              </p>
            </div>
            <div className={classes.fallar}>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={classes.faldty}>
                <h5>Kahve Falı</h5>
                <div className={classes.pay}>
                  <Link href="/odeme">
                    <a>
                      <button>650 Kredi</button>
                    </a>
                  </Link>
                  <Link href="/odeme">
                    <a>
                      <button className={classes.rnd}>Randevu Al</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.uzmanmid}>
          <div className={classes.options}>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Link href="/odeme">
                  <a>
                    <button className={classes.rnd}>Randevu Al</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Link href="/odeme">
                  <a>
                    <button className={classes.rnd}>Randevu Al</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Link href="/odeme">
                  <a>
                    <button className={classes.rnd}>Randevu Al</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Link href="/odeme">
                  <a>
                    <button className={classes.rnd}>Randevu Al</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Link href="/odeme">
                  <a>
                    <button className={classes.rnd}>Randevu Al</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Link href="/odeme">
                  <a>
                    <button className={classes.rnd}>Randevu Al</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Link href="/odeme">
                  <a>
                    <button className={classes.rnd}>Randevu Al</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Link href="/odeme">
                  <a>
                    <button className={classes.rnd}>Randevu Al</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.uzmanbtm}>
          <div className={classes.btmhdr}>
            <h4>FALCI YORUMLARI</h4>
          </div>
          <div className={classes.comments}>
            <div className={classes.comment}>
              <div className={classes.ctxt}>
                <p>
                  Sevgili Luna hanım. Her şey söylediğiniz gibi oldu. Müthiş
                  ötesi....
                </p>
              </div>
              <div className={classes.rote}>
                <div className={classes.rotestr}>
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                </div>
                <div className={classes.rtdate}>
                  <p>24.01.21</p>
                </div>
              </div>
            </div>
            <div className={classes.comment}>
              <div className={classes.ctxt}>
                <p>
                  Sevgili Luna hanım. Her şey söylediğiniz gibi oldu. Müthiş
                  ötesi....
                </p>
              </div>
              <div className={classes.rote}>
                <div className={classes.rotestr}>
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                </div>
                <div className={classes.rtdate}>
                  <p>24.01.21</p>
                </div>
              </div>
            </div>
            <div className={classes.comment}>
              <div className={classes.ctxt}>
                <p>
                  Sevgili Luna hanım. Her şey söylediğiniz gibi oldu. Müthiş
                  ötesi....
                </p>
              </div>
              <div className={classes.rote}>
                <div className={classes.rotestr}>
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                </div>
                <div className={classes.rtdate}>
                  <p>24.01.21</p>
                </div>
              </div>
            </div>
            <div className={classes.comment}>
              <div className={classes.ctxt}>
                <p>
                  Sevgili Luna hanım. Her şey söylediğiniz gibi oldu. Müthiş
                  ötesi....
                </p>
              </div>
              <div className={classes.rote}>
                <div className={classes.rotestr}>
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                </div>
                <div className={classes.rtdate}>
                  <p>24.01.21</p>
                </div>
              </div>
            </div>
            <div className={classes.comment}>
              <div className={classes.ctxt}>
                <p>
                  Sevgili Luna hanım. Her şey söylediğiniz gibi oldu. Müthiş
                  ötesi....
                </p>
              </div>
              <div className={classes.rote}>
                <div className={classes.rotestr}>
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                </div>
                <div className={classes.rtdate}>
                  <p>24.01.21</p>
                </div>
              </div>
            </div>
            <div className={classes.comment}>
              <div className={classes.ctxt}>
                <p>
                  Sevgili Luna hanım. Her şey söylediğiniz gibi oldu. Müthiş
                  ötesi....
                </p>
              </div>
              <div className={classes.rote}>
                <div className={classes.rotestr}>
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                  <FaStar color="#ECDCF5" size="14px" />
                </div>
                <div className={classes.rtdate}>
                  <p>24.01.21</p>
                </div>
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
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const paramsData = await context.query;
  const res = await fetch(
    process.env.NEXT_APP_API_URL + `/warlock/${paramsData.id}`,
    {
      method: "GET",
    }
  );

  const warlockSingleData = await res.json();

  console.log(warlockSingleData);
  if (!warlockSingleData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      warlockSingleData: warlockSingleData.data,
    },
  };
}
