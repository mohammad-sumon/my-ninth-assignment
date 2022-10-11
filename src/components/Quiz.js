import React from "react";
import { useLoaderData } from "react-router-dom";
import AllQuiz from "./AllQuiz";

const Quiz = () => {
  const quiz = useLoaderData();
  const allQuiz = quiz.data.questions;
  // console.log(allQuiz);
  // const {name} = quiz.data;
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-500">All Quizes are here. YAY!!!</h2>
      <div>
          {
            allQuiz.map(allQuestion => <AllQuiz key={allQuestion.id} allQuestion={allQuestion}></AllQuiz>)
          }
      </div>
      
      
    </div>
  );
};

export default Quiz;
