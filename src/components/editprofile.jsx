import React from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function EditProfile(props) {
    const fileInputRef = React.useRef(null);
  return (
    <div className="w-full flex flex-row flex-wrap justify-center mainbackgroundcolor">
        <div className="font-bold w-full container flex items-center justify-around p-4 h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">         
            <div className="w-full md:w-3/5 flex flex-col md:flex-row bg-green flex-col-reverse justify-between">
                <div className="flex flex-col items-start">
                    <input type="text" value={props.name ? props.name : "User name"}  className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold"/>
                    <textarea type="text" className="text-md md:text-xl font-light" placeholder="Enter a short bio" rows={5} cols={40}/>
                    <div className="flex mt-4 w-full item-center flex-row-reverse">
                        <input type="button" value="Cancel"  className="ml-4 p-2 pl-4 pr-4 rounded bg-white border-gray-500 border-solid border-2 text-gray-500"/>
                        <input type="button" value="Save"  className="p-2 pl-4 pr-4 rounded bg-white border-green-500 border-solid border-2 text-green-500"/>
                    </div>
                </div>
                <div className="flex flex-col jutify-center items-center">
                    <img src={props.img} className="h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full inline-flex items-center"> 
                    </img>
                    <span onClick={() => fileInputRef.current.click()}><FontAwesomeIcon icon={faCamera} size="md" /> </span>
                    <input
                        ref={fileInputRef}
                        type="file"
                        hidden
                    />
                    
                </div>
            </div>
        </div>
    </div>
  );
}

const mapStateToProps =(state)=>{
  return{
      login:state.login,
      img: state.img
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
      changeName:()=>{dispatch({})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);
