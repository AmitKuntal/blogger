import React from 'react';
import {connect} from 'react-redux';
import SignIn from './signin';
function Privacy(props) {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: .9
            }}
        />
    );
    
  return (
      <>
        <div className="w-full flex justify-center">
            <div className="ml-4 mt-24 container w-full flex flex-col items-center justify-center h-auto text-black bg-black-200">
                <div className="w-full flex items-center">
                    <h1 className="font-bold font-serif text-xl sm:text-2xl md:text-4xl lg:text-6xl ">No ads. No problems.</h1>    
                </div>
                <div className="w-full flex items-center">
                    <h1 className="text-xl text-gray-800 ">Your privacy stays yours. We don’t sell your data or target you with ads. Ever.</h1>    
                </div>  
            </div>
        </div>
        <div className="w-full flex justify-center">
            <div className="ml-4 mt-24 container w-full flex flex-row items-end flex-wrap-reverse md:flex-no-wrap justify-center h-auto text-black bg-black-200">
                <div className="w-full flex justify-center">
                    <div className="w-2/3 primarybuttoncolor mt-10 md:m-0">
                        <button className="p-4 pr-4 primarybuttoncolor w-full flex justify-center text-center">
                        <SignIn count ={2} text="Get Started" />
                        </button>
                    </div>   
                </div>
                <div className="w-full flex flex-col text-xl">
                    <p className="font-bold mb-16">We do things differently.</p>
                    <h1 className="text-gray-800 ">Medium is not like any other platform on the internet. <mark className="bg-green-200">Our sole purpose is to help you find compelling ideas, knowledge, and perspectives.</mark> We don’t serve ads—we serve you, the curious reader who loves to learn new things. Medium is home to thousands of independent voices, and we combine humans and technology to find the best reading for you—and filter out the rest.</h1>    
                </div>  
            </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
            <div className="mt-16 w-4/5 md:w-1/4">
                <ColoredLine color="black" />
            </div>
        </div>
    </>
  );
}

const mapStateToProps =(state)=>{
    return{
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        changeName:()=>{dispatch({})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Privacy);
