import React from "react";

import LeftSidebar from "@/components/LeftSidebar";

const page = () => {
  return (
    <div className="w-full h-full  text-white flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-lg w-full h-full relative ">
        <LeftSidebar />
        <main className="ml-[275px] p-6 w-[600px] h-full min-h-screen flex-col  border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h2 className="text-2xl font-bold "> Home </h2>
          <div className="borderd-t-[0.5px] borderd-b-[0,5px] h-32 relative "></div>
        </main>
        {/* <section> </section> */}
      </div>
    </div>
  );
};

export default page;
