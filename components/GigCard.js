import React, { useState, useEffect } from "react";

import Cookies from "universal-cookie";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import classes from "../styles/GigCard.module.css";
import axios from "axios";
export default function GigCard({ gigData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cookies = new Cookies();
  const onSubmit = async () => {
    let dateObject = {
      gigId: gigData.id,
      warlockId: gigData.warlockId,
      customerId: JSON.parse(localStorage.getItem("userData")).id,
      credit: gigData.price,
      description: "",
    };
    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + `/date`, dateObject, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        window.alert("Randevu Alındı,Danışmanın Onayı Bekleniyor");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
      });
  };

  return (
    <div className={classes.option}>
      <div className={classes.ophdr}>
        <h5>{gigData.title}</h5>
      </div>
      <div className={classes.opexp}>
        <p>{gigData.description}</p>
        <p>
          <span>{gigData.duration}</span>
        </p>
        <p>
          <span>{gigData.price}</span>
        </p>
      </div>
      <div className={classes.opran}>
        {/* <Button
          color="#281c3b"
          border="2px"
          backgroundColor="inherit"
          onClick={onOpen}
        >
          Randevu Al
        </Button> */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Randevu almak istediğinize emin misiniz?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Miktar,kredinizden düşülecektir.</p>
            </ModalBody>

            <ModalFooter>
              <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                Vazgeç
              </Button>
              <Button
                colorScheme="purple"
                onClick={() => {
                  onSubmit();
                  onClose();
                }}
              >
                Randevu Al
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
