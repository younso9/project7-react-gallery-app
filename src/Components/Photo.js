import React from 'react';


// This displays an image using the src input
const Photo = ({src}) => {
    return (
        <li>
          <img src={src} alt={src} />
        </li>
    )
}


export default Photo;