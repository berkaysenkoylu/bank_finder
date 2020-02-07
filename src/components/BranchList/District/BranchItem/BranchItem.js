import React from 'react';

import classes from './BranchItem.module.scss';

const BranchItem = (props) => {
    return (
        <li className={classes.BranchItem} onClick={props.clicked}>
            <span className={classes.BranchItem__Icon}>ICON</span>
            <div>
                <p>{props.code} - {props.name}</p>
                <p>{props.address}</p>
            </div>
        </li>
    )
}

export default BranchItem;