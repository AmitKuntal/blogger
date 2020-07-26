import React from 'react';

function Tag(props) {
    
  return (<>
            {(props.count % 2 === 0 ?
               <span className="bg-gray-200 p-2 pr-4 rounded-full flex items-center text-lg m-2">
               <span className="text-white bg-gray-900 mr-2 rounded-full text-xl w-8 h-8 text-center">#</span>
               {props.name}
           </span> :
           <span className="bg-gray-200 p-2 pr-4 rounded-full hidden sm:hidden md:flex lg:flex items-center text-lg m-2">
                <span className="text-white bg-gray-900 mr-2 rounded-full text-xl w-8 h-8 text-center">#</span>
                {props.name}
            </span>)}
            
            </>
    );
}


export default Tag;
