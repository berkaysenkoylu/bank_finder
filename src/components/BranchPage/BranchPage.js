import React from 'react';

const BranchPage = (props) => {
    return (
        <div>
            individual branch of id: {props.match.params.id}
        </div>
    )
}

export default BranchPage;