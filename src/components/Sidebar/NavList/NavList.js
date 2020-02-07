import React from 'react';

import classes from './NavList.module.scss';
import NavItem from '../NavItem/NavItem';

const NavList = () => {
    return (
        <nav className={classes.NavList}>
            <NavItem path="/">ANA SAYFA</NavItem>

            <NavItem path="/branches">ŞUBELER</NavItem>
        </nav>
    )
}

export default NavList;