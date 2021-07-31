import React from "react";
import classes from "../styles/adminlogin.module.css";
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

function ADMINLOGIN() {
  return (
    <div className="adminlogin">
      <div className={classes.kariyerhdr}>
        <h4>Admin Giriş</h4>
      </div>
      <div className={classes.admin}>
        <div className={classes.formkariyer}>
          <FormControl id="formadmin">
            <FormLabel color="#fff" mb="16px" fontSize="18px">
              Kullanıcı Adı
            </FormLabel>
            <Input placeholder="Kullanıcı Adı" size="lg" color="white" />
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Email
            </FormLabel>
            <Input type="E-mail" size="lg" color="white" />
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Şifre
            </FormLabel>
            <Input
              pr="4.5rem"
              mb="16px"
              type="password"
              size="lg"
              placeholder="Şifre"
              color="white"
            />
            <Checkbox defaultIsChecked color="white" s>
              Beni Hatırla
            </Checkbox>
          </FormControl>

          <div className={classes.gonder}>
            <button className={classes.gnd}>Giriş Yap</button>
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
              <Link href="/adminblog">
                <a>Blog Düzenle</a>
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

export default ADMINLOGIN;
