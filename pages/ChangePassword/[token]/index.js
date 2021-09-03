import React, { useState } from "react";
import classes from "../../../styles/ChangePassword.module.css";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const changePassword = async (e) => {
    e.preventDefault();
    let userObject = {
      password,
      rePassword,
    };

    await axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL +
          `${
            customer ? `/customer/reset-password` : `/warlock/reset-password`
          }`,
        userObject,
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === 200) {
          window.alert("Şifre Değiştirildi");
        }
      })
      .catch((err) => {
        // console.log(err.rresponse.data.error);
        window.alert(err.response.data.error);
      });
    console.log(userObject);
  };
  return (
    <div className="ChangePassword">
      <div className={classes.kariyerhdr}>
        <h4>ŞİFRE YENİLE</h4>
      </div>
      <div className={classes.formkariyer}>
        <FormControl isRequired id="password">
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Yeni Şifre
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
        <FormControl isRequired id="password">
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Yeni Şifre Tekrar
          </FormLabel>
          <Input
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
            value={rePassword}
            pr="4.5rem"
            mb="16px"
            type="password"
            size="lg"
            placeholder="Şifre"
            color="#fff"
          />
        </FormControl>

        <div className={classes.gonder}>
          <button onClick={changePassword} className={classes.gnd}>
            Değiştir
          </button>
        </div>
      </div>
    </div>
  );
}
