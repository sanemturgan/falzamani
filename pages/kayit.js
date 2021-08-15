import React, { useState } from "react";

import classes from "../styles/kayit.module.css";
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
import { FaFileExport } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
function Kayit() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = async () => {
    let userObject = {
      name: name,
      surname: surname,
      username: "username",
      email: email,
      phone: phone,
      password: password,
    };

    // const regResponse = await axios.post(
    //   "https://falzamani-backend.herokuapp.com/api/customer/register",
    //   userObject
    // );

    const regResponse = await axios.get(
      "https://falzamani-backend.herokuapp.com/api/warlock/all"
    );

    console.log(regResponse);
  };

  console.log(name, phone, email, password);
  return (
    <div className="kayit">
      <div className={classes.kariyerhdr}>
        <h4>KAYIT OL</h4>
      </div>

      <div className={classes.formkariyer}>
        <FormControl id="form">
          <FormLabel color="#fff" mb="16px" fontSize="18px">
            Kullanıcı Adı
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
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Telefon
          </FormLabel>
          <Input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            placeholder="Telefon Numarası"
            size="lg"
            color="white"
          />
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Email
          </FormLabel>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="E-mail"
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
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
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
          />
          <div className={classes.gonder}>
            <button onClick={onSubmit} className={classes.gnd}>
              Kayıt Ol
            </button>
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default Kayit;
