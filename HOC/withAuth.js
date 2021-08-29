import { useRouter } from "next/router";
import Cookies from "universal-cookie";

function WithAuth(WrappedComponent) {
  const cookies = new Cookies();

  // checks whether we are on client / browser or server.
  if (typeof window !== "undefined") {
    const accessToken = cookies.get("jwt");

    // If there is no access token we redirect to "/" page.
    if (!accessToken) {
      router.replace("/");
      return null;
    }

    // If this is an accessToken we just render the component that was passed with all its props

    return <WrappedComponent />;
  }
  return null;
}

export default WithAuth;
