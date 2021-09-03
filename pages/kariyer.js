import React, { useState } from "react";
import classes from "../styles/kariyer.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { FaFileExport } from "react-icons/fa";

export default function Kariyer() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

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
          setTimeout(() => {
            router.replace("/");
          }, 500);
        }
        console.log(res);
      });
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
            <Input placeholder="Adınız" size="lg" color="white" />
          </FormControl>
          <FormControl isRequired id="surname">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Soyad
            </FormLabel>
            <Input placeholder="Soyadınız" size="lg" color="white" />
          </FormControl>
          <FormControl isRequired id="email">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Email
            </FormLabel>
            <Input type="E-mail" size="lg" color="white" />
          </FormControl>
          <FormControl isRequired id="text">
            <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
              Mesajınız
            </FormLabel>
            <Textarea placeholder="Mesajınız" size="lg" color="white" />
          </FormControl>
          <div className={classes.export}>
            <p>dosya seçebilirsiniz</p>
            <Button colorScheme="#402759">
              <FaFileExport color="#ECDCF5" size="16px" />
            </Button>
          </div>

          <div className={classes.gonder}>
            <button onClick={onSubmit} className={classes.gnd}>
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
