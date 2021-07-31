import React from "react";
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

function adminblog() {
  return (
    <div className="adminblog">
      <div className={classes.kariyerhdr}>
        <h4>BLOG DÜZENLEME</h4>
      </div>
      <div className={classes.blogadmin}>
        <div className={classes.blogform}>
          <FormControl id="blogform">
            <FormLabel color="#fff" mb="16px" fontSize="18px">
              Blog Başlık
            </FormLabel>
            <Input placeholder="Blog Başlığı" size="lg" color="white" />
            <FormLabel color="#fff" mb="16px" fontSize="18px">
              Blog Fotoğraf
            </FormLabel>
            <Input
              placeholder="Blog Fotoğrafı Ekleyiniz "
              size="lg"
              color="white"
            />
            <div className={classes.export}>
              <p>dosya ekleyin</p>
              <Button colorScheme="#402759">
                <FaFileExport color="#ECDCF5" size="16px" />
              </Button>
            </div>
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Blog Detay
            </FormLabel>
            <Textarea size="lg" color="white" />
          </FormControl>
          <div className={classes.gonder}>
            <Link href="/Gonder">
              <a>
                <button className={classes.gnd}>Gönder</button>
              </a>
            </Link>
          </div>
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

export default adminblog;
