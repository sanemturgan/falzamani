import React from "react";
import classes from "../styles/adminkredi.module.css";
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
    <div className="adminkredi">
      <div className={classes.kariyerhdr}>
        <h4>KREDİ DÜZENLEME</h4>
      </div>
      <div className={classes.blogadmin}>
        <div className={classes.blogform}>
          <FormControl id="krediform">
            <FormLabel color="#fff" mb="16px" fontSize="18px">
              Kredi Miktarı Giriniz
            </FormLabel>
            <Input size="lg" color="white" />
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Kredi Fiyatını Belirleyiniz
            </FormLabel>
            <Input size="lg" color="white" />

            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Açıklama Ekleyiniz
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
