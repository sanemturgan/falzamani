import React, { useState } from "react";
import classes from "../../styles/adminlogin.module.css";
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
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
export default function ADMINLOGIN() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      username,
      email,
      password,
    };
    const maxAgeTime = rememberMe ? 86400 * 4 : null;
    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + `/admin/login`, userObject)
      .then((res) => {
        const cookies = new Cookies();
        cookies.set("jwt", res.data.token, { maxAge: maxAgeTime });
        if (res.data.status === 200 && cookies.get("jwt")) {
          console.log("Giriş Başarılı");
          setTimeout(() => {
            router.replace("/adminpage");
            console.log(res);
          }, 500);
        }
      })
      .catch((err) =>
        console.log(err, "Hatalı Giriş, Lütfen Bilgilerinizi Kontrol Ediniz.")
      );
  };
  return (
    <div className="adminlogin">
      <div className={classes.kariyerhdr}>
        <h4>Admin Giriş</h4>
      </div>
      <div className={classes.admin}>
        <div className={classes.formkariyer}>
          <form id="formadmin">
            <FormControl isRequired id="username">
              <FormLabel color="#fff" mb="16px" fontSize="18px">
                Kullanıcı Adı
              </FormLabel>
              <Input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={email}
                placeholder="kullanıcı adı"
                color="#fff"
                size="lg"
              />
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
                placeholder="email"
                color="#fff"
                size="lg"
              />
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
                placeholder="şifre"
                color="#fff"
              />
            </FormControl>
            <Checkbox defaultIsChecked color="white" s>
              Beni Hatırla
            </Checkbox>
            <div className={classes.gonder}>
              <button onClick={onSubmit} className={classes.gnd}>
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.flt}>
              <Link href="/adminpage">
                <a>Hesabım</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/adminblog">
                <a>Blog Düzenle</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/danisman">
                <a>Danışmanlar</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/adminkredi">
                <a>Kredi Düzenle</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
