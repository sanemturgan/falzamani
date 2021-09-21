import React, { useState, useEffect } from "react";
import classes from "../styles/uyegiris.module.css";
import axios from "axios";
import Cookies from "universal-cookie";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function UyeGiris() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [customer, setCustomer] = useState(true);
  const router = useRouter();
  const cookies = new Cookies();
  useEffect(() => {
    if (cookies.get("jwt")) {
      router.replace("/");
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      email,
      password,
    };
    const maxAgeTime = rememberMe ? 86400 * 4 : null;
    await axios
      .post(
        process.env.REACT_APP_CLIENT_API_URL +
          `${customer ? `/customer/login` : `/warlock/login`}`,
        userObject
      )
      .then(async (res) => {
        localStorage.setItem("userData", JSON.stringify(res.data.data[0]));
        cookies.set("jwt", res.data.token, {
          maxAge: maxAgeTime,
        });

        if (
          res.data.status === 200 &&
          cookies.get("jwt") &&
          localStorage.getItem("userData")
        ) {
          window.alert("Giriş Yapıldı");
          setTimeout(() => {
            router.replace(customer ? "/userpage" : "/warlockpage");
          }, 500);
        }
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  return (
    <div className="uyegiris">
      <div className={classes.kariyerhdr}>
        <h4>ÜYE GİRİŞİ</h4>
      </div>
      <div className={classes.formkariyer}>
        <div className={classes.typeUser}>
          <RadioGroup defaultValue="1">
            <Stack spacing={5} direction="row">
              <Radio colorScheme="purple" value="1">
                <div
                  className={classes.customer}
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => setCustomer(true)}
                >
                  Danışan Girişi
                </div>
              </Radio>
              <Radio colorScheme="purple" value="2">
                <div
                  className={classes.warlock}
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => setCustomer(false)}
                >
                  Danışman Girişi
                </div>
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
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
              placeholder="Email"
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
              placeholder="Şifre"
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
          <div className={classes.forgotpassword}>
            <Link href="/kayit">
              <a>Hemen Kaydolun</a>
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
