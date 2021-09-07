import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "../../styles/adminpage.module.css";
import Link from "next/dist/client/link";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import withAdmin from "../../HOC/withAdmin";
import FileBase64 from "react-file-base64";
import { FaUserAlt } from "react-icons/fa";
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
  Image,
} from "@chakra-ui/react";
function Adminpage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [adminInfo, setAdminInfo] = useState("");
  const cookies = new Cookies();
  const router = useRouter();
  const logOut = () => {
    cookies.remove("jwt");
    cookies.remove("userData");
    router.replace("/adminlogin");
  };

  useEffect(() => {
    async function fetchData() {
      if (cookies.get("jwt")) {
        await axios
          .get(process.env.REACT_APP_CLIENT_API_URL + `/admin/me`, {
            headers: {
              Authorization: `${cookies.get("jwt")}`,
            },
          })
          .then((res) => {
            setAdminInfo(res.data.data);
          })
          .catch((err) => setNotification(err.response.data.error));
      } else {
        router.replace("/");
      }
    }
    fetchData();
  }, []);

  const [files, setFiles] = useState();

  const getFiles = (files) => {
    setFiles(files);
    axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + "/admin/image",
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

  const changePassword = async (e) => {
    e.preventDefault();
    let userObject = {
      password,
      rePassword,
    };

    await axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + `/admin/reset-password`,
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
        window.alert(err.response.data.error);
      });
  };

  return (
    <div className="adminpage">
      <div className={classes.kariyerhdr}>
        <h4>Admin Hesabım</h4>
      </div>
      <div className={classes.adminmain}>
        <div className={classes.admininfo}>
          <div className={classes.adminImage}>
            <FileBase64 onDone={getFiles} />
            {adminInfo.image ? (
              <Image
                src={files?.base64 || adminInfo.image}
                alt="dty"
                objectFit="cover"
                layout="fill"
                borderRadius="full"
                boxSize="150px"
              />
            ) : (
              <FaUserAlt fontSize="90px" />
            )}
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>Kullanıcı Adı:</p>
              <p>{adminInfo.name}</p>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.user}>
              <p>E-Mail:</p>
              <p>{adminInfo.email}</p>
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
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.flt}>
              <Link href="/adminblog">
                <a>Blog Düzenle</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/danisman">
                <a>Danışmanlar</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <Link href="/adminkredi">
                <a>Kredi Düzenle</a>
              </Link>
            </li>
            <li className={classes.flt}>
              <div className={classes.exit}>
                <button onClick={logOut}>Çıkış Yap</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default withAdmin(Adminpage);
