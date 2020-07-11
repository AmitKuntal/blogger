import React from 'react';
import {connect} from 'react-redux';

function HomePageTitile(props) {
    
  return (
      <div className="w-full flex justify-center">
        <div className="mt-24 container w-full flex flex-col items-center justify-center p-4 h-auto text-black bg-black-200">
            <div className="w-full md:w-2/3">
                <h1 className=" font-bold font-serif text-xl sm:text-2xl md:text-4xl lg:text-6xl text-center">Get smarter about what matters to you.</h1>    
            </div>
            <div className="w-full md:w-2/3">
                <h1 className=" font-bold text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-center">Select what you're into. We'll help you find great things to read.</h1>    
            </div>  
        </div>
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(HomePageTitile);
