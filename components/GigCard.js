import React, { useState, useEffect } from "react";

import { Button } from "@chakra-ui/react";
import classes from "../styles/GigCard.module.css";
import axios from "axios";
export default function GigCard({ gigData }) {
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
            onOpen();
          }}
        >
          Randevu Al
        </Button>
      </div>
    </div>
  );
}
