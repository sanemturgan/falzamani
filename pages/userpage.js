import React, { useEffect, useState } from "react";
import classes from "../styles/userpage.module.css";
import Link from "next/dist/client/link";
import axios from "axios";
import Cookies from "universal-cookie";
import GigEditable from "../components/GigEditable";
import { useRouter } from "next/router";
import {
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  Flex,
  EditIcon,
  IconButton,
  CheckIcon,
  useEditableControls,
  CloseIcon,
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export default function Userpage() {
  const cookies = new Cookies();
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState("");
  const [notification, setNotification] = useState();

  useEffect(() => {
    async function fetchData() {
      if (cookies.get("jwt")) {
        await axios
          .get(process.env.REACT_APP_CLIENT_API_URL + `/customer`, {
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
  }, [cookies, router]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
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
            <Link href="/changepassword">
              <a>Değiştir</a>
            </Link>
          </div>
          <div className={classes.exit}>
            <Link href="/uyegiris">
              <a>
                <button>Çıkış Yap</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.danismanlistbtm}>
          <div className={classes.btmhdr}>
            <h5>Fal Geçmişi</h5>
          </div>
          <div className={classes.btminfo}>
            <ul>
              <li className={classes.btminfolist}>
                <div className={classes.infofal}>
                  <h6>Kahve Falı</h6>
                </div>
                <div className={classes.payanddetails}>
                  <div className={classes.addComment}>
                    <Button
                      backgroundColor="inherit"
                      color="gray"
                      onClick={onOpen2}
                      mr="16px"
                    >
                      Yorum Yap
                    </Button>

                    <Modal isOpen={isOpen2} onClose={onClose2}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Yorum Yap</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <GigEditable value="Yorum Yap" />
                        </ModalBody>
                        <ModalFooter>
                          <Button colorScheme="red" mr={2} onClick={onClose2}>
                            Çıkış
                          </Button>
                          <Button colorScheme="green" variant="ghost">
                            Kaydet
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </div>
                  <div className={classes.details}>
                    <Button
                      backgroundColor="inherit"
                      color="gray"
                      onClick={onOpen}
                    >
                      Detay Oku
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Fal Detayı</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <p>Fal Detayı</p>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
