import React, { useState } from "react";
import GigEditable from "./GigEditable";
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
import StarRatings from "react-star-ratings";
import axios from "axios";
import Cookies from "universal-cookie";
export default function CustomerHistory({ classes, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const cookies = new Cookies();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const onSubmit = async (id) => {
    let commentObject = {
      text: description,
      rate: rating,
      gigId: data.Gig.id,
    };

    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + `/comment`, commentObject, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then(async (res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <li className={classes.btminfolist}>
      <div className={classes.infofal}>
        <h6>İlan Başlığı: {data.Gig.title}</h6>
        <h6>İlan Türü: {data.Gig.category.name}</h6>
      </div>
      <div className={classes.payanddetails}>
        <div className={classes.addComment}>
          <Button
            backgroundColor="inherit"
            color="white"
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
                <GigEditable
                  value={description}
                  onSubmit={(e) => setDescription(e)}
                />
                <StarRatings
                  rating={rating}
                  starRatedColor="purple"
                  starEmptyColor="lightgray"
                  starHoverColor="purple"
                  changeRating={(newRating) => {
                    setRating(newRating);
                    console.log(newRating);
                  }}
                  numberOfStars={5}
                  name="rating"
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="red" mr={2} onClick={onClose2}>
                  Çıkış
                </Button>
                <Button
                  colorScheme="green"
                  variant="ghost"
                  onClick={() => {
                    onSubmit();
                    onClose();
                  }}
                >
                  Gönder
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className={classes.details}>
          <Button backgroundColor="inherit" color="white" onClick={onOpen}>
            Detay Oku
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Randevu Detayı</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <h6>İlan Başlığı: {data.Gig.title}</h6>
                <h6>İlan Türü: {data.Gig.category.name}</h6>
                <h6>Danışman Adı: {data.Warlock.name}</h6>
                <h6>Kredi: {data.credit} Kredi</h6>
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
  );
}
