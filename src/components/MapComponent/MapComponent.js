import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import classes from './MapComponent.module.scss';

const MapComponent = (props) => {
    let centerPosition = [0, 0];
    let content;
    if(props.branches){
        content = props.branches.map(branch => {
            if(branch.hasOwnProperty('coords')) {
                centerPosition[0] += branch.coords.latitude;
                centerPosition[1] += branch.coords.longitude;
                
                return (
                    <Marker key={branch._id} position={[branch.coords.latitude, branch.coords.longitude]}>
                        <Popup>
                            {branch.name} <br /> {branch.address}
                        </Popup>
                    </Marker>
                );
            }
            else {
                return null;
            }
        });

        centerPosition = [centerPosition[0] / props.branches.length, centerPosition[1] /props.branches.length];
    }
    
    return (
        <div className={classes.MapComponent}>
            <Map key={Math.random()} style={{height: "100%"}} center={centerPosition} zoom={props.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {content}
            </Map>
        </div>
    )
}
export default MapComponent;