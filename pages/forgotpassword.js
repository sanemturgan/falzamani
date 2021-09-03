import React, { useState } from "react";
import classes from "../styles/forgotpassword.module.css";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const sendEmail = async () => {
    await axios
      .post(
        process.env.REACT_APP_CLIENT_API_URL + `/password/forgot-password`,
        { email }
      )
      .then((res) => {
        if (res.data.status === 200) {
          window.alert("Mail Gönderildi");
          setTimeout(() => {
            router.replace("/");
          }, 500);
        }
        console.log(res);
      })
      .catch((err) => {
        window.alert(err.response.data.error);
      });
  };
  return (
    <div className="fpassword">
      <div className={classes.kariyerhdr}>
        <h4>ŞİFREMİ UNUTTUM</h4>
      </div>
      <div className={classes.formkariyer}>
        <FormControl id="form">
          <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
            Email
          </FormLabel>
          <Input
            type="email"
            mb="16px"
            size="lg"
            color="white"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </FormControl>

        <div className={classes.gonder}>
          <button onClick={sendEmail} className={classes.gnd}>
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
}
