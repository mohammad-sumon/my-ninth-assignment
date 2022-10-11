import React from 'react';
import AnswerOption from './AnswerOption';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllQuestionDetails = ({qs}) => {
    console.log(qs);
    const {options, question} = qs;

    const notify = () => toast(qs.correctAnswer);
    
    return (
        
        <div className='border-solid border-2 border-orange-200 my-6'>
            <div className='flex justify-center items-center px-4'>
            <p className='text-2xl'>Question: {question}</p>
            <EyeIcon onClick={notify} className="h-6 w-6 text-orange-300 ml-4 cursor-pointer"/>
            <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
            </div>
            
            {
                options.map(ans => <AnswerOption key={ans.id} ans={ans}></AnswerOption>)
            }
        </div>
    );
};

export default AllQuestionDetails;