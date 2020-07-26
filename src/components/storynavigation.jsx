import React from 'react';
import {connect} from 'react-redux';
import ShowStory from './showstory';
function StoryNavigation(props) {
  const [showPublish, setShowPublish] = React.useState(false);
  const setShowPublishValue = (value)=>{
    setShowPublish(value)
  }
  return (<>
    <div className="w-full flex justify-center">
      <div className="flex container p-4 sm:pl-2 md:pl-2 lg:pl-8 ">
        <ul class="border-b flex w-full">
            <li class="-mb-px mr-1">
              <a class={ showPublish ?"bg-white inline-block rounded-t py-2 px-4 text-gray-800 font-semibold":"bg-white inline-block border-b border-black rounded-t py-2 px-4 text-black-800 font-semibold"}
              href="#" onClick ={()=>setShowPublishValue(false)}>Draft</a>
            </li>
            <li class="-mb-px mr-1">
              <a class={showPublish ? "bg-white inline-block border-b border-black rounded-t py-2 px-4 text-gray-800 font-semibold":"bg-white inline-block rounded-t py-2 px-4 text-black-800 font-semibold"}
              href="#" onClick={()=>setShowPublishValue(true)}>Published</a>
            </li>
        </ul>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div class="flex container items-center justify-center flex container p-4 sm:pl-2 md:pl-2 lg:pl-8 ">
              {showPublish ? <ShowStory storyData = {["1","2","3","4"]} title="published story"/>: <ShowStory title="Draft story"/>}
        </div>
      </div>
      </>);
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

export default connect(mapStateToProps,mapDispatchToProps)(StoryNavigation);
