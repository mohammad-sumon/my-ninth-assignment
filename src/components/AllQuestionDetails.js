import React from 'react';
import AnswerOption from './AnswerOption';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllQuestionDetails = ({qs}) => {
    // console.log(qs);
    const {options, question, correctAnswer} = qs;

    const notify = () => toast(correctAnswer);
    
    return (
        
        <div className='border-solid border-2 border-orange-200 my-10 rounded-md'>
            <div className='flex justify-center items-center px-4'>
            <p className='text-2xl mt-4'>Question: {question}</p>
            <EyeIcon onClick={notify} className="h-8 w-8 text-orange-300 ml-4 mt-4 cursor-pointer"/>
            <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
            </div>
            
            {
                options.map(ans => <AnswerOption key={ans.id} ans={ans} qs={qs}></AnswerOption>)
            }
        </div>
    );
};

export default AllQuestionDetails;