import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.scss';

const NavItem = (props) => {
    return (
        <NavLink to={props.path} className={classes.NavLink} activeClassName={classes.NavLink__Active} exact>
            {props.children}
        </NavLink>
    )
}

export default NavItem;