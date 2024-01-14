import React from "react";

import LeftSidebar from "@/components/LeftSidebar";

const page = () => {
  return (
    <div className="w-full h-full  text-white flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-lg w-full h-full relative ">
        <LeftSidebar />
        <main className="ml-[275px] "> Feed</main>
        <section> </section>
      </div>
    </div>
  );
};

export default page;
