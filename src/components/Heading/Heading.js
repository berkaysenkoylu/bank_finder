import React from 'react';

import svg from '../../assets/images/sprites.svg'
import classes from './Heading.module.scss';

const Heading = (props) => {
    return (
        <header className={classes.Heading}>
            <h2 className={classes.Heading__Title}>
                {props.title}
            </h2>

            <span className={classes.Heading__City}>
                <svg className={classes.Heading__City__Icon}>
                    <use xlinkHref={`${svg}#icon-location`}></use>
                </svg>
                <span className={classes.Heading__City__Name}>
                    Ankara
                </span>
            </span>

            {props.showDistance ? <span className={classes.Heading__Distance}>
                {props.distance ? (isFinite(props.distance) ? props.distance.toFixed(1) : 'N/A') : 'N/A'} km
            </span> : null}
        </header>
    )
}

export default Heading;