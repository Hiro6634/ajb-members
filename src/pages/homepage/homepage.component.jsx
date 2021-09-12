import React from 'react';

import Credential from '../../components/credential/credential.component';
import { HomePageContainer } from './homepage.styles'; 

const HomePage = () => (
    <HomePageContainer>
        <Credential estado='ACTIVO'/>
    </HomePageContainer>
);

export default HomePage;