import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-lg w-full h-full relative">
        <section className="fixed w-72 flex flex-col "> Left sideBar </section>
        <main> Home Timeline </main>
        <section> Right Section </section>
      </div>
    </div>
  );
};

export default page;
