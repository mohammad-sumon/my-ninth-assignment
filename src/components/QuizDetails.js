import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuestionDetails from './AllQuestionDetails';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const {name, total, questions} = quiz.data
    console.log(quiz);
    return (
        <div>
            <h1 className='text-3xl font-bold text-orange-500 my-4'>Quiz of {name}</h1>
                <p>Total Questions: {total}</p>
                <div className=''>
                {
                    questions.map(qs => <AllQuestionDetails key={qs.id} qs={qs}></AllQuestionDetails>)
                }
                </div>
        </div>
    );
};

export default QuizDetails;