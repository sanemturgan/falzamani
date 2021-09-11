import React, { useState, useEffect } from "react";
import classes from "../../styles/adminblog.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Link from "next/dist/client/link";
import { FaFileExport } from "react-icons/fa";
import Cookies from "universal-cookie";
import axios from "axios";
import NewBlogModal from "../../components/NewBlogModal";
import BlogEdit from "../../components/BlogEdit";
import withAdmin from "../../HOC/withAdmin";
function AdminBlog() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const [blogs, setBlogs] = useState([]);
  const cookies = new Cookies();

  const adminBlog = async () => {
    await axios
      .get(process.env.REACT_APP_CLIENT_API_URL + `/blog/all`, {
        headers: {
          Authorization: `${cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        setBlogs(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!cookies.get("jwt")) {
      router.replace("/adminlogin");
    }
    adminBlog();
  }, []);

  return (
    <div className="adminblog">
      <div className={classes.kariyerhdr}>
        <h4>BLOG DÜZENLEME</h4>
      </div>
      <div className={classes.blogadmin}>
        <div className={classes.blogform}>
          <NewBlogModal adminBlog={adminBlog} />
        </div>
        <div className={classes.options}>
          {blogs.length > 0 &&
            blogs.map((data, index) => {
              console.log(data);
              return (
                <BlogEdit
                  key={index}
                  data={data}
                  adminBlog={adminBlog}
                  onSubmit={(e) => onUpdateBlog(e, data.id)}
                />
              );
            })}
        </div>
        <div className={classes.categories}>
          <ul className={classes.catalog}>
            <li className={classes.flt}>
              <Link href="/adminpage">
                <a>Hesabım</a>
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
          </ul>
        </div>
      </div>
    </div>
  );
}
export default withAdmin(AdminBlog);
