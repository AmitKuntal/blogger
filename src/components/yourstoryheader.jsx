import React from 'react';
import {connect} from 'react-redux';
function YourStoryHeader(props) {
  return ( 
        <div className="w-full flex justify-center">
            <div className="mt-4 container w-full flex flex-row items-center justify-between p-4 h-auto text-black bg-black-200">
                <div className="w-1/2">
                    <h1 className=" font-bold text-xl sm:text-1xl md:text-2xl lg:text-4xl">Your stories</h1>    
                </div>
                <div className="">
                    <a href="/create/post"><button className="border border-green-200 p-2 rounded text-green-400">Write a story</button></a>
                </div>  
            </div>
        </div>
  );
}

const mapStateToProps =(state)=>{
  return{
      login:state.login
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
      changeName:()=>{dispatch({})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(YourStoryHeader);
