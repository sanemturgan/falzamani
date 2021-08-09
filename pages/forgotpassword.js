import React from "react";
import classes from "../styles/forgotpassword.module.css";
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
import Link from "next/link";
function SIFREMIUNUTTUM() {
  return (
    <div className="fpassword">
      <div className={classes.kariyerhdr}>
        <h4>ŞİFREMİ UNUTTUM</h4>
      </div>
      <div className={classes.formkariyer}>
        <FormControl id="form">
          <FormLabel color="#fff" mb="16px" fontSize="18px">
            Kullanıcı Adı
          </FormLabel>
          <Input placeholder="Kullanıcı Adı" size="lg" color="white" />
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Telefon
          </FormLabel>
          <Input placeholder="Telefon Numarası" size="lg" color="white" />
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Email
          </FormLabel>
          <Input type="E-mail" mb="16px" size="lg" color="white" />
        </FormControl>

        <div className={classes.gonder}>
          <button className={classes.gnd}>Şifremi Mail Adresime Gönder</button>
          <button className={classes.gnd}>Şifremi Telefonuma Gönder</button>
        </div>
      </div>
    </div>
  );
}

export default SIFREMIUNUTTUM;
