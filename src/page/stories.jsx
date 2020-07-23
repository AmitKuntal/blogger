import React from 'react';
import {connect} from 'react-redux';
import Navbar from './../components/navbar';
import YourStoryHeading from './../components/yourstoryheader';
import StoryNavigation from './../components/storynavigation';
function Stories(props) {
  return ( 
      <div className="mainbackgroundcolor">
        {props.login?
        <><Navbar  showScrollNav = {false}/>
        <YourStoryHeading />
        <StoryNavigation />    </>:null}
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

export default connect(mapStateToProps,mapDispatchToProps)(Stories);
