import React from "react";

const HomeDetails = ({ quiz, status }) => {
  const { logo, name, total } = quiz;
  //   console.log(status);
  return (
    <div className="card w-96 mx-auto bg-orange-100 shadow-xl">
      <figure className="p-4">
        <img className="w-full mb-4 rounded-md" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body flex justify-around bg-white py-4">
        <h2 className="card-title text-xl text-orange-700">{name}</h2>
        <p className="text-xl text-orange-700">Total Quiz: {total}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-600 p-2 rounded-md">
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
