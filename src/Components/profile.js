import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../style/profile.css'
class profile extends Component{
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
      imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
    render(){
        const { profileImg} = this.state
        return(
        <div className='container-fluid h-100'>
        <div className = "row justify-content-center h-100 ">
        <div className = "col-3 color">1</div>
        <div className = "col-6  color">
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
				</div>
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">change Picture</i>
					</label>
          </div> 
        <div className="name">
        <h3 className="name">Khader Ballout</h3>
        </div>
      <div class="form-group">
    <label for="exampleFormControlTextarea1">bio</label>
    <textarea class="form-control " id="exampleFormControlTextarea1" rows="5" ></textarea>
      </div>
     <div className="button">
       <button type="button" class="btn btn-outline-success">Save</button>
     </div>
        </div>
        <div className = "col-3 color">3</div>
       
        </div>
       </div>
        );
    }
}

export default profile;