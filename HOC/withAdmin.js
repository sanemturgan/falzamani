import { useEffect } from "react";
import Cookies from "universal-cookie";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const ReDirectLoader = dynamic(() => import("./ReDirectLoader"), {
  ssr: false,
});

const withAdmin = (Component) => {
  const Auth = (props) => {
    const cookies = new Cookies();

    if (
      cookies.get("jwt") === undefined ||
      JSON.parse(localStorage.getItem("userData")).role === "CUSTOMER" ||
      JSON.parse(localStorage.getItem("userData")).role === "WARLOCK"
    ) {
      return <ReDirectLoader />;
    }
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
};

export default withAdmin;
