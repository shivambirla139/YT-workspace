import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Profile = ()=>{
  const data = useSelector(state => state.user.data);
  var isAuthenticated ; 
  if(data && data.data.accessToken){
    isAuthenticated = true;
  }else {
    isAuthenticated = false;
  }
  const  {_id, username, email} = data.data.user;
  return (
    <>
      {isAuthenticated ?
       (<>
             <div>id : {_id}</div>
             <div>username : {username}</div> 
             <div>email : {email}</div>
        </>

          ) : (<>

        </>)
      }
      
    </>
  )
}


export default Profile;