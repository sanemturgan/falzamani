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

import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
  FaPlusCircle,
} from "react-icons/fa";
export default function NewGigModal({ onSubmit }) {
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
                console.log(isOpenAdd);
                onOpenAdd();
              }}
            >
              <FaPlusCircle color="#281c3b" size="20px" />
            </Button>
            <Modal isOpen={isOpenAdd} onClose={onCloseAdd}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>İlan Ekle</ModalHeader>
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
                  <Button colorScheme="red" mr={2} onClick={onCloseAdd}>
                    Çıkış
                  </Button>

                  <Button
                    onClick={() => {
                      onSubmit({ title, description, time, price });
                      onCloseAdd();
                    }}
                    colorScheme="green"
                    variant="ghost"
                  >
                    Ekle
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
