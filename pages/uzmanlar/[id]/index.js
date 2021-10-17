import React, { useEffect, useState } from "react";
import classes from "../../../styles/uzmandetay.module.css";
import { FaPhoneAlt, FaEnvelope, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import Comment from "../../../components/Comment";
import {
  Switch,
  FormControl,
  FormLabel,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";

import GigCard from "../../../components/GigCard";
export default function Uzmandetay({ warlockSingleData, gigData }) {
  console.log(warlockSingleData);
  return (
    <div className="uzmanDetay">
      <div className={classes.uzmanhdr}>
        <h4>UZMANLAR</h4>
        <p>
          Aklınızda sorulara tecrübesiyle kişiselleştirilmiş cevap bulmanızı
          sağlayacak uzmanı seç.
        </p>
      </div>
      <div className={classes.uzmangenel}>
        <div className={classes.uzmantop}>
          <div className={classes.ustbir}>
            <div className={classes.cardimg}>
              {warlockSingleData.image ? (
                <Image
                  src={warlockSingleData.image}
                  alt="dty"
                  objectFit="contain"
                  layout="fill"
                  borderRadius="full"
                  boxSize="100px"
                />
              ) : (
                <FaUserAlt fontSize="90px" color="lightgray" />
              )}
            </div>
            <h5>{warlockSingleData.name}</h5>
            <h6 className={classes.status}>{warlockSingleData.status}</h6>
            <span
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              {gigData.length > 0 &&
                gigData.map((data, index) => {
                  return (
                    <p
                      key={index}
                      gigData={data}
                      style={{
                        border: "1px solid #fff",
                        borderRadius: "15px",
                        padding: "2px 10px",
                        margin: "5px",
                        textAlign: "center",
                        fontSize: "12px",
                      }}
                    >
                      {data.title}{" "}
                    </p>
                  );
                })}
            </span>
            {/* <div className={classes.onlinebtn}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="alerts" mb="0" fontSize="14px">
                  Online Olduğunda Bildir
                </FormLabel>
                <Switch size="lg" id="alerts" />
              </FormControl>
            </div> */}
          </div>
          <div className={classes.ustiki}>
            <p>Falınızı mail yoluyla bize ulaştırabilirsiniz.</p>
            <div className={classes.iletisim}>
              {/* <div className={classes.cardicon}>
                <a href={`tel:${warlockSingleData.phone}`}>
                  <FaPhoneAlt color="#ECDCF5" size="20px" />
                </a>
              </div> */}

              <div className={classes.cardicon}>
                <Popover>
                  <PopoverTrigger>
                    <Button colorScheme="purple">
                      {" "}
                      <FaEnvelope color="#ECDCF5" size="20px" />
                      <p>Fal@falzamani.com</p>
                    </Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>
                        Doğum Haritası ile ilgili bilgilerinizi
                        belirtirken,uzmanınızın ismini eklemeyi unutmayınız.
                      </PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Button colorScheme="purple" width="100%">
                          <a href="mailto:Fal@falzamani.com">
                            <FaEnvelope color="#ECDCF5" size="20px" />
                          </a>
                        </Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </div>
            </div>
            <div className={classes.expbtm}>
              <div className={classes.aboutTop}>
                <p>{warlockSingleData.about}</p>
              </div>
              <div className={classes.aboutbottom}>
                <p> Uzman yorumcu {warlockSingleData.name},</p>
                <span>
                  {" "}
                  {gigData.length > 0 &&
                    gigData.map((data, index) => {
                      return (
                        <p key={index} gigData={data}>
                          {data.title}{" "}
                        </p>
                      );
                    })}
                </span>
                <p>
                  {" "}
                  alanlarındaki yeteneğini kullanarak sizinle iletişime geçmek
                  için sabırsızlanıyor. Randevunuzu alarak o gün ve saat içinde
                  falınıza canlı olarak baktırabilir yada uzmanımıza yaşınızı,
                  burcunuzu ve sormak istediğiniz soruları yazarak yazılı
                  danışmanlık alma fırsatını da yakalayabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.uzmanmid}>
          <div className={classes.options}>
            {gigData.length > 0 &&
              gigData.map((data, index) => {
                return <GigCard key={index} gigData={data} />;
              })}
          </div>
        </div>
        <div className={classes.uzmanbtm}>
          <div className={classes.btmhdr}>
            <h4>FALCI YORUMLARI</h4>
          </div>
          <div className={classes.comments}>
            {warlockSingleData.Gig.map((data) => {
              return data.Comment.map((commentData, index) => {
                return <Comment key={index} data={commentData} />;
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const paramsData = await context.query;
  const res = await fetch(
    process.env.NEXT_APP_API_URL + `/warlock/${paramsData.id}`,
    {
      method: "GET",
    }
  );
  const warlockSingleData = await res.json();

  const gigRes = await fetch(
    process.env.NEXT_APP_API_URL + `/gig/${paramsData.id}/all`,
    {
      method: "GET",
    }
  );

  const gigData = await gigRes.json();

  if (!warlockSingleData || !gigData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      warlockSingleData: warlockSingleData.data,

      gigData: gigData.data,
    },
  };
}
