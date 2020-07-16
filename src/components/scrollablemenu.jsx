import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";



function Features() {
  const { useRef } = React;
  const [sticky, setSticky] = React.useState(false);
  const ref = useRef(null);

  const scrollLeft = (scrollOffset) => {
    console.log(ref.current)
    ref.current.scrollLeft -=300;
  };

  const scrollRight = (scrollOffset) => {
    console.log(ref.current.scrollOffset)
    ref.current.scrollLeft += 300;
  };

  const handelEvent = (event)=>{
   var element =  document.getElementById("ScrollNav");
   var top = element.getBoundingClientRect().top;
   var bottom = element.getBoundingClientRect().bottom;
   if( top< 0){
     setSticky(true)
   }
   else if(window.pageYOffset < 70){
     setSticky(false);
    }
  };

  window.addEventListener('scroll', handelEvent);
const projects = ['Home','Popular','Momentum','Coronavirus','OneZero','Elemental','GEN','Zora','Forge','Human Parts','Marker','Level','Heated','More']
  return ( 
    <div className={sticky ? "w-full fixed flex flex-row flex-wrap justify-center mainbackgroundcolor":"w-full flex flex-row flex-wrap justify-center mainbackgroundcolor"} id="ScrollNav">
      <div className= "font-bold w-full container  flex items-center justify-between p-4 h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">
        <FontAwesomeIcon icon={faAngleLeft} onClick={scrollLeft} color="gray"/>
      <div ref={ref} className="overflow-x-auto flex list-none text-lg items-center mr-4 ml-4" >
        {projects.map((data, index) => (
          <li className="mr-6 font-light flex flex-shrink-0">{data}</li>
        ))}
      </div>
      <FontAwesomeIcon icon={faAngleRight} onClick={scrollRight} color="gray"/>
      </div>
  </div>
  );
}

export default Features;
