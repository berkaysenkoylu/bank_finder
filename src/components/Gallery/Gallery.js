import React from 'react';

import classes from './Gallery.module.scss';
import Image from './Image/Image';

const Gallery = () => {
    let images = ["navigation.jpg", "ankara.jpg", "bank.jpg"];

    return (
        <div className={classes.Gallery}>
            {images.map((image, index) => {
                return <Image key={image + index} imageName={image} />
            })}
        </div>
    )
}

export default Gallery;