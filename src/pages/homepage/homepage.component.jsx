import React from 'react';

import { HomePageContainer } from './homepage.styles'; 

const HomePage = () => (
    <HomePageContainer>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div> 
        </div>
    </HomePageContainer>
);

export default HomePage;