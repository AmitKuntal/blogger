import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faMailchimp } from "@fortawesome/free-brands-svg-icons";

export default function SignUp(props) {
  return (
        <>
                <div className="p-8 flex flex-col text-center">
                <p className="my-4 text-black-600 text-4xl ">Join Us</p>
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
                   <div className="mx-8 mt-6">
                    <button className="w-56 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0"  onClick={() => props.changeCount(4)}>
                    <FontAwesomeIcon icon={faMailchimp} color={'black'} size={'lg'} className="mr-2"/>   Sign in with Email
                    </button>
                   </div>
                   <div className="mx-8 mt-8">
                   Already have an account?
                    <button className="pr-6 inline-block text-sm text-teal-700 px-4 py-2 leading-none  text-black mt-4 lg:mt-0" onClick={() => props.changeCount(1)}>
                        Sign in
                    </button>
                   </div>
                </div>
    </>
  );
}