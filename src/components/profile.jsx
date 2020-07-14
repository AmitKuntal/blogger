import React from "react";
import {connect} from 'react-redux';


function Profile(props) {
    const [showMenu, setShowMenu] = React.useState(false);
    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: .1
          }}
      />
  );
  return (
    <div className="inline-block relative font-light">
        <img src={props.img} className="h-10 w-10 rounded-full inline-flex items-center" onClick = {() =>setShowMenu(!showMenu)}/>
           {showMenu ?
           <ul className="absolute top-10 right-0  rounded bg-white px-4 py-4 border w-56">
            <li class="flex flex-row items-center justify-around w-full mb-2">
              <img src={props.img} className="h-10 w-10 rounded-full inline-flex items-center" onClick = {() =>setShowMenu(!showMenu)}/>
              <div className="flex flex-col">
                <p>{props.name}</p>
                <a href="/">{props.userName}</a>
              </div>
            </li>
            <ColoredLine color="gray" />
            <li class=""><a class="py-2 px-4 block whitespace-no-wrap" href="#">Your Post's</a></li>
            <li class=""><a class="rounded-b py-2 px-4 block whitespace-no-wrap" href="#">New Post</a></li>
            <ColoredLine color="black" />
            <li class=""><a class="rounded-b py-2 px-4 block whitespace-no-wrap" href="#">Profile</a></li>
            <li class=""><a class="rounded-b py-2 px-4 block whitespace-no-wrap" href="#">Logout</a></li>
           </ul>:null}       
        </div>
  );
}

const mapStateToProps =(state)=>{
    return{
        login:state.login,
        img : state.img,
        name: state.name,
        userName: state.userName
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        changeName:()=>{dispatch({})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);


