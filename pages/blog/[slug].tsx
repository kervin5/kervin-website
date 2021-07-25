import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface Props {}

const index = (props: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (typeof window !== "undefined" && slug) {
      window.location.replace(`https://kervin.blog/${slug}`);
    }
  }, [slug]);
  return <div>Redirigiendo</div>;
};

export default index;
