import React from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
    const [showModal, setShowModal] = React.useState(false);
    
  return ( <ul className="flex  items-center justify-end mr-4">
            <FontAwesomeIcon icon={faSearch} onClick={() => setShowModal(!showModal)}/>
            {showModal ?<input className="ml-2 hidden sm:hidden md:hidden lg:flex outline-none" placeholder="Search Blogger" />:<></>}
            {showModal ? 
            <>
                <div className="justify-center items-center flex lg:hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full h-full flex justify-center items-center my-6 mx-auto ">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-gray-800 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            <div className="p-8 flex flex-col">
                                 <input className="ml-2 flex text-2xl font-bold border border-t-0 border-l-0 border-r-0 border-b-2 outline-none focus:outline-none" placeholder="Search Blogger" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden opacity-75 fixed inset-0 z-40 bg-white">
                </div>
            </>:
            <></>}
            </ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(Search);
