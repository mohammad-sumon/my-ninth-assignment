import React from "react";
import { useLoaderData } from "react-router-dom";
import Image from "../quiz.jpg";
import HomeDetails from "./HomeDetails";

const Home = () => {
  const quizes = useLoaderData();
  const { data, status } = quizes;
  // console.log(data);

  return (
    <div>
      <div className="">
        <h1 className="font-semibold text-3xl mt-4">Welcome to Quiz Hub</h1>
        <img className="w-1/4 mx-auto rounded-md my-4" src={Image} alt="" />
      </div>
      <div className="flex flex-col my-12 gap-12">
        {data.map((quiz) => (
          <HomeDetails key={quiz.id} quiz={quiz} status={status}></HomeDetails>
        ))}
      </div>
    </div>
  );
};

export default Home;
