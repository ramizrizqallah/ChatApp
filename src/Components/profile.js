import React, { Component } from 'react';
import '../style/profile.css';
import { useAuth } from "../context/auth";
import { useState, useEffect } from "react";
import axios from 'axios';

function Profile() {
  
  const { authTokens } = useAuth();
  const [user, setUserData] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userBio, setBio] = useState("");
  
      function imageHandler(e) {
        const reader = new FileReader();
        
        reader.onload = function () {
          if (reader.readyState === 2) {
            setAvatar({src:reader.result});
          }
        };
        reader.readAsDataURL(e.target.files[0])
      e.preventDefault();
      };
      
      useEffect(() => {
        // Your code here
        setAvatar({src:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'});
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/auth/me',
            headers: {
                'x-access-token': authTokens
              }
        }).then(res => {
            setUserData(res.data);
            console.log("response from token")
        }).catch(e => {
          console.log("error",e)
        });
      }, []);

       function saveData(){
        axios({
          method: 'put',
          url: 'http://localhost:5000/api/user/update',
          data: {
            userID:user._id,
            bio:userBio,
            Id:12,
            avatar:avatar.src
          }
      }).then(res => {
          console.log("error Khader")
      }).catch(error => {
          console.log(error)
      })
     
  }
  
         
        return(
        <div className='profile-container'>
        
					<div className="img-holder">
						<img src={avatar.src} alt="" id="img" className="img" />
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
				</div>

					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i id ="i">change Picture</i>
					</label>
          </div> 

        <div className="name">
              {user.fullName}
        </div>
      <div class="form-group">
    <label >bio</label>
        <textarea className = "text-area"rows="5" placeholder={user.bio} onChange={e => {setBio(e.target.value);}
      } ></textarea>
      </div>

     <div >
       <button type="button" className = "button button1" onClick={saveData} >Save</button>
     </div> 

        </div>
        )
}

export default Profile;