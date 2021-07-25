import React from "react";
import classes from "../styles/uyegiris.module.css";
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
} from "@chakra-ui/react";

function UYEGIRIS() {
  return (
    <div className="uyegiris">
      <div className={classes.kariyerhdr}>
        <h4>ÜYE GİRİŞİ</h4>
      </div>
      <div className={classes.formkariyer}>
        <FormControl id="form">
          <FormLabel color="#fff" mb="16px" fontSize="18px">
            Kullanıcı Adı
          </FormLabel>
          <Input placeholder="Kullanıcı Adı" size="lg" />
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Şifre
          </FormLabel>
          <Input
            pr="4.5rem"
            mb="16px"
            type="password"
            size="lg"
            placeholder="Şifre"
          />
        </FormControl>

        <div className={classes.gonder}>
          <button className={classes.gnd}>Giriş Yap</button>
        </div>
      </div>
    </div>
  );
}

export default UYEGIRIS;
