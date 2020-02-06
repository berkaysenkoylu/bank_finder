import React from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../../components/Toolbar/Toolbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Gallery from '../../components/Gallery/Gallery';

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            <Toolbar />
            
            <main className={classes.Layout__Main}>
                <Sidebar />

                <section>
                    <Gallery />

                    {props.children}
                </section>
            </main>
        </div>
    )
}


export default Layout;