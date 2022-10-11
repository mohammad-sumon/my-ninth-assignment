import React from 'react';
import { StopCircleIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AnswerOption = ({ans, qs}) => {
    // console.log(qs);

    const notify = (ans) => {
        if(qs.correctAnswer === ans){
            toast('Congratulations. Correct Answer')
        }
        else{
            toast('Sorry. Wrong Answer')
        }     
    };

    return (
        <div>
            <div className='items-center text-center'>
            
            <p onClick={()=> notify(ans)} className='bg-orange-100 m-4 p-4 rounded-md cursor-pointer hover:bg-orange-300'>
            <StopCircleIcon className="h-6 w-6 text-orange-300"/>
                {ans}</p>
                <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
        </div>
        </div>
    );
};

export default AnswerOption;