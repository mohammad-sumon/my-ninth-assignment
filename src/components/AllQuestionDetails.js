import React from 'react';
import AnswerOption from './AnswerOption';

const AllQuestionDetails = ({qs}) => {
    console.log(qs);
    const {options, question} = qs;
    return (
        <div className='border-solid border-2 border-orange-200 my-6'>
            <p className='text-2xl'>Question: {question}</p>
            {
                options.map(ans => <AnswerOption key={ans.id} ans={ans}></AnswerOption>)
            }
        </div>
    );
};

export default AllQuestionDetails;