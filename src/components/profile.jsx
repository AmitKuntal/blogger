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
    <div className="inline-block relative font-light z-40">
        <img src={props.img} className="h-10 w-10 rounded-full inline-flex items-center" onClick = {() =>setShowMenu(!showMenu)}/>
           {showMenu ?
           <ul className="absolute top-10 right-0  rounded bg-white p-2 border w-56">
            <li class="flex items-center">
              <img src={props.img} className="h-10 w-10 rounded-full inline-flex items-center" onClick = {() =>setShowMenu(!showMenu)}/>
              <div className="flex flex-col ml-4">
                <p>{props.name}</p>
                <a href="/">{props.userName}</a>
              </div>
            </li>
            <ColoredLine color="gray" />
            <a class="rounded-b mx-2 my-2 block whitespace-no-wrap" href="/story">Your Post's</a>
            <a class="rounded-b my-2 px-2 block whitespace-no-wrap" href="/create/post">New Post</a>
            <ColoredLine color="black" />
            <a class="rounded-b mx-2 my-2 block whitespace-no-wrap" href="/account/setting">Settings</a>
            <a class="rounded-b mx-2 my-2 block whitespace-no-wrap" href="/profile/userid">Profile</a>
            <a class="rounded-b mx-2 my-2 block whitespace-no-wrap" href="/logout">Logout</a>
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


