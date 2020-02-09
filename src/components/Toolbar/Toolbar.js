import React from 'react';

import classes from './Toolbar.module.scss';
import SearchBar from '../UI/SearchBar/SearchBar';

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <span className={classes.Toolbar__Icon}>ICON</span>
            
            <SearchBar />
        </header>
    )
}

export default Toolbar;