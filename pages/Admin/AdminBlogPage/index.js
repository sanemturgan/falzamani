import React, { useState } from "react";
import classes from "../../../styles/adminblog.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  ButtonGroup,
  InputGroup,
  InputRightElement,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import Link from "next/dist/client/link";
import { FaFileExport } from "react-icons/fa";
import Cookies from "universal-cookie/es6";
import axios from "axios";
export default function Adminblog() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const cookies = new Cookies();
  const onSubmit = async (e) => {
    e.preventDefault();
    let blogObject = {
      title,
      description,
      image: img,
    };
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + `/admin`, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
    // await axios.post(
    //   process.env.REACT_APP_CLIENT_API_URL + `/blog`,
    //   blogObject
    // );
  };
  return (
    <div className="adminblog">
      <div className={classes.kariyerhdr}>
        <h4>BLOG DÜZENLEME</h4>
      </div>
      <div className={classes.blogadmin}>
        <div className={classes.blogform}>
          <form onSubmit={onSubmit} id="blogform">
            <FormControl isRequired id="blogtitle">
              <FormLabel color="#fff" mb="16px" fontSize="18px">
                Blog Başlık
              </FormLabel>
              <Input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                placeholder="başlık"
                color="#fff"
                size="lg"
              />
            </FormControl>
            <FormControl isRequired id="blogimg">
              <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
                Blog Fotoğraf
              </FormLabel>
              <Input
                onChange={(e) => {
                  setImg(e.target.value);
                }}
                value={img}
                placeholder="fotoğraf"
                color="#fff"
                size="lg"
              />
            </FormControl>
            <div className={classes.export}>
              <p>dosya ekleyin</p>
              <Button colorScheme="#402759">
                <FaFileExport color="#ECDCF5" size="16px" />
              </Button>
            </div>
            <FormControl isRequired id="blogdescription">
              <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
                Blog Detay
              </FormLabel>
              <Textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                placeholder="detay"
                color="#fff"
                size="lg"
              />
            </FormControl>
            <div className={classes.gonder}>
              <button type="submit" className={classes.gnd}>
                Ekle
              </button>
            </div>
          </form>
        </div>
        <div className={classes.bloglist}>
          <ul>
            <li className={classes.listli}>
              <div className={classes.bloginfo}>
                Kova Burcu Haftalık Burç Yorumu
              </div>
              <div className={classes.infoedit}>
                <ul>
                  <li>
                    <Link href="/editblog">
                      <a>Düzenle</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/deleteblog">
                      <a>Kaldır</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={classes.listli}>
              <div className={classes.bloginfo}>
                Kova Burcu Haftalık Burç Yorumu
              </div>
              <div className={classes.infoedit}>
                <ul>
                  <li>
                    <Link href="/editblog">
                      <a>Düzenle</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/deleteblog">
                      <a>Kaldır</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={classes.listli}>
              <div className={classes.bloginfo}>
                Kova Burcu Haftalık Burç Yorumu
              </div>
              <div className={classes.infoedit}>
                <ul>
                  <li>
                    <Link href="/editblog">
                      <a>Düzenle</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/deleteblog">
                      <a>Kaldır</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={classes.listli}>
              <div className={classes.bloginfo}>
                Kova Burcu Haftalık Burç Yorumu
              </div>
              <div className={classes.infoedit}>
                <ul>
                  <li>
                    <Link href="/editblog">
                      <a>Düzenle</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/deleteblog">
                      <a>Kaldır</a>
                    </Link>
                  </li>
                </ul>
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
                <a>Danışmanlar</a>
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
