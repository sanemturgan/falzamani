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
  const unSubmit=()=>{
    e.preventDefault()
        let userObject = {
           name: name,
            surname: surname,
            username:username,
            email: mail,
            phone:phone,
            password: password,
            
        };
        const regResponse = await axios.post(process.env.REACT_APP_CLIENT_API_URL + /user/signup, userObject)
        console.log(regResponse)

  }
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
          <Input placeholder="Telefon Numarası" size="lg" color="white" />
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Email
          </FormLabel>
          <Input type="E-mail" size="lg" color="white" />

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
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Şifre Tekrar
          </FormLabel>
          <Input
            pr="4.5rem"
            mb="16px"
            type="password"
            size="lg"
            placeholder="Şifre Tekrar"
          />
        </FormControl>

        <div className={classes.gonder}>
          <Link href="/Kayit">
            <a>
              <button className={classes.gnd}>Kayıt Ol</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Kayit;