import React from 'react';
import TopStories from './topstories';

function SideMenu() {

    const ColoredLine = ({ color, margin }) => (
        <hr
            style={{
                color: color,
                height: .2,
                marginTop:margin
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
    <div className={sticky ? "w-1/4 Position hidden sm:hidden md:hidden lg:flex flex-row flex-wrap justify-center mainbackgroundcolor":"w-1/3 hidden sm:hidden md:flex lg:flex flex-row flex-wrap justify-center mainbackgroundcolor"} id="Sidemenu">
      <div className= "font-bold w-full container flex flex-col items-left justify-between p-4 h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">
            <div className="text-2xl mb-4">Popular on Medium</div>       
            <ColoredLine color="gray" className="w-full" />
            <TopStories count="01" postTitie="The Third Crisis of 2020 is Almost Here" author="Michael Arceneaux in LEVEL"  date="Jul 15" readTime="6 min read"/>
            <TopStories count="02" postTitie="The Third Crisis of 2020 is Almost Here" author="Michael Arceneaux in LEVEL"  date="Jul 15" readTime="6 min read"/>
            <TopStories count="03" postTitie="The Third Crisis of 2020 is Almost Here" author="Michael Arceneaux in LEVEL"  date="Jul 15" readTime="6 min read"/>
            <TopStories count="04" postTitie="The Third Crisis of 2020 is Almost Here" author="Michael Arceneaux in LEVEL"  date="Jul 15" readTime="6 min read"/>
            <ColoredLine color="gray" margin="2rem" />
            <ul className="mt-8 flex flex-row flex-wrap justify-start text-sm text-gray-600 font-normal" >
                    <li className="mr-4">
                        <a href="#">Help</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Status</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Writers</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Blog</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Careers</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">Terms</a>
                    </li>
                    <li className="mr-4">
                        <a href="#">About</a>
                    </li>
                    
                </ul>
      </div>
  </div>
  );
}

export default SideMenu;
