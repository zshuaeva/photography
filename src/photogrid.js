import React from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import './photogrid.css'

function PhotoGrid() {
  const cld = new Cloudinary({cloud: {cloudName: 'dpp71t8ww'}});
  console.log(cld)
  //process.env.REACT_APP_API_KEY
return(
  <>
    <div className="photos">
      <img alt="api call"src='https://res.cloudinary.com/dpp71t8ww/image/upload/v1698344122/m4.jpg' />
    </div>
  </>
)
}//end of function
export default PhotoGrid;
