import React from 'react';
import {connect} from 'react-redux';

function button(props) {
    
  return (
        <button>Get Started</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(button);
