import React, { useState, useEffect } from "react";
import classes from "../../styles/warlockpage.module.css";
import { FaPlusCircle } from "react-icons/fa";
import CardImg from "../../public/img/falcard.png";
import Image from "next/image";
import Cookies from "universal-cookie";
import router from "next/router";
import GigEditable from "../../components/GigEditable";
import NewGigModal from "../../components/NewGigModal";
import NewgGigEdit from "../../components/NewGigEdit";
import Comment from "../../components/Comment";
import { useRouter } from "next/router";
import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
export default function WarlockPage() {
  const cookies = new Cookies();
  const [gigs, setGigs] = useState([]);
  const [warlockData, setWarlockData] = useState("");

  const warlockGig = async () => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + "/gig/5/all")
      .then((res) => {
        setGigs(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getWarlock = async () => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + `/warlock/me`, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => setWarlockData(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!cookies.get("jwt")) {
      router.replace("/uyegiris");
    }
    getWarlock();
    warlockGig();
  }, []);

  const onAddGig = async (object) => {
    const gigObject = {
      description: object.description,
      price: parseInt(object.price),
      title: object.title,
      duration: object.time,
      categoryId: 5,
    };

    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + "/gig", gigObject, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => console.log(res));
  };

  const onUpdateGig = async (object, id) => {
    const gigObject = {
      description: object.description,
      price: parseInt(object.price),
      title: object.title,
      duration: object.time,
      id: id,
    };

    await axios
      .put(process.env.REACT_APP_CLIENT_API_URL + "/gig", gigObject, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => console.log(res));
  };

  const onUpdateStatus = async (value) => {
    const statusObject = {
      status: value,
    };
    setRadioValue(value);
    await axios.put(
      process.env.REACT_APP_CLIENT_API_URL + "/warlock/status",
      statusObject,
      {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      }
    );
  };
  const onUptadeAbout = (aboutObject) => {
    axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + "/warlock/about",
        { about: aboutObject },
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      )
      .then((res) => console.log(res));
  };

  const [radioValue, setRadioValue] = useState(warlockData.status);
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
    warlockData && (
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
              <h5>{warlockData.name}</h5>
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
                <RadioGroup
                  onChange={(e) => onUpdateStatus(e)}
                  value={radioValue}
                >
                  <Stack direction="row">
                    <Radio value="çevrimiçi">Çevrimiçi</Radio>
                    <Radio value="çevrimdışı">Çevrimdışı</Radio>
                    <Radio value="meşgul">Meşgul</Radio>
                  </Stack>
                </RadioGroup>
                <div className={classes.exp}>
                  <GigEditable
                    onSubmit={onUptadeAbout}
                    value={warlockData.about}
                  />
                </div>
                <NewGigModal onSubmit={onAddGig} />
              </div>
            </div>
          </div>

          <div className={classes.uzmanmid}>
            <div className={classes.options}>
              {gigs.length > 0 &&
                gigs.map((data, index) => {
                  return (
                    <NewgGigEdit
                      key={index}
                      data={data}
                      onSubmit={(e) => onUpdateGig(e, data.id)}
                    />
                  );
                })}
            </div>
          </div>
          <div className={classes.uzmanbtm}>
            <div className={classes.btmhdr}>
              <h4>FALCI YORUMLARI</h4>
            </div>
            <div className={classes.comments}>
              {warlockData.Gig.map((data, index) => {
                return data.Comment.map((commentData, index) => {
                  return <Comment key={index} data={commentData} />;
                });
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export async function getServerSideProps(context) {
  const cookies = new Cookies();
  const paramsData = await context.query;
  const warlockRes = await fetch(process.env.NEXT_APP_API_URL + `/warlock/me`, {
    method: "GET",
    headers: {
      Authorization: `${cookies.get("jwt")}`,
    },
  });
  const warlockData = await warlockRes.json();

  if (!warlockData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      warlockData: null,
    },
  };
}
