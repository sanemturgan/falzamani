import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function ReDirectLoader() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/uyegiris");
  }, []);
  return (
    <div>
      <span className="redirectSpan" style={{ color: "white" }}>
        Yönlendiriliyorsunuz...
      </span>
    </div>
  );
}
