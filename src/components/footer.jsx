import React from 'react';
import {connect} from 'react-redux';
import Button from './button';

function Footer(props) {
    
  return (
      <div className="w-full flex flex-row justify-center secondarybackgroundcolor p-8">
            <div className="w-4/5 font-bold container flex flex-col items-start h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">
                <div className="text-2xl block sm:pr-0 md:pr-0 lg-pr-8 xl-pr-8">
                    <button className="font-serif font-extrabold text-white">B</button>
                </div> 
                <ul className="mt-4 flex items-center flex-row justify-start" >
                    <li className="mr-4">
                        <a className="text-white" href="#">Get Started</a>
                    </li>
                    <li className="mr-4">
                        <a className="text-white" href="#">Subscribe</a>
                    </li>
                    <li className="mr-4 text-gray-400">
                        Have an account?
                    </li>
                    <li className="mr-4">
                        <a className="text-white" href="#"> Sign in</a>
                    </li>
                    
                </ul>
                <ul className="mt-4 flex items-center flex-row justify-between" >
                    <li className="mr-4">
                        <a className="text-white" href="#">About Blogger</a>
                    </li>
                    <li className="mr-4">
                        <a className="text-white" href="#">Write</a>
                    </li>
                    <li className="mr-4">
                        <a className="text-white" href="#">Gift</a>
                    </li>
                    <li className="mr-4">
                        <a className="text-white" href="#">Help</a>
                    </li>
                    <li className="mr-4">
                        <a className="text-white" href="#">Press Contacts</a>
                    </li>
                    <li className="mr-4">
                        <a className="text-white" href="#">Careers</a>
                    </li>
                    <li className="mr-4">
                        <a className="text-white" href="#">Legal</a>
                    </li>
                    
                </ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
