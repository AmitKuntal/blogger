import React from 'react';
import {connect} from 'react-redux';
import Button from './button';

function Tagline(props) {
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
                <div className="w-full flex items-center justify-center">
                    <h1 className="font-bold text-2xl ">One Subscription. Unlimited Ideas.</h1>    
                </div>
                <div className="mt-16 w-full md:w-2/3 lg:w-2/4 flex items-center">
                    <h1 className="text-xl text-gray-800 text-center">
                        Read unlimited stories with an optional subscription of $5/month.
                        If it's not for you, cancel anytime.
                    </h1>    
                </div>  
            </div>
        </div>
        <div className="mt-16 w-full flex flex-row justify-center items-center">
            <div className="w-4/5 md:w-1/4">
                <ColoredLine color="black" />
            </div>
        </div>
        <div className="w-full flex justify-center">
            <div className="ml-4 mt-16 container w-full flex flex-col items-center justify-center h-auto text-black bg-black-200 text-center">
                <div className="w-full flex items-center">
                    <h1 className="w-full font-bold font-serif text-xl sm:text-2xl md:text-4xl lg:text-6xl ">Expand your reading.</h1>    
                </div>
                <div className="w-full flex items-center">
                    <h1 className="w-full font-bold font-serif text-xl sm:text-2xl md:text-4xl lg:text-6xl ">Expand your mind.</h1>    
                </div>
                <div className="w-1/3 primarybuttoncolor mt-10 mb-10">
                    <div className="p-4 pr-4 text-white primarybuttoncolor w-full flex justify-center text-center">
                        <Button />
                    </div>
                </div>   
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

export default connect(mapStateToProps,mapDispatchToProps)(Tagline);
