import React from "react";
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";

const HomeDetails = ({ quiz, status }) => {
  const { id, logo, name, total } = quiz;
  //   console.log(status);
  return (
    <div className="card w-96 mx-auto bg-orange-100 shadow-xl rounded-md">
      <figure className="">
        <img className="w-full mb-4 rounded-md" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body flex justify-around items-center bg-white py-4">
        <h2 className="card-title text-xl text-orange-700 font-bold">{name}</h2>
        <p className="text-sm text-orange-700">Total Quiz: {total}</p>
        <div className="card-actions justify-end">
          <Link className="btn bg-orange-400 p-2 rounded-md flex items-center text-white" to={`/quiz/${id}`}>
            Start Practice
            <ArrowLongRightIcon className="h-6 w-6 ml-2"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
