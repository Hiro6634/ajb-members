import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import './credential.styles.scss';
import { CredentialContainer, CredentialDisplayName, CredentialState } from './credential.styles';
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Credential = ({currentUser}) => {

    return(
        <CredentialContainer>
            <CredentialDisplayName>{currentUser.displayName}</CredentialDisplayName>
            <p>Socio: {currentUser.idNumber}</p>
            <p>Categoria: {currentUser.category}</p>
            <CredentialState isDebtor={currentUser.state==='Moroso'}>Estado: {currentUser.state}</CredentialState>
            <p>Pase Sanitario: {currentUser.paseSanitario?currentUser.paseSanitario:"NO PRESENTADO"}</p>
        </CredentialContainer>
    )
};

const mapStateToProps = () => createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Credential);