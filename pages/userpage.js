import React, { useEffect, useState } from "react";
import classes from "../styles/userpage.module.css";
import Link from "next/dist/client/link";
import axios from "axios";
import Cookies from "universal-cookie";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import CustomerHistory from "../components/CustomerHistory";

export default function Userpage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cookies = new Cookies();
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState("");
  const [notification, setNotification] = useState();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    async function fetchData() {
      if (cookies.get("jwt")) {
        await axios
          .get(process.env.REACT_APP_CLIENT_API_URL + `/customer/me`, {
            headers: {
              Authorization: `${cookies.get("jwt")}`,
            },
          })
          .then((res) => {
            setCustomerInfo(res.data.data);
          })
          .catch((err) => setNotification(err.response.data.error));
      } else {
        router.replace("/uyegiris");
      }
    }
    fetchData();
  }, []);

  const changePassword = async (e) => {
    e.preventDefault();
    let userObject = {
      password,
      rePassword,
    };

    await axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + `/customer/reset-password`,
        userObject,
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === 200) {
          window.alert("Şifre Değiştirildi");
        }
      })
      .catch((err) => {
        // console.log(err.rresponse.data.error);
        window.alert(err.response.data.error);
      });
    console.log(userObject);
  };

  const logOut = () => {
    cookies.remove("jwt");
    cookies.remove("userData");
    router.replace("/uyegiris");
  };

  return (
    <div className="userpage">
      <div className={classes.kariyerhdr}>
        <h4>HESABIM</h4>
      </div>
      <div className={classes.adminmain}>
        <div className={classes.admininfo}>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Kullanıcı Adı:</p>
              <p>{customerInfo.username}</p>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>E-Mail:</p>
              <p>{customerInfo.email}</p>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Telefon:</p>
              <p>{customerInfo.phone}</p>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Şifre:</p>
              <p>*********</p>
            </div>
            <Button onClick={onOpen} backgroundColor="inherit" color="#fff">
              Değiştir
            </Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Şifre Değiştir</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl isRequired id="password">
                    <FormLabel
                      color="black"
                      mb="16px"
                      mt="16px"
                      fontSize="18px"
                    >
                      Yeni Şifre
                    </FormLabel>
                    <Input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                      pr="4.5rem"
                      mb="16px"
                      type="password"
                      size="lg"
                      placeholder="Şifre"
                      color="black"
                    />
                  </FormControl>
                  <FormControl isRequired id="password">
                    <FormLabel
                      color="black"
                      mb="16px"
                      mt="16px"
                      fontSize="18px"
                    >
                      Yeni Şifre Tekrar
                    </FormLabel>
                    <Input
                      onChange={(e) => {
                        setRePassword(e.target.value);
                      }}
                      value={rePassword}
                      pr="4.5rem"
                      mb="16px"
                      type="password"
                      size="lg"
                      placeholder="Şifre"
                      color="black"
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button variant="red" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button variant="purple" onClick={changePassword}>
                    Kaydet
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
          <div className={classes.exit}>
            <button onClick={logOut}>Çıkış Yap</button>
          </div>
        </div>
        <div className={classes.danismanlistbtm}>
          <div className={classes.btmhdr}>
            <h5>Fal Geçmişi</h5>
          </div>
          <div className={classes.btminfo}>
            <ul>
              <CustomerHistory classes={classes} />
              <CustomerHistory classes={classes} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
