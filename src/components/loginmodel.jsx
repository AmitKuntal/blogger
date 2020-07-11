import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGoogle,faApple, faTwitter, faFacebook, faMailchimp } from "@fortawesome/free-brands-svg-icons";

export default function LoginMdoel(props) {
    
  return (
            <div className="p-8 flex flex-col text-center">
                  <p className="my-4 text-black text-4xl ">Welcome back</p>
                  <div className="mx-8 mt-6">
                    <button className="w-56 pr-6 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faGoogle} color={'black'} size={'lg'} className="mr-2"/> Sign in with Google
                    </button>
                   </div>
                   <div className="mx-8 mt-6">
                    <button className="w-56 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faFacebook} color={'black'} size={'lg'} className="mr-2"/>Sign in with Facebook
                    </button>
                   </div>
                   <div className="mx-8 mt-6 item-center">
                    <button className="w-56 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faApple} color={'black'} size={'lg'} className="mr-2"/>Sign in with Apple
                    </button>
                   </div>
                   <div className="mx-8 mt-6">
                    <button className="w-56 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faTwitter} color={'black'} size={'lg'} className="mr-2"/>  Sign in with Twitter
                    </button>
                   </div>
                   <div className="mx-8 mt-6">
                    <button className="w-56 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0" onClick={() => props.changeCount(3)}>
                    <FontAwesomeIcon icon={faMailchimp} color={'black'} size={'lg'} className="mr-2"/>   Sign in with Email
                    </button>
                   </div>
                   <div className="mx-8 mt-8">
                       No account ?
                    <button className="pr-6 inline-block text-sm text-teal-700 px-4 py-2 leading-none  text-black mt-4 lg:mt-0" onClick={() => props.changeCount(2)}>
                        Create One
                    </button>
                   </div>
            </div>
    );
}

