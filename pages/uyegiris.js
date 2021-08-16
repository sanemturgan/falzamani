import React, { useState } from "react";
import classes from "../styles/uyegiris.module.css";
import axios from "axios";
import Cookies from "universal-cookie";
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
import { useRouter } from "next/router";
export default function UYEGIRIS() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      email,
      password,
    };
    const maxAgeTime = rememberMe ? 86400 * 4 : null;
    await axios
      .post(
        process.env.REACT_APP_CLIENT_API_URL + `/customer/login`,
        userObject
      )
      .then((res) => {
        const cookies = new Cookies();
        cookies.set("jwt", res.data.token, { maxAge: maxAgeTime });
        if (res.data.status === 200 && cookies.get("jwt")) {
          console.log("Giriş Başarılı");
          setTimeout(() => {
            router.replace("/userpage");
            console.log(res);
          }, 500);
        }
      })
      .catch((err) =>
        console.log(err, "Hatalı Giriş, Lütfen Bilgilerinizi Kontrol Ediniz.")
      );
  };

  return (
    <div className="uyegiris">
      <div className={classes.kariyerhdr}>
        <h4>ÜYE GİRİŞİ</h4>
      </div>
      <div className={classes.formkariyer}>
        <form onSubmit={onSubmit}>
          <FormControl isRequired id="email">
            <FormLabel color="#fff" mb="16px" fontSize="18px">
              E-Mail
            </FormLabel>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="email"
              color="#fff"
              size="lg"
            />
          </FormControl>
          <FormControl isRequired id="email">
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
              placeholder="şifre"
              color="#fff"
            />
          </FormControl>
          <Checkbox
            onChange={(e) => {
              setRememberMe(e.target.checked);
            }}
            checked={rememberMe}
            color="white"
          >
            Beni Hatırla
          </Checkbox>
          <div className={classes.forgotpassword}>
            <Link href="/forgotpassword">
              <a>Şifremi Unuttum</a>
            </Link>
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
