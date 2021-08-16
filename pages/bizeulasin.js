import React, { useState } from "react";
import classes from "../styles/bizeulasin.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  ButtonGroup,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { FaFileExport } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import router from "next/router";
export default function Bizeulasin() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [text, setText] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      name,
      surname,

      email,

      text,
    };
    await axios
      .post(
        process.env.REACT_APP_CLIENT_API_URL + `/customer/register`,
        userObject
      )
      .then((res) => {
        if (res.data.status === 200) {
          console.log("Gönderildi");
          setTimeout(() => {
            router.replace("/");
          }, 500);
        }
        console.log(res);
      });
  };
  return (
    <div className="bizeulasin">
      <div className={classes.kariyerhdr}>
        <h4>Bize Ulaşın</h4>
        <p>
          Görüşlerinize değer veriyoruz, sizi dinliyoruz. Bizimle ilgili
          görüşlerinizi ve önerilerinizi öğrenmeyi çok isteriz.
        </p>
        <p>
          İletişim formunu doldurarak, info@falzamani.com veya
          falzamani@gmail.com -mail adresimizlerimizden ve 0555 555 55 55
          numaralı whatsapp danışma hattımızdan iletişime geçebilirsiniz. En
          kısa sürede geri dönüş yapacağız.{" "}
        </p>
      </div>
      <div className={classes.formkariyer}>
        <form onSubmit={onSubmit}>
          <FormControl isRequired id="name">
            <FormLabel color="#fff" mb="16px" fontSize="18px">
              Ad
            </FormLabel>
            <Input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              placeholder="ad"
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
                setName(e.target.value);
              }}
              value={name}
              placeholder="  soyad"
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
            />
          </FormControl>
          <FormControl isRequired id="text">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Mesajınız
            </FormLabel>
            <Textarea
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={text}
              placeholder="ad"
              color="#fff"
              size="lg"
            />
          </FormControl>

          <div className={classes.gonder}>
            <button mt="16px" type="send" className={classes.gnd}>
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
