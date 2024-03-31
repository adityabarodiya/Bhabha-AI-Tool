"use client";
// Page.js
import React, { useState, useEffect } from "react";
import programmingQuestions from "@/questionAns";
import axios from "axios";

function Page() {
  const [likes, setLikes] = useState(
    new Array(programmingQuestions.length).fill(false)
  );
  const [data, setData] = useState([]);
  const [likedQuestions, setLikedQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/test/result"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // empty dependency array to run only once

  useEffect(() => {
    const filteredQuestions = data.filter((item, index) => likes[index]);
    setLikedQuestions(filteredQuestions);
  }, [likes, data]);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };


  // to download filtered questions

  const downloadFilteredQuestions = () => {
    const json = JSON.stringify(likedQuestions);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filtered_questions.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-black font-bold">BhaBha Ai</h1>
      <br />
      <div className="flex items-center">
        <h2 className="text-xl font-bold">Programming Questions</h2>
        <button className="ml-4 px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded" onClick={downloadFilteredQuestions}>
          Download Liked Questions
        </button>
      </div>

      <br />
      <ul>
        {data.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 my-4 rounded-md">
            <li className="text-lg font-semibold text-black">
              {item.question}
            </li>
            <li className="text-gray-700">{item.ans}</li>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleLike(index)}
            >
              {likes[index] ? "Liked" : "Like"}
            </button>
          </div>
        ))}
      </ul>

      <h2 className="text-xl font-bold">Liked Questions</h2>
      <br />
      <ul>
        {likedQuestions.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 my-4 rounded-md">
            <li className="text-lg font-semibold text-black">
              {item.question}
            </li>
            <li className="text-gray-700">{item.ans}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Page;
