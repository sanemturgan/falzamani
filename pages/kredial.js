import React from "react";
import classes from "../styles/kredial.module.css";
import Link from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import axios from "axios";
export default function Kredial() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cookies = new Cookies();
  const onSubmit = async () => {
    let creditObject = {
      customerId: JSON.parse(localStorage.getItem("userData")).id,
      credit: JSON.parse(localStorage.getItem("userData")).price,
    };
    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + `/date`, creditObject, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        window.alert("Satın Alma İşlemi Gerçekleşiyor");
        console.log(res);
        router.replace("/odemeal");
      })
      .catch((err) => {
        console.log(err.response.data.error),
          window.alert(err.response.data.error);
      });
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
            <Button
              borderRadius="20px"
              backgroundColor="#1cd42e"
              colorScheme="green"
              color="#fff"
              onClick={onOpen}
            >
              Satın Al
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Satın almak istediğinize emin misiniz?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Miktar,toplam kredinize eklenecektir.</p>
                </ModalBody>

                <ModalFooter>
                  <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      onSubmit();
                      onClose();
                    }}
                  >
                    Satın Al
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>300 Kredi</h3>
          <p>
            Fal Zamanını denemeniz için yeni bir paket. Hemen canlı fal baktır!
          </p>
          <h4>30 TL</h4>
          <div className={classes.opran}>
            <Button
              borderRadius="20px"
              backgroundColor="#1cd42e"
              colorScheme="green"
              color="#fff"
              onClick={onOpen}
            >
              Satın Al
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Satın almak istediğinize emin misiniz?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Miktar,toplam kredinize eklenecektir.</p>
                </ModalBody>

                <ModalFooter>
                  <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      onSubmit();
                      onClose();
                    }}
                  >
                    Satın Al
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>500 Kredi</h3>
          <p>3 yazılı Fal veya 16 dk telefonda canlı fal sizlerle !!</p>
          <h4>45 TL</h4>
          <div className={classes.opran}>
            <Button
              borderRadius="20px"
              backgroundColor="#1cd42e"
              colorScheme="green"
              color="#fff"
              onClick={onOpen}
            >
              Satın Al
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Satın almak istediğinize emin misiniz?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Miktar,toplam kredinize eklenecektir.</p>
                </ModalBody>

                <ModalFooter>
                  <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      onSubmit();
                      onClose();
                    }}
                  >
                    Satın Al
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>1000 Kredi</h3>
          <h4>(Popüler Kredi)</h4>
          <p>6 yazılı fal veya 34 dk telefonda canlı fal sizlerle !!</p>
          <h4>85 TL</h4>
          <div className={classes.opran}>
            <Button
              borderRadius="20px"
              backgroundColor="#1cd42e"
              colorScheme="green"
              color="#fff"
              onClick={onOpen}
            >
              Satın Al
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Satın almak istediğinize emin misiniz?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Miktar,toplam kredinize eklenecektir.</p>
                </ModalBody>

                <ModalFooter>
                  <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      onSubmit();
                      onClose();
                    }}
                  >
                    Satın Al
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>1500 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>125 TL</h4>
          <div className={classes.opran}>
            <Button
              borderRadius="20px"
              backgroundColor="#1cd42e"
              colorScheme="green"
              color="#fff"
              onClick={onOpen}
            >
              Satın Al
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Satın almak istediğinize emin misiniz?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Miktar,toplam kredinize eklenecektir.</p>
                </ModalBody>

                <ModalFooter>
                  <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      onSubmit();
                      onClose();
                    }}
                  >
                    Satın Al
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>2000 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>160 TL</h4>
          <div className={classes.opran}>
            <Button
              borderRadius="20px"
              backgroundColor="#1cd42e"
              colorScheme="green"
              color="#fff"
              onClick={onOpen}
            >
              Satın Al
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Satın almak istediğinize emin misiniz?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Miktar,toplam kredinize eklenecektir.</p>
                </ModalBody>

                <ModalFooter>
                  <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      onSubmit();
                      onClose();
                    }}
                  >
                    Satın Al
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>3000 Kredi</h3>
          <p>
            Fal Zamanını Premium paketlerinden biri. Hemen canlı fal baktır!
          </p>
          <h4>225 TL</h4>
          <div className={classes.opran}>
            <Button
              borderRadius="20px"
              backgroundColor="#1cd42e"
              colorScheme="green"
              color="#fff"
              onClick={onOpen}
            >
              Satın Al
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Satın almak istediğinize emin misiniz?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Miktar,toplam kredinize eklenecektir.</p>
                </ModalBody>

                <ModalFooter>
                  <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      onSubmit();
                      onClose();
                    }}
                  >
                    Satın Al
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={classes.kredicar}>
          <h3>10.000 Kredi</h3>
          <p>Fal Zamanını Premium paketlerinden biri. Doya doya fal baktır!</p>
          <h4>700 TL</h4>
          <div className={classes.opran}>
            <Button
              borderRadius="20px"
              backgroundColor="#1cd42e"
              colorScheme="green"
              color="#fff"
              onClick={onOpen}
            >
              Satın Al
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Satın almak istediğinize emin misiniz?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Miktar,toplam kredinize eklenecektir.</p>
                </ModalBody>

                <ModalFooter>
                  <Button color="red" variant="ghost" mr={3} onClick={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      onSubmit();
                      onClose();
                    }}
                  >
                    Satın Al
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
