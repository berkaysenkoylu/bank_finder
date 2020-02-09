import React from 'react';

import svg from '../../../../assets/images/sprites.svg';
import classes from './BranchItem.module.scss';

const BranchItem = (props) => {
    return (
        <li className={classes.BranchItem} onClick={props.clicked}>
            <svg className={classes.BranchItem__Icon}>
                <use xlinkHref={`${svg}#icon-library`}></use>
            </svg>

            <div>
                <p>{props.code} - {props.name}</p>
                <p>{props.address}</p>
            </div>
        </li>
    )
}

export default BranchItem;