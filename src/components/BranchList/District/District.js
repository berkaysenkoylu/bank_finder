import React from 'react';

import classes from './District.module.scss';

const District = (props) => {
    return (
        <div className={classes.District}>
            <input type="checkbox" className={classes.District__Checkbox} id={`${props.name}-toggle`} />

            <label htmlFor={`${props.name}-toggle`} className={classes.District__Name}>{props.name}</label>

            <ul className={classes.District__Branches}>
                <li style={{display: "flex", alignItems: "center", fontSize: "1.4rem"}}>
                    <span style={{marginRight: "2rem"}}>ICON</span>
                    <div>
                        <p>4233 - İş Bankası Altındağ Şubesi</p>
                        <p>Atıfbey Mahallesi Altındağ Caddesi No:96/E Altındağ</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default District;