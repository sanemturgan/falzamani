import React, { useState } from "react";
import axios from "axios";
import { Input, Image } from "@chakra-ui/react";
import classes from "../styles/uzmanlar.module.css";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
export default function Verified() {
  const [search, setSearch] = useState("");
  const getSearch = async (e) => {
    setSearch(e.target.value);

    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + `/search`, {
        text: e.target.value,
      })
      .then(async (res) => {
        console.log(res);
        localStorage.setItem("searchData", JSON.stringify(res.data.data), {});
      })
      .catch((err) => {
        console.log(err), window.alert(err);
      });
  };

  return (
    <div className={classes.search}>
      <div className={classes.srchi}>
        <Link href="/search">
          <a>
            <FaSearch color="#281c3b" size="16px" />
          </a>
        </Link>
      </div>
      <Input
        onChange={(e) => {
          getSearch(e);
        }}
        variant="unstyled"
        placeholder="Ara"
        value={search}
      />
    </div>
  );
}
