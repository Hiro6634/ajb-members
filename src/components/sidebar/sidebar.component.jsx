import React from "react";
import { Link } from "react-router-dom";

import './sidebar.styles.scss';

const SideBar = () => (
    <div className='sidebar'>
        <Link to="/signin">SignIn</Link>
        <span>Option1</span>
        <span>Option2</span>
    </div>
);

export default SideBar;