import React from 'react';

import classes from './Toolbar.module.scss';
import SearchBar from '../UI/SearchBar/SearchBar';

const Toolbar = () => {

    let iconImage = require('../../assets/images/icon.png');

    return (
        <header className={classes.Toolbar}>
            <span className={classes.Toolbar__Icon}>
                <img src={iconImage} alt="logo" />
            </span>
            
            <SearchBar />
        </header>
    )
}

export default Toolbar;