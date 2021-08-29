import React from "react";
import classes from "../styles/odeme.module.css";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
export default function Odeme() {
  return (
    <div className="odeme">
      <div className={classes.kariyerhdr}>
        <h4>ÖDEME</h4>
      </div>
      <div className={classes.paymain}>
        <div className={classes.payentry}>
          <FormControl id="payform">
            <FormLabel color="#fff" mb="16px" fontSize="18px">
              Kart Numarası
            </FormLabel>
            <Input size="lg" color="white" />
            <FormLabel color="#fff" mb="16px" fontSize="18px" mt="16px">
              Son Kullanma Tarihi
            </FormLabel>
            <div className={classes.date}>
              <FormLabel color="#fff" mb="16px" fontSize="18px">
                Ay
              </FormLabel>
              <Input size="md" color="white" mr="16px" />
              <FormLabel color="#fff" mb="16px" fontSize="18px">
                Yıl
              </FormLabel>
              <Input size="md" color="white" />
            </div>
            <div className={classes.cvv}>
              <FormLabel color="#fff" mb="16px" mt="16px" fontSize="18px">
                CVV
              </FormLabel>
              <Input
                pr="4.5rem"
                mb="16px"
                type="password"
                size="md"
                color="white"
                mt="16px"
              />
            </div>
          </FormControl>
          <div className={classes.gonder}>
            <button className={classes.gnd}>Ödeme</button>
          </div>
        </div>
        <div className={classes.payinfo}>
          <div className={classes.payinfotop}>
            <div className={classes.payone}>
              <p>Ürün</p>
              <p>500 TL</p>
            </div>
            <div className={classes.payone}>
              <p>KDV</p>
              <p>18%</p>
            </div>
          </div>
          <div className={classes.payinfobtm}>
            <div className={classes.payone}>
              <p>TOPLAM</p>
              <p>500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
