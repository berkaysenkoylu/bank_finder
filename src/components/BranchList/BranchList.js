import React, { useState, useEffect, useRef } from 'react';

import classes from './BranchList.module.scss';
import Heading from '../Heading/Heading';
import District from './District/District';
import MapComponent from '../MapComponent/MapComponent';
import RangeSlider from '../UI/RangeSlider/RangeSlider';

import useGetGeoLocation from '../../hooks/useGetGeoLocation';

const BranchList = React.memo((props) => {
    const [branches, setBranches] = useState([]);
    const coords = useGetGeoLocation();

    useEffect(() => {
        setBranches(props.branches)
    }, [props.branches]);


    let district_dict = useRef();
    district_dict.current = {};
    branches.forEach(branch => {
    	if(!district_dict.current.hasOwnProperty(branch.district)) {
    		district_dict.current[`${branch.district}`] = [];
    	}

    	district_dict.current[`${branch.district}`].push(branch);
    });

    let districts = useRef();
    districts.current = Object.keys(district_dict.current).sort((a, b) => a.localeCompare(b));


    const getDistance = (loc1, loc2) => {
        if(typeof loc1 !== 'object' || typeof loc2 !== 'object') {
            return Infinity;
        }
    
        if(isNaN(loc1.longitude) || isNaN(loc2.longitude) || isNaN(loc1.latitude) || isNaN(loc2.latitude)) {
            return Infinity;
        }
    
        let p = Math.PI / 180;
        
        let a = 0.5 - Math.cos((loc2.latitude - loc1.latitude) * p) / 2 + Math.cos(loc1.latitude * p) * Math.cos(loc2.latitude * p) *
            (1 - Math.cos((loc2.longitude - loc1.longitude) * p)) / 2;
    
        return 2 * 6371 * Math.asin(Math.sqrt(a));
    }

    const onFindBetweenRangeHandler = (values) => {
        let branchList = [];
        Object.keys(props.branches).forEach(district => {
            branchList = branchList.concat(props.branches[district])
        });

        let closestBranches = branchList.filter(branch => {
            let distance = getDistance(coords, branch.coords);
            if(distance <= values.rightMost && distance >= values.leftMost) {
                return branch
            }
            else {
                return null
            }
        });
        setBranches(closestBranches);
    }

    return (
        <section className={classes.BranchList}>
            <Heading title="Türkiye İş Bankası Şubeleri" showDistance={false} />

            <header className={classes.BranchList__Header}>
                <h2>
                    EN YAKIN ŞUBEYİ BUL
                </h2>
            </header>

            <div className={classes.BranchList__Slider}>
                <RangeSlider max={150} changed={onFindBetweenRangeHandler} />
            </div>

            {branches.length > 0 ? <div style={{padding: "3rem"}}>
                <MapComponent branches={branches} zoom={12} />
            </div> : null}

            <div className={classes.BranchList__Districts}>
                { districts.current.length > 0 ? districts.current.map((district, i) => {
                    return <District 
                        key={district + i}
                        name={district}
                        branches={district_dict.current[district]}
                        branchClicked={props.branchDetail}
                    />
                }) : null }
            </div>
        </section>
    )
})

export default BranchList;