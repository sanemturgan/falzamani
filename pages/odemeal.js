import React from "react";
import axios from "axios";
import { useState } from "react";
import parse from "html-react-parser";
import { background } from "@chakra-ui/styled-system";

// callbackUrl: "http://localhost:3001/api/odeme/callback",

export default function Odemeal() {
  const onPay = async (e) => {
    e.preventDefault();
    const request = {
      locale: "tr",
      conversationId: "123456789",
      price: "50",
      paidPrice: "52",
      currency: "TRY",
      basketId: JSON.parse(localStorage.getItem("userData")).id,
      // paymentGroup: "PRODUCT",
      callbackUrl: `https://falzamani-backend.herokuapp.com/api/odeme/callback/${
        JSON.parse(localStorage.getItem("userData")).id
      }`,
      enabledInstallments: [1],
      buyer: {
        id: JSON.parse(localStorage.getItem("userData")).id,
        name: JSON.parse(localStorage.getItem("userData")).name,
        surname: JSON.parse(localStorage.getItem("userData")).surname,
        gsmNumber: JSON.parse(localStorage.getItem("userData")).phone,
        email: JSON.parse(localStorage.getItem("userData")).email,
        identityNumber: "74300864791",
        // lastLoginDate: "2015-10-05 12:43:35",
        // registrationDate: "2013-04-21 15:12:09",
        registrationAddress:
          "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        ip: "85.34.78.112",
        city: "Istanbul",
        country: "Turkey",
        // zipCode: "34732",
      },
      shippingAddress: {
        contactName: JSON.parse(localStorage.getItem("userData")).name,
        city: "Istanbul",
        country: "Turkey",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        // zipCode: "34742",
      },
      billingAddress: {
        contactName: JSON.parse(localStorage.getItem("userData")).name,
        city: "Istanbul",
        country: "Turkey",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        // zipCode: "34742",
      },
      basketItems: [
        {
          id: "500KRD",
          name: "500 kredi",
          category1: "Krediler",
          itemType: "VIRTUAL",
          price: "50",
        },
      ],
    };
    const data = await axios.post(
      "https://falzamani-backend.herokuapp.com/api/odeme",
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

  const [render, setRender] = useState(null);
  return (
    <div className="OdemeAlMain">
      <div className="App">
        <button
          style={{
            color: "white",
            backgroundColor: "#5a4b69",
            borderRadius: "40px",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "100px 0",
            fontSize: "16px",
          }}
          onClick={(e) => onPay(e)}
        >
          ÖDEME YAP
        </button>
        {render}
        <div id="iyzipay-checkout-form" className="responsive"></div>
      </div>
    </div>
  );
}
