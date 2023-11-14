import React from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from "@cloudinary/url-gen";
import './styles.css';

function Collections() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dpp71t8ww' } });
  console.log(cld);

  // Assuming you have a route path for the PhotoGrid component
  const photoGridPath = "/photogrid";

  return (
    <>
      <Link to={photoGridPath} className="flex-container">
        <div className="box photo">
          {/* load first 6 images in collections here */}
          <img
            className="img"
            alt="collection stack"
            src='https://res.cloudinary.com/dpp71t8ww/image/upload/v1698442467/sakhir_heodkr.pn'
          />
        </div>
        <div className="wrapper">
          <div className="box description"> Description:
            <p>Collection Description</p>
          </div>
          <div className="box date">Date Updated:
            {/* pass in date of last upload here */}
            <p>01-01-2023</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Collections;
