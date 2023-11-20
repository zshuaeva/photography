import React from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from "@cloudinary/url-gen";
import './styles.css';

function Collections() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dpp71t8ww' } });
  console.log(cld);


  const photoGridPath = "/photogrid";

  return (
    <>
      <Link to={photoGridPath} className="collection-flex-container">
        <div className="collection-box collection-photo">
          {/* load first 6 images in collections here */}
          <img
            className="collection-img"
            alt="collection stack"
            src='https://res.cloudinary.com/dpp71t8ww/image/upload/v1698442467/sakhir_heodkr.pn'
          />
        </div>
        <div className="collection-wrapper">
          <div className="collection-box collection-description"> Description:
            <p>Collection Description</p>
          </div>
          <div className="collection-box collection-date">Date Updated:
            {/* pass in date of last upload here */}
            <p>01-01-2023</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Collections;
