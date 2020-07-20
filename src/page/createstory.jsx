import React from 'react';
import {connect} from 'react-redux';
import Navbar from './../components/navbar';
import Editor from './../components/editor';
function CreateStory(props) {
  return ( 
        <div className="mainbackgroundcolor">
            <Navbar  showScrollNav = {false}/>
            <Editor />
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

export default connect(mapStateToProps,mapDispatchToProps)(CreateStory);
