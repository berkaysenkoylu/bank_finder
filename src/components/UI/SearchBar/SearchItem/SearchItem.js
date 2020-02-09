import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SearchItem.module.scss';

const SearchItem = (props) => {

    return (
        <Link to={`/branches/${props._id}`} className={classes.SearchItemLink} onClick={props.clicked}>
            <div className={classes.SearchItem}>
                <p className={classes.SearchItem__Name}>{props.name}</p>
            </div>
        </Link>
    )
}

export default SearchItem;