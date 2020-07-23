import React from 'react';
import {connect} from 'react-redux';
import Navbar from './../components/navbar';
import HomePageTitile from './../components/homepagetitle';
import Tags from './../components/tags';
import Features from './../components/features';
import Privacy from './../components/privacy';
import Tagline from './../components/tagline';
import Footer from './../components/footer';
import Dashboard  from './../components/dashboard';
function Home(props) {
  console.log(props.state)
  return ( 
      <div className="mainbackgroundcolor">
        <Navbar showScrollNav = {true}/>
       {
        props.login ? <Dashboard /> :
       <>
       <HomePageTitile />
        <Tags />
        <Features />
        <Privacy />
        <Tagline />
        <Footer /></>
        } 
      </div>
    
  );
}

const mapStateToProps =(state)=>{
  return{
      login:state.login,
      state: state
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
      changeName:()=>{dispatch({})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
