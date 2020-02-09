import React from 'react';

import svg from '../../../assets/images/sprites.svg';
import classes from './BranchInfo.module.scss';

const BranchInfo = (props) => {
    return (
        <div className={classes.BranchInfo}>
            <div className={classes.BranchInfo__Name}>
                <header className={classes.BranchInfo__Header}>
                    <svg className={classes.BranchInfo__Icon}>
                        <use xlinkHref={`${svg}#icon-library`}></use>
                    </svg>
                    <h2>ŞUBE ADI</h2>
                </header>
                <span>
                    {props.name}
                </span>
            </div>

            <div className={classes.BranchInfo__District}>
                <header className={classes.BranchInfo__Header}>
                    <svg className={classes.BranchInfo__Icon}>
                        <use xlinkHref={`${svg}#icon-map`}></use>
                    </svg>
                    <h2>İLÇE</h2>
                </header>
                <span>
                    {props.district}
                </span>
            </div>

            <div className={classes.BranchInfo__Code}>
                <header className={classes.BranchInfo__Header}>
                    <svg className={classes.BranchInfo__Icon}>
                        <use xlinkHref={`${svg}#icon-info`}></use>
                    </svg>
                    <h2>ŞUBE KODU</h2>
                </header>
                <span>
                    {props.code}
                </span>
            </div>

            <div className={classes.BranchInfo__Address}>
                <header className={classes.BranchInfo__Header}>
                    <svg className={classes.BranchInfo__Icon}>
                        <use xlinkHref={`${svg}#icon-office`}></use>
                    </svg>
                    <h2>ŞUBE ADRESİ</h2>
                </header>
                <span>
                    {props.address}
                </span>
            </div>
        </div>
    )
}

export default BranchInfo;