import React from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import './styles.css'

function PhotoGrid() {
  const cld = new Cloudinary({cloud: {cloudName: 'dpp71t8ww'}});
  console.log(cld)
  //process.env.REACT_APP_API_KEY
return(
  <>
    <div className="flex-container">
    <div className="box photo">
      <img className="img" alt="photography" src='https://res.cloudinary.com/dpp71t8ww/image/upload/v1698442467/sakhir_heodkr.png' />
    </div>
      <div className="wrapper">
        <div className="box description"> Description:
          <p>A BMW M4 in Sakhir Orange</p>
          </div>
    <div className="box date">Date Added:
      <p>01-01-2023</p>
      </div>
    </div>

    </div>
  </>
)
}//end of function
export default PhotoGrid;
