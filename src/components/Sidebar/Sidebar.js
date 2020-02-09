import React from 'react'

import classes from './Sidebar.module.scss';
import NavList from './NavList/NavList';
import Footer from '../Footer/Footer';

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <NavList />

            <Footer />
        </div>
    )
}

export default Sidebar;