import Image from "next/image";
import React from "react";
import twitter from "../public/images/twitter.png";

export default function page() {
  return (
    <>
      <Image alt="image" src={twitter} width={300} height={300} />
    </>
  );
}
