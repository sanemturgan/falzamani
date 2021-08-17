import React, { useState, useEffect } from "react";
import classes from "../styles/warlockpage.module.css";
import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
  FaPlusCircle,
} from "react-icons/fa";
import CardImg from "../public/img/falcard.png";
import Image from "next/image";
import Link from "next/link";

import GigEditable from "../components/GigEditable";
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
function WarlockPage() {
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<p>check</p>} {...getSubmitButtonProps()} />
        <IconButton icon={<p>closes</p>} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<p>edit</p>} {...getEditButtonProps()} />
      </Flex>
    );
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="WarlockPage">
      <div className={classes.uzmanhdr}>
        <h4>FALCI PANELİM</h4>
      </div>
      <div className={classes.uzmangenel}>
        <div className={classes.uzmantop}>
          <div className={classes.ustbir}>
            <div className={classes.cardimg}>
              <Image
                src={CardImg}
                alt="teller"
                objectFit="contain"
                layout="fill"
              />
              <FaPlusCircle color="#281c3b" size="20px" />
            </div>
            <h5>Luna</h5>
            <div className={classes.status}>(ONAYLI HESAP)</div>
            <div className={classes.statustwo}>(ONAY BEKLİYOR)</div>
            <div className={classes.star}>
              <FaStar color="#ECDCF5" size="14px" />
              <p>5/5</p>
            </div>

            <div className={classes.cesit}>
              <Link href="/falturleri">
                <a>Kahve Falı</a>
              </Link>
              <Link href="/falturleri">
                <a>El Falı</a>
              </Link>
              <Link href="/falturleri">
                <a>Katina Aşk Falı</a>
              </Link>
              <Link href="/falturleri">
                <a>Su Falı</a>
              </Link>
              <Link href="/falturleri">
                <a>Tarot Falı</a>
              </Link>
            </div>
            <div className={classes.ustiki}>
              <div className={classes.exp}>
                <GigEditable value={"Kendinizden bahsedin :)"} />
              </div>
              <div className={classes.warlockAdvert}>
                <div className={classes.options}>
                  <div className={classes.optionAdvert}>
                    <div className={classes.ophdr}>
                      <h5>İlan Ekle</h5>
                    </div>
                    <div className={classes.opexp}>
                      <Button
                        backgroundColor="inherit"
                        onClick={() => {
                          console.log(isOpen);
                          onOpen();
                        }}
                      >
                        <FaPlusCircle color="#281c3b" size="20px" />
                      </Button>
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>İlan Ekle</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <GigEditable value="İlan Başlığı" />
                            <GigEditable value="İlan Açıklaması" />
                            <GigEditable value="Seans Zamanı" />
                            <GigEditable value="Seans Fiyatı" />
                          </ModalBody>

                          <ModalFooter>
                            <Button colorScheme="red" mr={2} onClick={onClose}>
                              Çıkış
                            </Button>

                            <Button colorScheme="green" variant="ghost">
                              Kaydet
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.uzmanmid}>
          <div className={classes.options}>
            <div className={classes.option}>
              <div className={classes.ophdr}>
                <h5>Zihin Okuma Seansı</h5>
              </div>
              <div className={classes.opexp}>
                <p>
                  Telepati, karşı tarafın düşüncelerini okuma, değiştirme ve
                  kontrol etme yeteneğidir. Ben, merak ettiğiniz kişilerin
                  beynine girip düşüncelerini sizlerle net bir şekilde
                  paylaşacağım.
                </p>
                <p>
                  <span>Seans 25 Dakikadır.</span>
                </p>
                <p>
                  <span>160 KREDİ</span>
                </p>
              </div>
              <div className={classes.opran}>
                <Button
                  color="#281c3b"
                  border="2px"
                  backgroundColor="inherit"
                  onClick={() => {
                    console.log(isOpen);
                    onOpen();
                  }}
                >
                  İlanı Düzenle
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>İlan Düzenle</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <GigEditable value="İlan Başlığı" />
                      <GigEditable value="İlan Açıklaması" />
                      <GigEditable value="Seans Zamanı" />
                      <GigEditable value="Seans Fiyatı" />
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="red" variant="ghost">
                        Sil
                      </Button>
                      <Button colorScheme="green" variant="ghost">
                        Kaydet
                      </Button>
                      <Button colorScheme="red" mr={2} onClick={onClose}>
                        Çıkış
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.uzmanbtm}>
          <div className={classes.btmhdr}>
            <h4>FALCI YORUMLARI</h4>
          </div>
          <div className={classes.comments}>
            <div className={classes.comment}>
              <div className={classes.ctxt}>
                <p>
                  Sevgili Luna hanım. Her şey söylediğiniz gibi oldu. Müthiş
                  ötesi....
                </p>
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
            <div className={classes.comment}>
              <div className={classes.ctxt}>
                <p>
                  Sevgili Luna hanım. Her şey söylediğiniz gibi oldu. Müthiş
                  ötesi....
                </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarlockPage;
