import FeedSection from "@/components/FeedSection";
import LeftSidebar from "../components/LeftSidebar";
import FollowBar from "@/components/FollowBar";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";

import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function Home({ pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <div className="h-screen bg-black">
        <div
          className="
        container 
      h-full 
      mx-auto 
      xl:px-30 
      max-w-6xl "
        >
          <div className="grid grid-cols-4 h-full">
            <LeftSidebar />
            <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800 ">
              <FeedSection />
            </div>
            <FollowBar />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
