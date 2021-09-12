import React from 'react';

import Credential from '../../components/credential/credential.component';
import { PersonalInfoPageContainer } from './personalinfo.styles'; 

const PersonalInfoPage = () => (
    <PersonalInfoPageContainer>
        <Credential estado='MOROSO'/>
    </PersonalInfoPageContainer>
);

export default PersonalInfoPage;