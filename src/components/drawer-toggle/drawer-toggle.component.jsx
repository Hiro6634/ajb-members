import React from "react";

import './drawer-toggle.styles.scss';

const DrawerToggle = ({clicked}) => (
    <div className='drawer-toggle' onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;