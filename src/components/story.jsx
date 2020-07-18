import React from 'react';

function Story() {
  return ( 
        <div className="w-full flex flex-row mb-6 items-center">
            <div className="w-3/4 flex flex-col">
              <div className="w-full text-xl sm:text-xl md:text-xl lg:text-2xl">
                The Third Crisis of 2020 is Almost Here
              </div>
              <div className="w-full text-gray-600 font-normal text-sm">
                 We recently joined a new project with heavy LiveData usage, everywhere. Here’s what we learned about LiveData, Threading and Repositories.
              </div>
              <div className="w-full flex flex-row text-gray-800 font-normal text-sm mt-4">
                 Michael Arceneaux in LEVEL
              </div>
              <div className="w-1/2 flex flex-row text-gray-600 font-normal">
                <div className="w-1/3 text-xs">
                   Jul 15 .
                </div>
                <div className="w-full text-xs">
                    6 min read
                </div>
              </div>
            </div>
            <img src={require('./../logo.png')} className="w-1/4"/>
        </div>
         );
}

export default Story;
