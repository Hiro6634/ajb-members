import React from 'react';

//import Credential from '../../components/credential/credential.component';
import { HomePageContainer } from './homepage.styles'; 
import Directory from '../../components/directory/directory.component';


const HomePage = () => (
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
);

export default HomePage;