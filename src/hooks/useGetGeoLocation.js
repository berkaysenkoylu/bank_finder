import { useState, useEffect } from 'react';

const useGetGeoLocation = () => {
    const [coords, setCoords] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        let geo = navigator.geolocation;

        if(geo) {
            geo.getCurrentPosition(position => {
                let coordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                setCoords(coordinates);
            });
        }
    }, []);

    return coords;
}

export default useGetGeoLocation;