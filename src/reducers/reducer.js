const istate = {
    login: localStorage.getItem('login')?true:false,
    img : require('./../user.png'),
    name: "Name",
    userName: "@UserName"
}
const reducer = (state=istate, action) =>{
    console.log(action)
    if(action.type === 'CHANGE_AUTHENTICATE'){
       return{
           ...istate,
           login: action.payload
       } 
    }
    return state;

}

export default reducer;