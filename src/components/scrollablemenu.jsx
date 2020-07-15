import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";



function Features() {
  const { useRef } = React;
  const ref = useRef(null);

  const scrollLeft = (scrollOffset) => {
    console.log(ref.current)
    ref.current.scrollLeft -=300;
  };

  const scrollRight = (scrollOffset) => {
    console.log(ref.current)
    ref.current.scrollLeft += 300;
  };
const projects = ['Ram','Shyam',,'Shyam','Shyam','Shyam','Shyam','Shyam','Shyam','Shyam','Shyam','Shyam','Shyam','Shyam','Ram','Ram']
  return ( 
    <div className="w-full flex flex-row justify-center">
      <div className= "font-bold w-full container  flex items-center justify-between p-4 h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">
        <FontAwesomeIcon icon={faAngleLeft} onClick={scrollLeft} color="gray"/>
      <div ref={ref} className="overflow-x-auto flex list-none" >
        {projects.map((data, index) => (
          <li className="ml-4 font-light">{data}</li>
        ))}
      </div>
      <FontAwesomeIcon icon={faAngleRight} onClick={scrollRight} color="gray"/>
      </div>
  </div>
  );
}

export default Features;
