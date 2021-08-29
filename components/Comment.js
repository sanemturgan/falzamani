import React from "react";

import classes from "../styles/warlockpage.module.css";
import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
  FaPlusCircle,
} from "react-icons/fa";

export default function Comment({ commentData }) {
  return (
    <div className={classes.comment}>
      <div className={classes.ctxt}>
        <p>{commentData.text}</p>
      </div>
      <div className={classes.rote}>
        <div className={classes.rotestr}>
          <FaStar color="#ECDCF5" size="14px" />
          <FaStar color="#ECDCF5" size="14px" />
          <FaStar color="#ECDCF5" size="14px" />
          <FaStar color="#ECDCF5" size="14px" />
          <FaStar color="#ECDCF5" size="14px" />
        </div>
        <div className={classes.rtdate}>
          <p>24.01.21</p>
        </div>
      </div>
    </div>
  );
}
