import React from 'react';

import classes from './Image.module.scss';

const Image = (props) => {
    let image = require(`../../../assets/images/${props.imageName}`);

    return (
        <figure className={classes.Image}>
            <img src={`${image}`} alt="Ankara overview" />
        </figure>
    )
}

export default Image;