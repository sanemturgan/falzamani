import React, { useState } from "react";
import classes from "../styles/adminblog.module.css";
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

export default function Adminblog() {
  const [blogtitleadmin, setBlogTitleAdmin] = useState("");
  const [blogimgadmin, setBlogImgAdmin] = useState("");
  const [blogdescpadmin, setBlogDescpAdmin] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      blogtitleadmin,
      blogimgadmin,
      blogdescpadmin,
    };
    await axios.post(
      process.env.REACT_APP_CLIENT_API_URL + `/customer/register`,
      userObject
    );
  };
  return (
    <div className="adminblog">
      <div className={classes.kariyerhdr}>
        <h4>BLOG DÜZENLEME</h4>
      </div>
      <div className={classes.blogadmin}>
        <div className={classes.blogform}>
          <form id="blogform">
            <FormControl isRequired id="blogtitle">
              <FormLabel color="#fff" mb="16px" fontSize="18px">
                Blog Başlık
              </FormLabel>
              <Input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={blogtitleadmin}
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
                  setUsername(e.target.value);
                }}
                value={blogimgadmin}
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
                  setUsername(e.target.value);
                }}
                value={blogdescpadmin}
                placeholder="detay"
                color="#fff"
                size="lg"
              />
            </FormControl>
            <div className={classes.gonder}>
              <button onClick={onSubmit} className={classes.gnd}>
                Giriş Yap
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
