import React from 'react';

function TopStories(props) {
  return ( 
         <div className="w-full flex flex-row items-start mt-4">
                <div className="w-1/4 text-gray-400 font-medium text-3xl">
                    {props.count}
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row">
                        {props.postTitie}
                    </div>
                    <div className="w-full flex flex-row text-gray-600 font-normal text-sm">
                        {props.author}
                    </div>
                    <div className="w-full flex flex-row text-gray-600 font-normal">
                        <div className="w-1/3 text-xs">
                            {props.date}  .
                        </div>
                        <div className="w-full text-xs">
                            ]{props.readTime}
                        </div>
                    </div>
                </div>
            </div>
         );
}

export default TopStories;
