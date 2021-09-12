import React from 'react';

import { CredentialContainer, StatusOk, StatusFail } from './credential.styles'; 

const Credential = ({estado}) => (
    <CredentialContainer>
        <h1>Eduardo SUYAMA</h1>
        <p>SOCIO: 977</p>
       {
           estado==='ACTIVO'?
            <StatusOk>ESTADO:{estado}</StatusOk>  
           :
            <StatusFail>ESTADO:{estado}</StatusFail> 
       } 
    </CredentialContainer>
);

export default Credential;