import React from 'react';
function ShowStory(props) {
  return (
      <div className="w-full">
          {props.storyData?
        props.storyData.map((story) =>(
            <div className="mb-4 items-center border-b">
            <div className="flex flex-col">
              <span className="text-xl sm:text-xl md:text-xl lg:text-2xl">
                The Third Crisis of 2020 is Almost Here
              </span>
              <span className="w-full text-gray-600 font-normal text-sm">
                 We recently joined a new project with heavy LiveData usage, everywhere. Here’s what we learned about LiveData, Threading and Repositories.
              </span>
              <span className="w-full flex flex-row text-gray-800 font-normal text-sm mt-4">
                 Michael Arceneaux in LEVEL
              </span>
              <div className="w-1/2 flex flex-row text-gray-600 font-normal">
                <div className="text-xs">
                   Jul 15 .
                </div>
                <div className="text-xs ml-4">
                    6 min read
                </div>
              </div>
            </div>
        </div>
        ))
        :"You have not "+props.title}  
        </div>);
}


export default ShowStory;
