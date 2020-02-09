import React from 'react';

import classes from './ClosestBranches.module.scss';
import RangeSlider from '../UI/RangeSlider/RangeSlider';

const ClosestBranches = (props) => {

    const onFindBetweenRangeHandler = (values) => {
        console.log(values);
    }

    return (
        <div className={classes.ClosestBranches}>
            <header className={classes.ClosestBranches__Header}>
                <h2>
                    BANA EN YAKIN ŞUBEYİ BUL
                </h2>
            </header>

            <div className={classes.ClosestBranches__Slider}>
                <RangeSlider max={100} changed={onFindBetweenRangeHandler} />
            </div>
            
        </div>
    )
}

export default ClosestBranches