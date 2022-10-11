import React from 'react';
import { StopCircleIcon } from '@heroicons/react/24/solid';

const Options = ({option}) => {
    console.log(option);
    return (
        <div className=' items-center text-center'>
            
            <p className='bg-orange-100 m-4 p-4 rounded-md cursor-pointer hover:bg-orange-300'>
            <StopCircleIcon className="h-6 w-6 text-orange-300 hover:text-black"/>
                {option}</p>
        </div>
    );
};

export default Options;