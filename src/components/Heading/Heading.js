import React from 'react';

import classes from './Heading.module.scss';

const Heading = (props) => {
    return (
        <header className={classes.Heading}>
            <h2 className={classes.Heading__Title}>
                {props.title}
            </h2>

            <span className={classes.Heading__City}>
                Ankara
            </span>

            {/* put a flag here */}
            <span className={classes.Heading__Distance}>
                15 km
            </span>
        </header>
    )
}

export default Heading;