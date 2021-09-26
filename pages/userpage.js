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
import withCustomer from "../HOC/withCustomer";
import CustomerHistory from "../components/CustomerHistory";

function Userpage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cookies = new Cookies();
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState("");
  const [dateInfo, setDateInfo] = useState([]);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const getDate = async (id) => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + `/date/all/${id}/all`)
      .then(async (res) => {
        console.log(res);
        setDateInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
      });
  };
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
            getDate(res.data.data.id);
          })
          .catch((err) => console.log(err.response.data.error));
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
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
      });
  };

  const logOut = () => {
    cookies.remove("jwt");
    localStorage.removeItem("userData");
    setTimeout(() => {
      router.replace("/uyegiris");
    }, 500);
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
              <p>Kalan Kredi:</p>
              <p>{customerInfo.credit}</p>
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

            <Modal
              blockScrollOnMount={false}
              isOpen={isOpen}
              onClose={() => {
                setPassword("");
                setRePassword("");
                onClose();
              }}
            >
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
                  <Button
                    variant="red"
                    mr={3}
                    onClick={() => {
                      onClose();
                      setPassword("");
                      setRePassword("");
                    }}
                  >
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
            <h5>Randevu Geçmişi</h5>
          </div>
          <div className={classes.btminfo}>
            <ul>
              {dateInfo.length > 0 &&
                dateInfo.map((data, index) => {
                  return (
                    <CustomerHistory
                      key={index}
                      data={data}
                      classes={classes}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withCustomer(Userpage);
