import React from 'react';

function Story() {
  return ( 
        <div className="flex mb-6 items-center">
            <div className="w-3/4 flex flex-col">
              <span className="text-xl sm:text-xl md:text-xl lg:text-2xl">
                The Third Crisis of 2020 is Almost Here
              </span>
              <span className=" text-gray-600 text-sm">
                 We recently joined a new project with heavy LiveData usage, everywhere. Here’s what we learned about LiveData, Threading and Repositories.
              </span>
              <span className="text-gray-800 text-sm mt-4">
                 Michael Arceneaux in LEVEL
              </span>
              <div className="text-gray-600">
                <span className="text-xs">
                   Jul 15 .
                </span>
                <span className="ml-4 text-xs">
                    6 min read
                </span>
              </div>
            </div>
            <img src={require('./../logo.png')} className="w-1/4"/>
        </div>
         );
}

export default Story;
