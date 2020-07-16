import React from 'react';
import TopStories from './topstories';

function SideMenu() {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: .1
            }}
        />
    );

  const [sticky, setSticky] = React.useState(false);

 
  const handelEvent = (event)=>{
   var element =  document.getElementById("Sidemenu");
   var top = element.getBoundingClientRect().top;
   if( top< 50){
     setSticky(true)
   }
   else if(window.pageYOffset < 70){
     setSticky(false);
    }
  };

  window.addEventListener('scroll', handelEvent);

const projects = ['Home','Popular','Momentum','Coronavirus','OneZero']
  return ( 
    <div className={sticky ? "w-1/3 Position hidden sm:hidden md:flex lg:flex flex-row flex-wrap justify-center mainbackgroundcolor":"w-1/3 hidden sm:hidden md:flex lg:flex flex-row flex-wrap justify-center mainbackgroundcolor"} id="Sidemenu">
      <div className= "font-bold w-full container flex flex-col items-left justify-between p-4 h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">
            <div className="text-2xl mb-6">Popular on Medium</div>       
            <ColoredLine color="gray" className="w-full" />
            <TopStories count="01" postTitie="The Third Crisis of 2020 is Almost Here" author="Michael Arceneaux in LEVEL"  date="Jul 15" readTime="6 min read"/>
            <TopStories count="02" postTitie="The Third Crisis of 2020 is Almost Here" author="Michael Arceneaux in LEVEL"  date="Jul 15" readTime="6 min read"/>
            <TopStories count="03" postTitie="The Third Crisis of 2020 is Almost Here" author="Michael Arceneaux in LEVEL"  date="Jul 15" readTime="6 min read"/>
            <TopStories count="04" postTitie="The Third Crisis of 2020 is Almost Here" author="Michael Arceneaux in LEVEL"  date="Jul 15" readTime="6 min read"/>
 
      </div>
  </div>
  );
}

export default SideMenu;
