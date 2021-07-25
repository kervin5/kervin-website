import React, { useEffect } from "react";

interface Props {}

const Index = (props: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("https://kervin.blog");
    }
  }, []);
  return <div>Redirigiendo</div>;
};

export default Index;
