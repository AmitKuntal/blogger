import React from "react";
import {connect} from "react-redux";

function LoginWithEmail(props) {
    const [password,setPassword] = React.useState(null);
    const [email,setEmail] = React.useState(null);
    const [showPassword,setShowPassword] = React.useState(false);

    const handelEmailChange = (event)=>{
        setEmail(event.target.value);
    }
    const handelPasswordChange = (event)=>{
        setPassword(event.target.value);
    }
    const login =()=>{
        localStorage.setItem('login', true);
        window.location.reload(false);
    }
  return (<>
            <div className="p-8 flex flex-col text-center items-center">
                  <p className="my-4 text-black-600 text-4xl ">Sign in with email</p>
                  <p className="my-4 w-1/2 text-black-600 text-lg ">Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p>
                 {showPassword ?
                 (<div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2">
                     Your Password
                 </label>
                 <input className=" border-b border-b-4 w-full py-2 px-3 text-gray-700 text-center leading-tight outline-none focus:outline-none" value={password?password:""} id="password" type="password" onChange= {handelPasswordChange}/>
                 <button
                 className=" bg-teal-500 mt-3 pr-6 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-black outline-none focus:outline-none "
                 type="button"
                 style={{ transition: "all .15s ease" }}
                 onClick={login}
                 >
                     Login
                 </button>
               </div>)
                 :(<div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Your email
                    </label>
                    <input className=" border-b border-b-4 w-full py-2 px-3 text-gray-700 text-center leading-tight outline-none focus:outline-none" value={email?email:""} id="username" type="text" onChange= {handelEmailChange}/>
                    <button
                    className=" bg-teal-500 mt-3 pr-6 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-black outline-none focus:outline-none "
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowPassword(true)}
                    >
                        Countinue
                    </button>
                  </div>)}
                   <div className="mx-8 mt-8">
                    <button className="pr-6 inline-block text-sm text-teal-700 px-4 py-2 leading-none  text-black mt-4 lg:mt-0 outline-none focus:outline-none" onClick={() => props.changeCount(1)}>
                        All sign in options
                    </button>
                   </div>
            </div></>
    );
}

const mapStateToProps =(state)=>{
    return{
        login:state.login,
        img : state.img,
        name: state.name,
        userName: state.userName
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        changeAuthenticate:()=>{dispatch({type:"CHANGE_AUTHENTICATE", payload: true})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginWithEmail);




    