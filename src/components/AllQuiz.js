import React from 'react';
import Options from './Options';

const AllQuiz = ({allQuestion}) => {
    // console.log(allQuestion);
    const {question, options} = allQuestion;
    return (
        <div className='my-10 border-solid border-2 border-orange-600 p-4 rounded-md'>
            <p className='text-2xl'>Question: {question}</p>
            <div className=''>
            {
                options.map(option => <Options key={option.index} option={option}></Options>)
            }
            </div>
            
        </div>
    );
};

export default AllQuiz;