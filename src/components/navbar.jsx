import React from 'react';
import {connect} from 'react-redux';
import SignIn from './signin';
import Search from './search';
import Profile from './profile';
import ScrollableMenu from './scrollablemenu';

function Navbar(props) {
    
  return (
      <div className="w-full fixed flex flex-row flex-wrap justify-center mainbackgroundcolor">
        <nav className="font-bold w-full container  flex items-center justify-between p-4 h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">
            <div className="block sm:block md:hidden sm:mr-2 md:mr-2 lg:mr-6 xl:mr-6">
                    <a className="text-white hover:text-gray-200" href="#">
                        <img  className="w-12 h-12 max-w-md" src={require('./../logo.png')} />
                    </a>
            </div>
            <div className="text-2xl hidden sm:hidden md:block sm:pr-0 md:pr-0 lg-pr-8 xl-pr-8">
                <button className="font-serif font-extrabold">Blogger</button>
            </div>                 
                {props.login?<Search />
                :<ul className="w-2/3 hidden sm:hidden md:flex lg:flex items-center justify-end" >

                    <li className="mr-2">
                        <a className="text-black" href="#">Subsribe</a>
                    </li>
                    <li className="mr-2">
                        <a className="text-black" href="#">Write</a>
                    </li>
                    <li className="mr-2">
                        <SignIn count ={1} text="Sign in"/>
                    </li>
                          
                 </ul>
                }
             {
             props.login ?
              <Profile/>:
                <div className="px-2 py-2 pl-4 pr-4 primarybuttoncolor w-auto">
                    <SignIn count ={2} text="Get Started"/>
                </div>
             }   
            
        </nav>
        { props.login ?<ScrollableMenu />:null}
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

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
