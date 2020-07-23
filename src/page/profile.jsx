import React from 'react';
import {connect} from 'react-redux';
import Navbar from './../components/navbar';
import EditProfile from './../components/editprofile'
function Profile(props) {
  return ( 
        <div className="mainbackgroundcolor">
           {props.login?<>
            <Navbar  showScrollNav = {false}/>
            <EditProfile /></>
            :null}
            
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
