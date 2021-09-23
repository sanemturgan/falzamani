import React, { useState } from "react";
import classes from "../styles/bizeulasin.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import Cookies from "universal-cookie";
import axios from "axios";
export default function Bizeulasin() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const cookies = new Cookies();

  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      name,
      surname,
      phone,
      email,
      text,
    };
    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + "/contactUs", userObject)
      .then((res) => {
        console.log(res);
        window.alert("Mesajınız Gönderildi..");
      })
      .catch((err) => {
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
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
                setName(e.target.value);
              }}
              value={name}
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
                setSurname(e.target.value);
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
              onChange={(valueAsNumber) => {
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
                setText(e.target.value);
              }}
              value={text}
              placeholder="Mesajınız"
              color="#fff"
              size="lg"
            />
          </FormControl>

          <div className={classes.gonder}>
            <button mt="16px" type="submit" className={classes.gnd}>
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
