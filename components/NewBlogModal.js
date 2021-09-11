import React, { useState, useEffect } from "react";
import classes from "../styles/NewBlogModal.module.css";
import GigEditable from "../components/GigEditable";
import axios from "axios";
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
  FaUserAlt,
} from "@chakra-ui/react";
import Cookies from "universal-cookie";
import FileBase64 from "react-file-base64";
import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
  FaPlusCircle,
} from "react-icons/fa";
export default function NewBlogModal({ adminBlog }) {
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();
  const cookies = new Cookies();
  const [title, setTitle] = useState("Başlık Ekleyin");
  const [description, setDescription] = useState("Açıklama Ekleyin");
  const [files, setFiles] = useState();

  const getFiles = (files) => {
    setFiles(files);
  };

  const onSubmit = async () => {
    const blogObject = {
      title: title,
      image: files.base64,
      description: description,
    };

    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + "/blog", blogObject, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          window.alert("Blog Eklendi");
        }
        console.log(res);
        adminBlog();
      })
      .catch((err) => {
        if (err.response.data) {
          window.alert(err.response.data.error);
        }

        console.log(err.response.data.error);
      });
  };

  console.log(files);
  return (
    <div className={classes.warlockAdvert}>
      <div className={classes.options}>
        <div className={classes.optionAdvert}>
          <div className={classes.ophdr}>
            <h5>Blog Ekle</h5>
          </div>
          <div className={classes.opexp}>
            <Button
              backgroundColor="inherit"
              onClick={() => {
                onOpenAdd();
              }}
            >
              <FaPlusCircle color="#281c3b" size="20px" />
            </Button>
            <Modal isOpen={isOpenAdd} onClose={onCloseAdd}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Blog Ekle</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormLabel>Blog Başlığı</FormLabel>
                  <GigEditable value={title} onSubmit={(e) => setTitle(e)} />
                  <FormLabel>Blog Açıklaması</FormLabel>
                  <GigEditable
                    value={description}
                    onSubmit={(e) => setDescription(e)}
                  />
                  <FormLabel>Blog Fotoğraf</FormLabel>
                  <FileBase64 onDone={getFiles} />

                  {files && (
                    <Image
                      src={files?.base64}
                      alt="dty"
                      objectFit="cover"
                      layout="fill"
                    />
                  )}
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="red" mr={2} onClick={onCloseAdd}>
                    Çıkış
                  </Button>

                  <Button
                    onClick={() => {
                      onSubmit();
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
