import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import './credential.styles.scss';
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Credential = ({currentUser}) => {

    return(
        <div className='credential-container'>
            <h1 className='display-name'>{currentUser.displayName}</h1>
            <p>Socio: {currentUser.idNumber}</p>
            <p>Categoria: {currentUser.category}</p>
            <p>Estado: {currentUser.state}</p>
        </div>
    )
};

const mapStateToProps = () => createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Credential);