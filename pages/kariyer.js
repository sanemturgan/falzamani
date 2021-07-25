import React from "react";
import classes from "../styles/kariyer.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaFileExport } from "react-icons/fa";
import Link from "next/link";
function kariyer() {
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
        <FormControl id="form">
          <FormLabel color="#fff" mb="16px" fontSize="18px">
            Ad
          </FormLabel>
          <Input placeholder="Adınız" size="lg" />
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Soyad
          </FormLabel>
          <Input placeholder="Soyadınız" size="lg" />
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Email
          </FormLabel>
          <Input type="E-mail" size="lg" />
          <FormHelperText
            color="#fff"
            mb="16px"
            mt="16px"
            fontSize="18px"
          ></FormHelperText>
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Mesajınız
          </FormLabel>
          <Textarea placeholder="Mesajınız" size="lg" />
        </FormControl>
        <div className={classes.export}>
          <p>dosya seçebilirsiniz</p>
          <Button colorScheme="#402759">
            <FaFileExport color="#ECDCF5" size="16px" />
          </Button>
        </div>
        <div className={classes.gonder}>
          <Link href="/Gonder">
            <button className={classes.gnd}>Gönder</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default kariyer;
