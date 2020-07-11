import React from "react";

export default function SignUpWithEmail(props) {
    const [email,setEmail] = React.useState(null);

    const handelEmailChange = (event)=>{
        setEmail(event.target.value);
    }
    
  return (
            <div className="p-8 flex flex-col text-center items-center">
                  <p className="my-4 text-black-600 text-4xl ">Sign up with email</p>
                  <p className="my-4 w-1/2 text-black-600 text-lg ">Enter the email , and we’ll send a magic link to your inbox.</p>
                 <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Your email
                    </label>
                    <input class=" border-b border-b-4 w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" value={email?email:""} id="username" type="text" onChange= {handelEmailChange} required/>
                    <button
                    className=" bg-teal-500 mt-3 pr-6 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-black "
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => console.log("")}
                    >
                        Submit
                    </button>
                  </div>
                   <div className="mx-8 mt-8">
                    <button className="pr-6 inline-block text-sm text-teal-700 px-4 py-2 leading-none  text-black mt-4 lg:mt-0" onClick={() => props.changeCount(2)}>
                        All sign up options
                    </button>
                   </div>
            </div>
    );
}

