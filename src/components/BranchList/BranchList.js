import React from 'react';

import classes from './BranchList.module.scss';
import Heading from '../Heading/Heading';
import District from './District/District';

const BranchList = (props) => {
    let districts = Object.keys(props.branches).sort((a, b) => a.localeCompare(b));
    
    return (
        <section className={classes.BranchList}>
            <Heading title="Türkiye İş Bankası Şubeleri" />

            <div className={classes.BranchList__Districts}>
                <District name="Altındağ" />

                <District name="Yenimahalle" />
            </div>
        </section>
    )
}

export default BranchList;