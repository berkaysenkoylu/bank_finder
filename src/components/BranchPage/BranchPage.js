import React, { useState, useEffect } from 'react';
import axiosBranch from '../../axios-branch';

import useGetDistance from '../../hooks/useGetDistance';

import Heading from '../Heading/Heading';
import MapComponent from '../MapComponent/MapComponent';

const BranchPage = React.memo((props) => {
    const [branch, setBranch] = useState({});
    const distance = useGetDistance(branch.coords);

    useEffect(() => {
        if(props.location.state) {
            setBranch(props.location.state.selectedBranch);
        }
        else {
            axiosBranch.get(`/${props.match.params.id}`).then(result => {
                setBranch(result.data.branch);
            });
        }
    }, [props.location.state, props.match.params.id]);

    return (
        <section>
            <Heading title={branch.name} showDistance={true} distance={distance} />
            
            <div style={{padding: "2rem"}}>
                <MapComponent branches={[branch]} />
            </div>
        </section>
    )
})

export default BranchPage;