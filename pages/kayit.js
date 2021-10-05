import React, { useState, useEffect } from "react";
import classes from "../styles/kayit.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Stack,
  FormHelperText,
} from "@chakra-ui/react";

import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

export default function Kayit() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [tckn, setTckn] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("1");

  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    if (cookies.get("jwt")) {
      router.replace("/userpage");
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      name,
      surname,
      username,
      email,
      phone: parseInt(phone),
      password,
      image: "",
      identity: tckn,
    };
    let warlockObject = {
      name,
      surname,
      username,
      email,
      phone: parseInt(phone),
      password,
      image: "",
      about: "",
    };

    await axios
      .post(
        process.env.REACT_APP_CLIENT_API_URL +
          `${userType === "1" ? `/customer/register` : `/warlock/register`}`,
        userType === "1" ? userObject : warlockObject
      )
      .then((res) => {
        if (res.data.status === 200) {
          window.alert("Kayıt olundu");
          setTimeout(() => {
            router.replace("/uyegiris");
          }, 500);
        }
        console.log(res);
      })
      .catch((err) => {
        if (err.response.data) {
          window.alert(err.response.data.error);
        }

        console.log(err.response.data.error);
      });
  };

  return (
    <div className="kayit">
      <div className={classes.kariyerhdr}>
        <h4>KAYIT OL</h4>
      </div>

      <div className={classes.formkariyer}>
        <div className={classes.typeUser}>
          <RadioGroup onChange={setUserType} value={userType}>
            <Stack spacing={5} direction="row">
              <Radio colorScheme="purple" value="1">
                <div
                  className={classes.customer}
                  style={{ color: "white", cursor: "pointer" }}
                >
                  Danışan Olarak Kayıt Olun
                </div>
              </Radio>
              <Radio colorScheme="purple" value="2">
                <div
                  className={classes.warlock}
                  style={{ color: "white", cursor: "pointer" }}
                >
                  Danışman Olarak Kayıt Olun
                </div>
              </Radio>
            </Stack>
          </RadioGroup>
        </div>

        <form onSubmit={onSubmit}>
          <FormControl isRequired id="name">
            <FormLabel color="#fff" mb="16px" fontSize="18px">
              Ad
            </FormLabel>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="Ad"
              color="#fff"
              size="lg"
            />
          </FormControl>
          <FormControl isRequired id="surname">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Soyad
            </FormLabel>
            <Input
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              value={surname}
              placeholder="Soyad"
              color="#fff"
              size="lg"
            />
          </FormControl>
          <FormControl isRequired id="username">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
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
          </FormControl>
          <FormControl isRequired id="phone">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Telefon
            </FormLabel>
            <NumberInput
              max={9999999999}
              min={0}
              onChange={(valueAsNumber) => {
                setPhone(valueAsNumber || "");
              }}
              value={phone}
              size="lg"
              color="white"
            >
              <NumberInputField placeholder="Telefon Numarası" />
            </NumberInput>
          </FormControl>
          <FormControl isRequired id="email">
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
              placeholder="Email"
            />
          </FormControl>
          <FormControl isRequired id="tckn">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              TCKN
            </FormLabel>
            <Input
              onChange={(e) => {
                setTckn(e.target.value);
              }}
              value={tckn}
              id="tckn"
              size="lg"
              color="white"
              placeholder="TCKN"
            />
            <FormHelperText>
              TCKN asla paylaşılmaz. Kredi Kartı Uyumluluk Sorgusu İçin
              Gereklidir.{" "}
            </FormHelperText>
          </FormControl>
          <FormControl isRequired id="password">
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
              color="#fff"
            />
          </FormControl>
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
