import React, { useState } from "react";
import classes from "../styles/kariyer.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import axios from "axios";
export default function Kariyer() {
  const [name, setName] = useState("");
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
    console.log(userObject);
  };

  return (
    <div className="kariyer">
      <div className={classes.kariyerhdr}>
        <h4>KARİYER</h4>
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
              placeholder="Adınız"
              size="lg"
              color="white"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </FormControl>
          <FormControl isRequired id="surname">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Soyad
            </FormLabel>
            <Input
              placeholder="Soyadınız"
              size="lg"
              color="white"
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              value={surname}
            />
          </FormControl>
          <FormControl isRequired id="email">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Email
            </FormLabel>
            <Input
              type="email"
              size="lg"
              color="white"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </FormControl>
          <FormControl isRequired id="text">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Mesajınız
            </FormLabel>
            <Textarea
              placeholder="Mesajınız"
              size="lg"
              color="white"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
          </FormControl>

          <div className={classes.gonder}>
            <button className={classes.gnd}>Gönder</button>
          </div>
        </form>
      </div>
    </div>
  );
}
