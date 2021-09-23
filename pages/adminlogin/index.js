import React, { useState } from "react";
import classes from "../../styles/adminlogin.module.css";
import { FormControl, FormLabel, Input, Checkbox } from "@chakra-ui/react";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import axios from "axios";
export default function ADMINLOGIN() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe] = useState(false);
  const router = useRouter();
  const cookies = new Cookies();

  const onSubmit = async (e) => {
    e.preventDefault();
    let userObject = {
      email,
      password,
    };
    const maxAgeTime = rememberMe ? 86400 * 4 : null;
    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + `/admin/login`, userObject)
      .then((res) => {
        cookies.set("jwt", res.data.token, { maxAge: maxAgeTime });
        localStorage.setItem("userData", JSON.stringify(res.data.data[0]), {
          maxAge: maxAgeTime,
        });
        if (res.data.status === 200 && cookies.get("jwt")) {
          window.alert("Giriş Yapıldı");
          setTimeout(() => {
            router.replace("/adminpage");
            console.log(res);
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
      });
  };
  return (
    <div className="adminlogin">
      <div className={classes.kariyerhdr}>
        <h4>Admin Giriş</h4>
      </div>
      <div className={classes.admin}>
        <div className={classes.formkariyer}>
          <form id="formadmin">
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
            <Checkbox defaultIsChecked color="white">
              Beni Hatırla
            </Checkbox>
            <div className={classes.gonder}>
              <button onClick={onSubmit} className={classes.gnd}>
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
