import React, { useState, useEffect } from "react";
import classes from "../styles/BlogEdit.module.css";
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
  Image,
} from "@chakra-ui/react";
import FileBase64 from "react-file-base64";
import axios from "axios";
import Cookies from "universal-cookie";
export default function BlogEdit({ data, onSubmit }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [image, setImage] = useState(data.image);
  const cookies = new Cookies();
  const [files, setFiles] = useState();

  const getFiles = (files) => {
    setFiles(files);
    axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + "/blog/image",
        { image: files.base64 },
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      )

      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data.error));
  };

  return (
    data && (
      <div className={classes.option}>
        <div className={classes.ophdr}>
          <h5>{data.title}</h5>
        </div>
        <div className={classes.opexp}>
          <p>
            <Image
              src={data.image}
              alt="dty"
              objectFit="cover"
              layout="fill"
              htmlWidth="300px"
              borderRadius="30px"
              marginBottom="5px"
            />
          </p>
          <p>{data.description}</p>
        </div>
        <div className={classes.opran}>
          <Button
            color="#281c3b"
            border="2px"
            backgroundColor="inherit"
            onClick={() => {
              onOpen();
            }}
          >
            Blog Düzenle
          </Button>
          <Button
            color="#281c3b"
            border="2px"
            marginLeft="5px"
            backgroundColor="inherit"
          >
            Kaldır
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Blog Düzenle</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormLabel>Blog Başlığı</FormLabel>
                <GigEditable value={title} onSubmit={(e) => setTitle(e)} />
                <FormLabel>Blog Açıklaması</FormLabel>
                <GigEditable
                  value={description}
                  onSubmit={(e) => setDescription(e)}
                />
                <FormLabel>Blog Resim</FormLabel>
                <FileBase64 onDone={getFiles} />

                <Image
                  src={files?.base64}
                  alt="dty"
                  objectFit="cover"
                  layout="fill"
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="red" variant="ghost">
                  Sil
                </Button>
                <Button
                  colorScheme="green"
                  variant="ghost"
                  onClick={() => {
                    onSubmit({ title, description, image });
                    onClose();
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
    )
  );
}