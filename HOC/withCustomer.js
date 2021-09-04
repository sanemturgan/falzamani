import Cookies from "universal-cookie";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const ReDirectLoader = dynamic(() => import("./ReDirectLoader"), {
  ssr: false,
});

const withCustomer = (Component) => {
  const Auth = (props) => {
    const cookies = new Cookies();
    const router = useRouter();
    if (
      cookies.get("jwt") === undefined ||
      cookies.get("userData").role === "ADMIN" ||
      cookies.get("userData").role === "WARLOCK"
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

export default withCustomer;
