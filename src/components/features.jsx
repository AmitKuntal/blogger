import React from 'react';
import SignIn from './signin';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";



function Features() {
  return ( 
      <div className="flex flex-col items-center w-auto justify-center">
        <div className="w-4/5 md:w-2/4 container  flex items-center justify-center">
          <button className="p-4 pr-4 primarybuttoncolor w-full md:w-2/4 flex justify-center">
           <SignIn count ={2} text="Get Started" />
          </button>
        </div>
        <div className="container w-4/5 md:w-2/4 flex flex-col items-center justify-center mt-4">
              Already have an account?
            <button>
              <SignIn count ={1} text="Get Started" color="text-green-400"/>
            </button>
        </div>
        <div className="container w-auto mt-16 flex flex-col sm:flex-col md:flex-row justify-center mt-4">
            <div className="text-gray-800 p-2 pr-4 flex items-center text-lg m-2">
                <div className="items-center flex justify-center text-white bg-green-600 mr-2 rounded-full text-xl w-8 h-8 shadow-2xl">
                  <FontAwesomeIcon icon={faCheck} color={'white'} size={'md'}/>
                </div>
                World-class publications.
            </div>
            <div className="text-gray-800 p-2 pr-4 flex items-center text-lg m-2">
                <div className="items-center flex justify-center text-white bg-green-600 mr-2 rounded-full text-xl w-8 h-8 shadow-2xl">
                  <FontAwesomeIcon icon={faCheck} color={'white'} size={'md'}/>
                </div>
                Undiscovered voices.
            </div>
            <div className="text-gray-800 p-2 pr-4 flex items-center text-lg m-2">
                <div className="items-center flex justify-center text-white bg-green-600 mr-2 rounded-full text-xl w-8 h-8 shadow-2xl">
                  <FontAwesomeIcon icon={faCheck} color={'white'} size={'sm'}/>
                </div>
                Topics you love.
            </div>
            <div className="text-gray-800 p-2 pr-4 flex items-center text-lg m-2 font-bold ">
               All on Medium, all for you.
            </div>
        </div>
      </div>
  );
}

export default Features;

