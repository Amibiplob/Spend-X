"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import notFoundImg from "@/assets/notFoundImg.json";
import { BsArrowLeft } from "react-icons/bs";
const notFound = () => {
  return (
    <div className="flex flex-col items-center pb-10">
      <Lottie
        className="md:w-2/4"
        animationData={notFoundImg}
        loop={true}
        placeholder="blur"
      />
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
          Opps Error Page
        </h1>
        <Link href="/" className="text-lg">
          <button className="flex items-center gap-1 text-slate-800 bg-slate-400 py-2 px-3 rounded-xl">
            <BsArrowLeft />
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
