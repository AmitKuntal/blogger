import React from "react";
import {Redirect} from "react-router-dom";

function Logout(props) {
    const removeLocalStorage = ()=>{
        localStorage.removeItem('login');
        window.location.reload(true);
    }
  return (<>
           { localStorage.removeItem('login') ? removeLocalStorage:<Redirect to='/'/>}
           </>
  );
}


export default Logout;




    