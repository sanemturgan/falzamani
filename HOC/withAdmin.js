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
    const router = useRouter();
    const [userData, setUserData] = useState();
    setUserData(cookies.get("userData"));
    if (cookies.get("jwt") === undefined && userData?.role === "ADMIN") {
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
