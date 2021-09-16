import React, { useState, useEffect } from "react";
import classes from "../../styles/warlockpage.module.css";
import { FaUserAlt } from "react-icons/fa";
import CardImg from "../../public/img/falcard.png";
//import Image from "next/image";
import Cookies from "universal-cookie";
import router from "next/router";
import GigEditable from "../../components/GigEditable";
import NewGigModal from "../../components/NewGigModal";
import NewgGigEdit from "../../components/NewGigEdit";
import Comment from "../../components/Comment";
import { useRouter } from "next/router";
import Link from "next/link";
import withWarlock from "../../HOC/withWarlock";
import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import FileBase64 from "react-file-base64";
function WarlockPage() {
  const cookies = new Cookies();
  const [gigs, setGigs] = useState([]);
  const [warlockData, setWarlockData] = useState();

  const getWarlock = async () => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + `/warlock/me`, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then(async (res) => {
        setWarlockData(res.data.data);
        await axios
          .get(
            process.env.REACT_APP_CLIENT_API_URL +
              `/gig/${res.data.data.id}/all`
          )
          .then((res) => {
            setGigs(res.data.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!cookies.get("jwt")) {
      router.replace("/uyegiris");
    }
    getWarlock();
  }, []);

  const onAddGig = async (object) => {
    const gigObject = {
      description: object.description,
      price: parseInt(object.price),
      title: object.title,
      duration: object.time,
      categoryId: parseInt(object.category),
    };

    await axios
      .post(process.env.REACT_APP_CLIENT_API_URL + "/gig", gigObject, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        window.alert(err.response.data.error);
      });
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
      .then((res) => {
        console.log(res);
        getWarlock();
      });
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

  const [radioValue, setRadioValue] = useState(warlockData?.status);
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

  const logOut = () => {
    cookies.remove("jwt");
    cookies.remove("userData");
    router.replace("/uyegiris");
  };

  const [files, setFiles] = useState();

  const getFiles = (files) => {
    setFiles(files);
    axios
      .put(
        process.env.REACT_APP_CLIENT_API_URL + "/warlock/image",
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
    <div className="WarlockPage">
      <div className={classes.uzmanhdr}>
        <h4>FALCI PANELİM</h4>
      </div>
      <div className={classes.uzmangenel}>
        <div className={classes.uzmantop}>
          <div className={classes.ustbir}>
            <div className={classes.cardimg}>
              <FileBase64 onDone={getFiles} />
              {warlockData?.image ? (
                <Image
                  src={files?.base64 || warlockData.image}
                  alt="dty"
                  objectFit="contain"
                  layout="fill"
                  borderRadius="full"
                  boxSize="150px"
                />
              ) : (
                <FaUserAlt fontSize="90px" />
              )}
            </div>
            <h5>{warlockData?.name}</h5>
            <div className={classes.status}>(ONAYLI HESAP)</div>
            <div className={classes.statustwo}>(ONAY BEKLİYOR)</div>
            <div className={classes.exit}>
              <Link href="/uyegiris">
                <a>
                  <button onClick={logOut}>Çıkış Yap</button>
                </a>
              </Link>
            </div>

            <div className={classes.ustiki}>
              <div className={classes.radio}>
                <RadioGroup
                  onChange={(e) => onUpdateStatus(e)}
                  value={radioValue}
                >
                  <Stack direction="row" wrap="wrap" justifyContent="center">
                    <Radio value="çevrimiçi" size="sm">
                      Çevrimiçi
                    </Radio>
                    <Radio value="çevrimdışı" size="sm">
                      Çevrimdışı
                    </Radio>
                    <Radio value="meşgul" size="sm">
                      Meşgul
                    </Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div className={classes.exp}>
                {warlockData && (
                  <GigEditable
                    onSubmit={onUptadeAbout}
                    value={warlockData.about}
                  />
                )}
              </div>
              <NewGigModal onSubmit={onAddGig} />
            </div>
          </div>
        </div>

        <div className={classes.uzmanmid}>
          <div className={classes.options}>
            {gigs &&
              gigs.map((data, index) => {
                return (
                  <NewgGigEdit
                    key={index}
                    data={data}
                    onSubmit={(e) => onUpdateGig(e, data.id)}
                    getWarlock={getWarlock}
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
            {warlockData &&
              warlockData.Gig.map((data, index) => {
                return data.Comment.map((commentData, index) => {
                  return <Comment key={index} data={commentData} />;
                });
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withWarlock(WarlockPage);
