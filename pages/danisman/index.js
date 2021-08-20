import React from "react";
import classes from "../../styles/danisman.module.css";
import CardImg from "../../public/img/falcard.png";
import Image from "next/image";
import Link from "next/link";
function danisman() {
  return (
    <div className="danisman">
      <div className={classes.kariyerhdr}>
        <h4>DANIŞMAN PROFİLLERİ</h4>
      </div>
      <div className={classes.danismanmain}>
        <div className={classes.danismanlist}>
          <ul>
            <li className={classes.danismanlistmain}>
              <div className={classes.listtop}>
                <div className={classes.danismanlistimg}>
                  <Image src={CardImg} alt="teller" />
                </div>
                <div classes={classes.danismanlistinfo}>
                  <h4>Luna</h4>
                  <h6>aaaaa111@1235.com</h6>
                  <h6>0555-555-55-55</h6>
                </div>
                <div className={classes.danismanlistdate}>
                  <p> Üyelik Tarihi :24.01.2021</p>
                </div>
              </div>
              {/* <div className={classes.danismanlistbtm}>
                <div className={classes.btmhdr}>
                  <h5>Fal Geçmişi</h5>
                </div>
                <div className={classes.btminfo}>
                  <ul>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className={classes.blockButton}>
                <button mt="16px" type="send" className={classes.block}>
                  Üyeyi Engelle/Sil
                </button>
              </div>
            </li>
            <li className={classes.danismanlistmain}>
              <div className={classes.listtop}>
                <div className={classes.danismanlistimg}>
                  <Image src={CardImg} alt="teller" />
                </div>
                <div classes={classes.danismanlistinfo}>
                  <h4>Luna</h4>
                  <h6>aaaaa111@1235.com</h6>
                  <h6>0555-555-55-55</h6>
                </div>
                <div className={classes.danismanlistdate}>
                  <p> Üyelik Tarihi :24.01.2021</p>
                </div>
              </div>
              {/* <div className={classes.danismanlistbtm}>
                <div className={classes.btmhdr}>
                  <h5>Fal Geçmişi</h5>
                </div>
                <div className={classes.btminfo}>
                  <ul>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className={classes.blockButton}>
                <button mt="16px" type="send" className={classes.block}>
                  Üyeyi Engelle/Sil
                </button>
              </div>
            </li>
            <li className={classes.danismanlistmain}>
              <div className={classes.listtop}>
                <div className={classes.danismanlistimg}>
                  <Image src={CardImg} alt="teller" />
                </div>
                <div classes={classes.danismanlistinfo}>
                  <h4>Luna</h4>
                  <h6>aaaaa111@1235.com</h6>
                  <h6>0555-555-55-55</h6>
                </div>
                <div className={classes.danismanlistdate}>
                  <p> Üyelik Tarihi :24.01.2021</p>
                </div>
              </div>
              {/* <div className={classes.danismanlistbtm}>
                <div className={classes.btmhdr}>
                  <h5>Fal Geçmişi</h5>
                </div>
                <div className={classes.btminfo}>
                  <ul>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className={classes.blockButton}>
                <button mt="16px" type="send" className={classes.block}>
                  Üyeyi Engelle/Sil
                </button>
              </div>
            </li>
            <li className={classes.danismanlistmain}>
              <div className={classes.listtop}>
                <div className={classes.danismanlistimg}>
                  <Image src={CardImg} alt="teller" />
                </div>
                <div classes={classes.danismanlistinfo}>
                  <h4>Luna</h4>
                  <h6>aaaaa111@1235.com</h6>
                  <h6>0555-555-55-55</h6>
                </div>
                <div className={classes.danismanlistdate}>
                  <p> Üyelik Tarihi :24.01.2021</p>
                </div>
              </div>
              {/* <div className={classes.danismanlistbtm}>
                <div className={classes.btmhdr}>
                  <h5>Fal Geçmişi</h5>
                </div>
                <div className={classes.btminfo}>
                  <ul>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className={classes.blockButton}>
                <button mt="16px" type="send" className={classes.block}>
                  Üyeyi Engelle/Sil
                </button>
              </div>
            </li>
            <li className={classes.danismanlistmain}>
              <div className={classes.listtop}>
                <div className={classes.danismanlistimg}>
                  <Image src={CardImg} alt="teller" />
                </div>
                <div classes={classes.danismanlistinfo}>
                  <h4>Luna</h4>
                  <h6>aaaaa111@1235.com</h6>
                  <h6>0555-555-55-55</h6>
                </div>
                <div className={classes.danismanlistdate}>
                  <p> Üyelik Tarihi :24.01.2021</p>
                </div>
              </div>
              {/* <div className={classes.danismanlistbtm}>
                <div className={classes.btmhdr}>
                  <h5>Fal Geçmişi</h5>
                </div>
                <div className={classes.btminfo}>
                  <ul>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className={classes.btminfolist}>
                      <div className={classes.infofal}>
                        <h6>Kahve Falı</h6>
                      </div>
                      <div className={classes.payanddetails}>
                        <p>650 Kredi Ödendi</p>
                        <Link href="/detay">
                          <a>
                            <button className={classes.infodetail}>
                              Detay Oku
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className={classes.blockButton}>
                <button mt="16px" type="send" className={classes.block}>
                  Üyeyi Engelle/Sil
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.flt}>
              <Link href="/adminpage">
                <a>Hesabım</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/danisman">
                <a>Blog Düzenle</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/adminkredi">
                <a>Kredi Düzenle</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default danisman;
