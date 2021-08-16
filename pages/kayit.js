import React, { useState } from "react";

import classes from "../styles/kayit.module.css";
import {
  Form,
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
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { FaFileExport } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import router from "next/router";
function Kayit() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      name,
      surname,
      username,
      email,
      phone,
      password,
    };
    await axios
      .post(
        process.env.REACT_APP_CLIENT_API_URL + `/customer/register`,
        userObject
      )
      .then((res) => {
        if (res.data.status === 200) {
          console.log("Giriş Başarılı");
          setTimeout(() => {
            router.replace("/uyegiris");
          }, 500);
        }
        console.log(res);
      })
      .catch((err) =>
        console.log(err, "Hatalı Giriş, Lütfen Bilgilerinizi Kontrol Ediniz.")
      );
  };

  return (
    <div className="kayit">
      <div className={classes.kariyerhdr}>
        <h4>KAYIT OL</h4>
      </div>

      <div className={classes.formkariyer}>
        <form onSubmit={onSubmit}>
          <FormLabel color="#fff" mb="16px" fontSize="18px">
            Kullanıcı Adı
          </FormLabel>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            placeholder="Kullanıcı Adı"
            color="#fff"
            size="lg"
          />
          <FormLabel color="#fff" mb="16px" fontSize="18px">
            Ad
          </FormLabel>
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder="Kullanıcı Adı"
            color="#fff"
            size="lg"
          />
          <FormLabel color="#fff" mb="16px" fontSize="18px">
            Soyad
          </FormLabel>
          <Input
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            value={surname}
            placeholder="Kullanıcı Adı"
            color="#fff"
            size="lg"
          />

          <FormControl isRequired id="phone">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Telefon
            </FormLabel>
            <NumberInput
              max={9999999999}
              onChange={(valueAsString, valueAsNumber) => {
                setPhone(valueAsNumber);
              }}
              value={phone}
              placeholder="Telefon Numarası"
              size="lg"
              color="white"
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Email
          </FormLabel>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            size="lg"
            color="white"
          />

          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Şifre
          </FormLabel>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            pr="4.5rem"
            mb="16px"
            type="password"
            size="lg"
            placeholder="Şifre"
          />
          {/* <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Şifre Tekrar
          </FormLabel>
          <Input
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            value={password2}
            pr="4.5rem"
            mb="16px"
            type="password"
            size="lg"
            placeholder="Şifre Tekrar"
          /> */}
          <div className={classes.gonder}>
            <button type="submit" className={classes.gnd}>
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Kayit;
