import {useState, useEffect} from 'react';

import useGetGeoLocation from './useGetGeoLocation';

const useGetDistance = (target) => {
    const currLoc = useGetGeoLocation({ latitude: null, longitude: null });
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        if(typeof target !== 'object' || typeof target === 'undefined') {
            setDistance(Infinity);
            return;
        }
    
        if(isNaN(target.latitude) || isNaN(target.longitude) || currLoc.latitude === null || currLoc.longitude === null) {
            setDistance(Infinity);
            return;
        }

        let p = Math.PI / 180;
    
        let a = 0.5 - Math.cos((target.latitude - currLoc.latitude) * p) / 2 + Math.cos(currLoc.latitude * p) * Math.cos(target.latitude * p) *
            (1 - Math.cos((target.longitude - currLoc.longitude) * p)) / 2;

        let dist = 2 * 6371 * Math.asin(Math.sqrt(a));
        
        setDistance(dist);
    }, [currLoc.latitude, currLoc.longitude, target]);

    return distance;
}

export default useGetDistance