import React from 'react';
import {connect} from 'react-redux';
import SideMenu from './sidemenu';
import Stories from './stories';

function Dashboard(props) {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center mainbackgroundcolor">
        <div className="w-full container flex items-start justify-start sm:text-md sm:pl-2 md:pl-2 lg:pl-8"> 
            <Stories />
            <SideMenu />          
      </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
