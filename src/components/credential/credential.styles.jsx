import styled, { css } from 'styled-components';

const noDebt = css`
    background: green;
`;

const debtor = css`
    background: red;
`;
const getStateColor = props => {
    if(props.isDebtor){
        return debtor;
    }
    return noDebt;
}

const getBackgroundImage = props => {
    return css`
        background-image: linear-gradient(135deg, rgba(0,0,255,.5), rgba(0,0,25,0.5));
        background-repeat: no-repeat;
        background-position: right top;
        background-color: rgba(0,0,255,0.2);
        `;
}

export const CredentialContainer = styled.div`
    max-width: 400px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    ${getBackgroundImage};    
`;

export const CredentialDisplayName = styled.h1`
    color: black;
`;

export const CredentialState = styled.p`
    ${getStateColor};
`;

