import React, { useState } from "react";
import GigEditable from "./GigEditable";
import {
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  Flex,
  EditIcon,
  IconButton,
  CheckIcon,
  useEditableControls,
  CloseIcon,
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "universal-cookie";
import classes from "../styles/warlockpage.module.css";
export default function RandevuCard({ classes, data, getDate }) {
  const [radioValue, setRadioValue] = useState("");
  const cookies = new Cookies();
  const onVerified = async (value) => {
    setRadioValue(value);
    const statusObject = {
      verified: value === "true" ? true : false,
      id: data.id,
    };
    await axios
      .post(
        process.env.REACT_APP_CLIENT_API_URL + "/date/verify",
        statusObject,
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getDate(data.warlockId);
      })
      .catch((err) => {
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
      });
  };
  console.log(data);
  return (
    <li className={classes.btminfolist}>
      <div className={classes.infofal}></div>
      <div className={classes.payanddetails}>
        <h6>İlan Başlığı: {data.Gig.title}</h6>
        <h6>İlan Türü: {data.Gig.category.name}</h6>
        <h6>Danışan Adı: {data.Customer.name}</h6>
        <h6>Kredi: {data.credit} Kredi</h6>
        <h6>
          Telefon:
          <a href={`tel:${data.Customer.phone}`}>
            <p>{data.Customer.phone}</p>
          </a>
        </h6>
        <div className={classes.cardbtn}>
          {data.verified ? (
            <span style={{ color: "green", fontWeight: "900" }}>ONAYLANDI</span>
          ) : (
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
          )}
        </div>
      </div>
    </li>
  );
}
