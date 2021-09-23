import React, { useState } from "react";
import { Image, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import classes from "../styles/danisman.module.css";
import axios from "axios";
import Cookies from "universal-cookie";
export default function Verified({ data, adminWarlock }) {
  const cookies = new Cookies();
  const [radioValue, setRadioValue] = useState(`${data.verified}`);
  const onVerified = async (value) => {
    setRadioValue(value);
    const statusObject = {
      verified: value === "true" ? true : false,
      id: data.id,
    };
    await axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + "/admin/verified",
        statusObject,
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        adminWarlock();
      })
      .catch((err) => {
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
      });
  };

  return (
    <div className={classes.cardbtn}>
      <RadioGroup onChange={(e) => onVerified(e)} value={radioValue}>
        <Stack spacing={1} color="white">
          <Radio value="true" size="sm">
            Onayla
          </Radio>
          <Radio value="false" size="sm">
            Reddet
          </Radio>
        </Stack>
      </RadioGroup>
    </div>
  );
}
