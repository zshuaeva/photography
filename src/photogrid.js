import React from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import './photogrid.css'

function PhotoGrid() {
  const cld = new Cloudinary({cloud: {cloudName: 'dpp71t8ww'}});
  console.log(cld)
  //process.env.REACT_APP_API_KEY
return(
  <>
    <div className="flex-container">
    <div className="box photo">PhotoBox</div>
      <div className="wrapper">
        <div className="box description">A BMW M4 in Sakhir Orange</div>
    <div className="box date">Date Taken: 01-01-2023</div>
    </div>
    </div>
  </>
)
}//end of function
export default PhotoGrid;
