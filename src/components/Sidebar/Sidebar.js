import React from 'react'

import classes from './Sidebar.module.scss';
import NavList from './NavList/NavList';

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <NavList />
        </div>
    )
}

export default Sidebar;