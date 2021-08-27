import React, { useState, useEffect } from "react";
import classes from "../../styles/warlockpage.module.css";
import {
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaSearch,
  FaSortDown,
  FaPlusCircle,
} from "react-icons/fa";
import CardImg from "../../public/img/falcard.png";
import Image from "next/image";
import Link from "next/link";
import Cookies from "universal-cookie";
import router from "next/router";
import GigEditable from "../../components/GigEditable";
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
import axios from "axios";
export default function WarlockPage({ warlockData }) {
  const cookies = new Cookies();
  const [gigs, setGigs] = useState([]);

  const warlockGig = async () => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + "/gig/5/all")
      .then((res) => {
        setGigs(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!cookies.get("jwt")) {
      router.replace("/uyegiris");
    }
    warlockGig();
  }, []);

  const onAddGig = async () => {
    const gigObject = {
      description: gigEditableDescription,
      price: 160,
      title: "Yıldız Falı İlan",
      duration: "25",
      warlockId: 5,
      categoryId: 5,
    };

    await axios.post(process.env.REACT_APP_CLIENT_API_URL + "gig", gigObject, {
      headers: {
        Authorization: `${cookies.get("jwt")}`,
      },
    });
  };

  const onUpdateStatus = async (value) => {
    const statusObject = {
      status: value,
    };

    console.log(value);
    // await axios.post(
    //   process.env.REACT_APP_CLIENT_API_URL + "gig/status",
    //   statusObject,
    //   {
    //     headers: {
    //       Authorization: `${cookies.get("jwt")}`,
    //     },
    //   }
    // );
  };
  const onUptadeAbout = (aboutObject) => {
    axios.post(
      process.env.REACT_APP_CLIENT_API_URL + "gig/about",
      { about: aboutObject },
      {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      }
    );
    console.log(aboutObject);
  };
  const [value, setValue] = React.useState("1");
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
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();
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
            {/* <div className={classes.star}>
              <FaStar color="#ECDCF5" size="14px" />
              <p>5/5</p>
            </div> */}

            {/* <div className={classes.cesit}>
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
            </div> */}
            <div className={classes.ustiki}>
              <RadioGroup onChange={(e) => onUpdateStatus(e)} value={value}>
                <Stack direction="row">
                  <Radio value="çevrimiçi">Çevrimiçi</Radio>
                  <Radio value="çevrimdışı">Çevrimdışı</Radio>
                  <Radio value="meşgul">Meşgul</Radio>
                </Stack>
              </RadioGroup>
              <div className={classes.exp}>
                {warlockData.length > 0 &&
                  warlockData.map((data, index) => (
                    <GigEditable
                      key={index}
                      onClick={onUptadeAbout}
                      value={data.about}
                      warlockData={warlockData}
                    />
                  ))}
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
                            <GigEditable value="Başlık Ekleyin" />
                            <FormLabel>İlan Açıklaması</FormLabel>
                            <GigEditable value="Açıklama Ekleyin" />
                            <FormLabel>Seans Süresi</FormLabel>
                            <GigEditable value="Seans Süresi Belirleyin" />
                            <FormLabel>Seans Ücreti</FormLabel>
                            <GigEditable value="Seans Ücreti Belirleyin" />
                          </ModalBody>

                          <ModalFooter>
                            <Button
                              colorScheme="red"
                              mr={2}
                              onClick={onCloseAdd}
                            >
                              Çıkış
                            </Button>

                            <Button
                              onClick={onAddGig}
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
            </div>
          </div>
        </div>

        <div className={classes.uzmanmid}>
          <div className={classes.options}>
            {gigs.map((data, index) => (
              <div key={index} className={classes.option}>
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
                        <GigEditable value={data.title} />
                        <FormLabel>İlan Açıklaması</FormLabel>
                        <GigEditable value={data.description} />
                        <FormLabel>Seans Süresi</FormLabel>
                        <GigEditable value={data.duration} />
                        <FormLabel>Seans Ücreti</FormLabel>
                        <GigEditable value={data.price} />
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
            ))}
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
export async function getServerSideProps(context) {
  const paramsData = await context.query;
  const warlockRes = await fetch(
    process.env.NEXT_APP_API_URL + `/warlock/all`,
    {
      method: "GET",
    }
  );
  const warlockData = await warlockRes.json();

  if (!warlockData) {
    return {
      notFound: true,
    };
  }
  console.log(warlockData);
  return {
    props: {
      warlockData: warlockData.data,
    },
  };
}
