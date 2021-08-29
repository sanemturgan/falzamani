import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import classes from "../styles/GigCard.module.css";
import axios from "axios";
export default function GigCard({ gigData }) {
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
