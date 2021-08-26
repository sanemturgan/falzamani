import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import classes from "../styles/warlockpage.module.css";
import axios from "axios";
export default function GigCard({ warlockData }) {
  const [gigs, setGigs] = useState([]);

  const warlockGig = async () => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + "/gig/5/all")
      .then((res) => {
        setGigs(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    warlockGig();
  }, []);

  return (
    <div key={index} className={classes.option}>
      <div className={classes.ophdr}>
        <h5>{warlockData.title}</h5>
      </div>
      <div className={classes.opexp}>
        <p>{warlockData.description}</p>
        <p>
          <span>{warlockData.duration}</span>
        </p>
        <p>
          <span>{warlockData.price}</span>
        </p>
      </div>
      <div className={classes.opran}>
        <Button
          color="#281c3b"
          border="2px"
          backgroundColor="inherit"
          onClick={() => {
            console.log(isOpen);
            onOpen();
          }}
        >
          Randevu Al
        </Button>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const warlockRes = await fetch(
    process.env.NEXT_APP_API_URL + `/warlock/all`,
    {
      method: "GET",
    }
  );

  const warlockData = await warlockRes.json();

  console.log(warlockData);

  if (!warlockData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      warlockData: warlockData.data,
    },
  };
}
