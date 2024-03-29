"use client";
import Image from "next/image";
import handleSubmit from "./helpers/onClickFunctons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex m-5">
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mr-2"
          type="text"
          placeholder="Enter something"
        ></input>
        <Link href= '/questions' >

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>

        </Link>
        
      </div>
    </>
  );
}
