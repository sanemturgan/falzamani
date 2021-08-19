import React, { useState } from "react";
import classes from "../../../styles/adminkredi.module.css";
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

export default function Adminkredi() {
  const [creditamount, setCreditAmount] = useState("");
  const [creditprice, setCreditPrice] = useState("");
  const [creditdescp, setCreditdescp] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      creditamount,
      creditprice,
      creditdescp,
    };
    await axios.post(
      process.env.REACT_APP_CLIENT_API_URL + `/customer/register`,
      userObject
    );
  };
  return (
    <div className="adminkredi">
      <div className={classes.kariyerhdr}>
        <h4>KREDİ DÜZENLEME</h4>
      </div>
      <div className={classes.blogadmin}>
        <div className={classes.blogform}>
          <form id="krediform">
            <FormControl isRequired id="creditamount">
              <FormLabel color="#fff" mb="16px" fontSize="18px">
                Kredi Miktarı Giriniz
              </FormLabel>
              <Input
                onChange={(e) => {
                  setCreditAmount(e.target.value);
                }}
                value={creditamount}
                placeholder="miktar"
                color="#fff"
                size="lg"
              />
            </FormControl>
            <FormControl isRequired id="creditprice">
              <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
                Kredi Fiyatını Belirleyiniz
              </FormLabel>
              <Input
                onChange={(e) => {
                  setCreditPrice(e.target.value);
                }}
                value={creditprice}
                placeholder="fiyat"
                color="#fff"
                size="lg"
              />
            </FormControl>
            <FormControl isRequired id="creditprice">
              <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
                Açıklama Ekleyiniz
              </FormLabel>
              <Textarea
                onChange={(e) => {
                  setCreditdescp(e.target.value);
                }}
                value={creditdescp}
                placeholder="açıklama"
                color="#fff"
                size="lg"
              />
            </FormControl>
            <div className={classes.gonder}>
              <Link href="/Gonder">
                <a>
                  <button onClick={onSubmit} className={classes.gnd}>
                    Gönder
                  </button>
                </a>
              </Link>
            </div>
          </form>
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
