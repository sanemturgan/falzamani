import classes from "../../styles/Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
