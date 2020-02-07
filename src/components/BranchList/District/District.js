import React from 'react';

import classes from './District.module.scss';
import BranchItem from './BranchItem/BranchItem';

const District = (props) => {
    return (
        <div className={classes.District}>
            <input type="checkbox" className={classes.District__Checkbox} id={`${props.name}-toggle`} />

            <label htmlFor={`${props.name}-toggle`} className={classes.District__Name}>{props.name}</label>

            <ul className={classes.District__Branches}>
                {props.branches.map(branch => {
                    return <BranchItem 
                        key={branch._id}
                        code={branch.code}
                        name={branch.name}
                        address={branch.address}
                        clicked={() => props.branchClicked(branch._id, branch.district)}
                    />
                })}
            </ul>
        </div>
    )
}

export default District;