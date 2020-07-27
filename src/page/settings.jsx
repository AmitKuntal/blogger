import React from 'react';
import {connect} from 'react-redux';
import Navbar from './../components/navbar';
import SettingsSideNav from './../components/settingsidenav';
import SettingSection from './../components/settingssection';
function Settings(props) {
  return ( 
      <div className="mainbackgroundcolor">
        {props.login?
        <><Navbar  showScrollNav = {false}/>
        <div className="w-full flex flex-row flex-wrap justify-center mainbackgroundcolor">
         <div className= "w-full container flex flex-row items-left justify-between p-4 h-full sm:text-md sm:pl-2 md:pl-2 lg:pl-8">
            <SettingsSideNav/>
            <div className="flex-col w-full lg:w-4/6 justify-start">
                <SettingSection />
            </div>
        </div>
        </div>

          </>:null}
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

export default connect(mapStateToProps,mapDispatchToProps)(Settings);
