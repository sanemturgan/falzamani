import React from "react";
import axios from "axios";
import { useState } from "react";
import parse from "html-react-parser";
// callbackUrl: "http://localhost:3001/api/odeme/callback",

export default function Odemeal() {
  const onPay = async (e) => {
    e.preventDefault();
    const request = {
      locale: "tr",
      conversationId: "123456789",
      price: "1",
      paidPrice: "1.2",
      currency: "TRY",
      basketId: "B67832",
      paymentGroup: "PRODUCT",
      callbackUrl: "https://falzamani-backend.herokuapp.com/api/odeme/callback",
      enabledInstallments: [2, 3, 6, 9],
      buyer: {
        id: "BY789",
        name: "John",
        surname: "Doe",
        gsmNumber: "+905350000000",
        email: "email@email.com",
        identityNumber: "74300864791",
        lastLoginDate: "2015-10-05 12:43:35",
        registrationDate: "2013-04-21 15:12:09",
        registrationAddress:
          "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        ip: "85.34.78.112",
        city: "Istanbul",
        country: "Turkey",
        zipCode: "34732",
      },
      shippingAddress: {
        contactName: "Jane Doe",
        city: "Istanbul",
        country: "Turkey",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        zipCode: "34742",
      },
      billingAddress: {
        contactName: "Jane Doe",
        city: "Istanbul",
        country: "Turkey",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        zipCode: "34742",
      },
      basketItems: [
        {
          id: "BI101",
          name: "Binocular",
          category1: "Collectibles",
          category2: "Accessories",
          itemType: "PHYSICAL",
          price: "0.3",
        },
        {
          id: "BI102",
          name: "Game code",
          category1: "Game",
          category2: "Online Game Items",
          itemType: "VIRTUAL",
          price: "0.5",
        },
        {
          id: "BI103",
          name: "Usb",
          category1: "Electronics",
          category2: "Usb / Cable",
          itemType: "PHYSICAL",
          price: "0.2",
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
    <div className="App">
      <button style={{ color: "white" }} onClick={(e) => onPay(e)}>
        ÖDEME YAP
      </button>
      {render}
      <div id="iyzipay-checkout-form" className="responsive"></div>
    </div>
  );
}
