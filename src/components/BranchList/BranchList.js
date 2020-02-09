import React from 'react';

import classes from './BranchList.module.scss';
import Heading from '../Heading/Heading';
import District from './District/District';
import MapComponent from '../MapComponent/MapComponent';

const BranchList = (props) => {
    let districts = Object.keys(props.branches).sort((a, b) => a.localeCompare(b));
    let branchList = [];
    Object.keys(props.branches).forEach(district => {
        branchList = branchList.concat(props.branches[district])
    });

    return (
        <section className={classes.BranchList}>
            <Heading title="Türkiye İş Bankası Şubeleri" showDistance={false} />

            {branchList.length > 0 ? <div style={{padding: "3rem"}}>
                <MapComponent branches={branchList} zoom={12} />
            </div> : null}

            <div className={classes.BranchList__Districts}>
                { districts.map((district, i) => {
                    return <District 
                        key={district + i}
                        name={district}
                        branches={props.branches[district]}
                        branchClicked={props.branchDetail}
                    />
                }) }
            </div>
        </section>
    )
}

export default BranchList;