import React from "react";

import classes from "../styles/Comment.module.css";
import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
  FaPlusCircle,
  FaRegStar,
} from "react-icons/fa";

export default function Comment({ data }) {
  const today = new Date(data.createdAt);

  return (
    <div className={classes.comment}>
      <div className={classes.ctxt}>
        <p>{data.text}</p>
      </div>
      <div className={classes.rote}>
        <div className={classes.rotestr}>
          {[...Array(data.rate)].map((data, index) => {
            return <FaStar key={index} color="#ECDCF5" size="12px" />;
          })}
          {[...Array(5 - data.rate)].map((data, index) => {
            return <FaRegStar key={index} color="#ECDCF5" size="12px" />;
          })}
        </div>
        <div className={classes.rtdate}>
          <p>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(today)}
          </p>
        </div>
      </div>
    </div>
  );
}
