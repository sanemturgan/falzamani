import React, { useState, useEffect } from "react";
import classes from "../../styles/danisman.module.css";
import CardImg from "../../public/img/falcard.png";
import { Image, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";
import { FaUserAlt } from "react-icons/fa";
import FileBase64 from "react-file-base64";
function AdminDanisman() {
  const cookies = new Cookies();
  const [warlock, setWarlock] = useState([]);
  const adminWarlock = async () => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + `/warlock/all`, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        setWarlock(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!cookies.get("jwt")) {
      router.replace("/adminlogin");
    }
    adminWarlock();
  }, []);

  const getFiles = (files) => {
    setFiles(files);
    axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + "/warlock/image",
        { image: files.base64 },
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      )

      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data.error));
  };
  console.log(warlock);

  return (
    <div className="danisman">
      <div className={classes.kariyerhdr}>
        <h4>DANIŞMAN PROFİLLERİ</h4>
      </div>
      <div className={classes.danismanmain}>
        <div className={classes.danismanlist}>
          <div className={classes.cardMain}>
            {warlock.length > 0 &&
              warlock.map((data, index) => {
                return (
                  <div key={index} className={classes.card}>
                    <div className={classes.cardimg}>
                      {data.image ? (
                        <Image
                          src={data.image}
                          alt="dty"
                          objectFit="contain"
                          layout="fill"
                          borderRadius="full"
                          boxSize="100px"
                        />
                      ) : (
                        <FaUserAlt fontSize="90px" color="lightgray" />
                      )}
                    </div>
                    <h5>{data.name}</h5>
                    <h6 className={classes.status}>{data.status}</h6>

                    <p>{data.about}</p>
                    <div className={classes.crdi}>
                      <div className={classes.cardicon}>
                        <Link href={`/uzmanlar/${data.id}`}>
                          <a></a>
                        </Link>
                      </div>
                      <div className={classes.cardicon}>
                        <Link href={`/uzmanlar/${data.id}`}>
                          <a></a>
                        </Link>
                      </div>
                    </div>
                    <div className={classes.cardbtn}>
                      <Link href={`/uzmanlar/${data.id}`}>
                        <a>
                          <button className={classes.cardgiris}>
                            Detay Görüntüle
                          </button>
                        </a>
                      </Link>
                    </div>
                    <div className={classes.cardbtn}>
                      <button className={classes.deleteWarlock}>
                        Üyeyi Sil
                      </button>
                    </div>
                    <div className={classes.cardbtn}>
                      <RadioGroup defaultValue="1">
                        <Stack spacing={1} color="white">
                          <Radio value="1" isDisabled size="sm">
                            Onay Bekliyor
                          </Radio>
                          <Radio value="2" size="sm">
                            Onayla
                          </Radio>
                          <Radio value="3" size="sm">
                            Reddet
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </div>
                  </div>
                );
              })}
          </div>
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
export default withAdmin(AdminDanisman);
