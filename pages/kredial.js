import React from "react";
import classes from "../styles/kredial.module.css";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import parse from "html-react-parser";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Kredial() {
  const [render, setRender] = useState(null);
  const onPay = async (e, price) => {
    e.preventDefault();
    let basketItem;
    if (price === 20) {
      basketItem = {
        id: "200KRD",
        name: "200 kredi",
        category1: "Krediler",
        itemType: "VIRTUAL",
        price: "20",
      };
    }
    if (price === 30) {
      basketItem = {
        id: "300KRD",
        name: "300 kredi",
        category1: "Krediler",
        itemType: "VIRTUAL",
        price: "30",
      };
    }
    if (price === 45) {
      basketItem = {
        id: "500KRD",
        name: "500 kredi",
        category1: "Krediler",
        itemType: "VIRTUAL",
        price: "45",
      };
    }
    if (price === 85) {
      basketItem = {
        id: "1000KRD",
        name: "1000 kredi",
        category1: "Krediler",
        itemType: "VIRTUAL",
        price: "85",
      };
    }
    if (price === 125) {
      basketItem = {
        id: "1500KRD",
        name: "1500 kredi",
        category1: "Krediler",
        itemType: "VIRTUAL",
        price: "125",
      };
    }
    if (price === 160) {
      basketItem = {
        id: "2000KRD",
        name: "2000 kredi",
        category1: "Krediler",
        itemType: "VIRTUAL",
        price: "160",
      };
    }
    if (price === 225) {
      basketItem = {
        id: "3000KRD",
        name: "3000 kredi",
        category1: "Krediler",
        itemType: "VIRTUAL",
        price: "225",
      };
    }
    if (price === 700) {
      basketItem = {
        id: "10000KRD",
        name: "10000 kredi",
        category1: "Krediler",
        itemType: "VIRTUAL",
        price: "700",
      };
    }

    const request = {
      locale: "tr",
      conversationId: "123456789",
      price: `${price}`,
      paidPrice: `${price}`,
      currency: "TRY",
      basketId: JSON.parse(localStorage.getItem("userData")).id,
      paymentGroup: "PRODUCT",
      callbackUrl: `${process.env.REACT_APP_CLIENT_API_URL}/odeme/callback/${
        JSON.parse(localStorage.getItem("userData")).id
      }`,
      enabledInstallments: [1],
      buyer: {
        id: JSON.parse(localStorage.getItem("userData")).id,
        name: JSON.parse(localStorage.getItem("userData")).name,
        surname: JSON.parse(localStorage.getItem("userData")).surname,
        gsmNumber: JSON.parse(localStorage.getItem("userData")).phone,
        email: JSON.parse(localStorage.getItem("userData")).email,
        identityNumber: JSON.parse(localStorage.getItem("userData")).identity,
        // lastLoginDate: "2015-10-05 12:43:35",
        // registrationDate: "2013-04-21 15:12:09",
        registrationAddress:
          "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        ip: "85.34.78.112",
        city: "Istanbul",
        country: "Turkey",
        zipCode: "34732",
      },
      shippingAddress: {
        contactName: JSON.parse(localStorage.getItem("userData")).name,
        city: "Istanbul",
        country: "Turkey",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        zipCode: "34742",
      },
      billingAddress: {
        contactName: JSON.parse(localStorage.getItem("userData")).name,
        city: "Istanbul",
        country: "Turkey",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        zipCode: "34742",
      },
      basketItems: [basketItem],
    };
    const data = await axios.post(
      `${process.env.REACT_APP_CLIENT_API_URL}/odeme`,
      request
    );
    const parsedData = parse(`${data.data.checkoutFormContent}`);
    console.log(parsedData);
    setRender(parse(`${data.data.checkoutFormContent}`));
    const script = document.createElement("script");

    script.innerHTML = parsedData.props.dangerouslySetInnerHTML.__html;
    script.type = parsedData.props.type;
    script.async = true;

    document.body.appendChild(script);
    console.log(script);
  };

  return (
    <div className="kredial">
      <div className={classes.kredihdr}>
        <h4>KREDİ AL</h4>
      </div>
      <div className={classes.kredi}>
        <div className={classes.kredicar}>
          <h3>200 Kredi</h3>
          <p>
            Fal Zamanını denemeniz için başlangıç paketi. Hemen canlı fal
            baktır!
          </p>
          <h4>20 TL</h4>
          <div className={classes.opran}>
            <div className="App">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1cd42e",
                  borderRadius: "40px",
                  padding: "5px 10px",
                  margin: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
                onClick={(e) => onPay(e, 20)}
              >
                Satın Al
              </button>
              {render}
              <div id="iyzipay-checkout-form" className="popup"></div>
            </div>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>300 Kredi</h3>
          <p>
            Fal Zamanını denemeniz için yeni bir paket. Hemen canlı fal baktır!
          </p>
          <h4>30 TL</h4>
          <div className={classes.opran}>
            <div className="App">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1cd42e",
                  borderRadius: "40px",
                  padding: "5px 10px",
                  margin: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
                onClick={(e) => onPay(e, 30)}
              >
                Satın Al
              </button>
              {render}
              <div id="iyzipay-checkout-form" className="popup"></div>
            </div>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>500 Kredi</h3>
          <p>3 yazılı Fal veya 16 dk telefonda canlı fal sizlerle !!</p>
          <h4>45 TL</h4>
          <div className={classes.opran}>
            <div className="App">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1cd42e",
                  borderRadius: "40px",
                  padding: "5px 10px",
                  margin: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
                onClick={(e) => onPay(e, 45)}
              >
                Satın Al
              </button>
              {render}
              <div id="iyzipay-checkout-form" className="popup"></div>
            </div>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>1000 Kredi</h3>
          <h4>(Popüler Kredi)</h4>
          <p>6 yazılı fal veya 34 dk telefonda canlı fal sizlerle !!</p>
          <h4>85 TL</h4>
          <div className={classes.opran}>
            <div className="App">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1cd42e",
                  borderRadius: "40px",
                  padding: "5px 10px",
                  margin: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
                onClick={(e) => onPay(e, 85)}
              >
                Satın Al
              </button>
              {render}
              <div id="iyzipay-checkout-form" className="popup"></div>
            </div>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>1500 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>125 TL</h4>
          <div className={classes.opran}>
            <div className="App">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1cd42e",
                  borderRadius: "40px",
                  padding: "5px 10px",
                  margin: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
                onClick={(e) => onPay(e, 125)}
              >
                Satın Al
              </button>
              {render}
              <div id="iyzipay-checkout-form" className="popup"></div>
            </div>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>2000 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>160 TL</h4>
          <div className={classes.opran}>
            <div className="App">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1cd42e",
                  borderRadius: "40px",
                  padding: "5px 10px",
                  margin: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
                onClick={(e) => onPay(e, 160)}
              >
                Satın Al
              </button>
              {render}
              <div id="iyzipay-checkout-form" className="popup"></div>
            </div>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>3000 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>225 TL</h4>
          <div className={classes.opran}>
            <div className="App">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1cd42e",
                  borderRadius: "40px",
                  padding: "5px 10px",
                  margin: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
                onClick={(e) => onPay(e, 225)}
              >
                Satın Al
              </button>
              {render}
              <div id="iyzipay-checkout-form" className="popup"></div>
            </div>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>10.000 Kredi</h3>
          <p>Fal Zamanını Premium paketlerinden biri. Doya doya fal baktır!</p>
          <h4>700 TL</h4>
          <div className={classes.opran}>
            <div className="App">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1cd42e",
                  borderRadius: "40px",
                  padding: "5px 10px",
                  margin: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
                onClick={(e) => onPay(e, 700)}
              >
                Satın Al
              </button>
              {render}
              <div id="iyzipay-checkout-form" className="popup"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
