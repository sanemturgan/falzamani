import React, { useState, useEffect } from "react";
import classes from "../styles/warlockpage.module.css";
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
  Radio,
  RadioGroup,
  Stack,
  FormLabel,
} from "@chakra-ui/react";

export default function NewGigModal({ data, onSubmit }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();
  const [title, setTitle] = useState("Başlık Ekleyin");
  const [description, setDescription] = useState("Açıklama Ekleyin");
  const [time, setTime] = useState("Seans Süresi Belirleyin");
  const [price, setPrice] = useState("Seans Ücreti Belirleyin");
  return (
    <div className={classes.option}>
      <div className={classes.ophdr}>
        <h5>{data.title}</h5>
      </div>
      <div className={classes.opexp}>
        <p>{data.description}</p>
        <p>
          <span>{data.duration}</span>
        </p>
        <p>
          <span>{data.price}</span>
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
              <FormLabel>İlan Başlığı</FormLabel>
              <GigEditable value={title} onSubmit={(e) => setTitle(e)} />
              <FormLabel>İlan Açıklaması</FormLabel>
              <GigEditable
                value={description}
                onSubmit={(e) => setDescription(e)}
              />
              <FormLabel>Seans Süresi</FormLabel>
              <GigEditable value={time} onSubmit={(e) => setTime(e)} />
              <FormLabel>Seans Ücreti</FormLabel>
              <GigEditable value={price} onSubmit={(e) => setPrice(e)} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="ghost">
                Sil
              </Button>
              <Button
                colorScheme="green"
                variant="ghost"
                onClick={() => {
                  onSubmit({ title, description, time, price });
                  onCloseAdd();
                }}
              >
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
  );
}
