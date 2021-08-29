import React from "react";
import classes from "../styles/LoadingPage.module.css";
import { Button } from "@chakra-ui/react";
export default function search() {
  return (
    <div className="loading">
      <div className={classes.loadingPage}>
        <Button
          isLoading
          colorScheme="white"
          type="lg"
          /*spinner={<BeatLoader size={8} color="white" />}*/
        >
          Click Me
        </Button>
      </div>
    </div>
  );
}
