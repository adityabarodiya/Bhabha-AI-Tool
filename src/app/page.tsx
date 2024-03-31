'use client'


import handleSubmit from "./helpers/onClickFunctons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
          <div className="mb-4 text-black text-2xl font-bold ">Bhabha AI</div>
          <input
            className="border text-black border-gray-300 rounded-md px-3 py-2 mr-2 w-full"
            type="text"
            placeholder="Enter something"
          ></input>
          <Link href="/questions">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
