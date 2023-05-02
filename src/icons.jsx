import React from 'react';
import {Facebook, Instagram, Reddit, EnvelopePlus} from 'react-bootstrap-icons';

function Icons(){
    return(
        <>
            
            <div className='flex justify-center items-center text-center mt-3'>
                <a href='https://www.facebook.com/Futurama/'><Facebook size={30} className='text-blue-600 bg-white rounded-full' /></a>
                
                <a href='https://www.instagram.com/dpablogallegos/'><Instagram size={30} className='text-white ml-3 bg-purple-600 rounded-lg'></Instagram></a>

                <a href='https://www.reddit.com/r/futurama/'><Reddit size={30} className='text-orange-600 ml-3 bg-white rounded-full'/></a>
                
                <a href='mailto: dpablo1916@gmail.com'><EnvelopePlus size={30} className='ml-3 text-black'/></a>
            </div> 
        </>
    );
}

export default Icons; 