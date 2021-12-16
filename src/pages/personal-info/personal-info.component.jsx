import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import './personal-info.styles.scss';

import Credential from '../../components/credential/credential.component';

const PersonalInfoPage = ({currentUser}) => (
    <div className = 'personal-info'>
        {
            currentUser ? 
                <Credential />
            : null
        }
    </div>
);

const mapStateToProps = () => createStructuredSelector({
    currentUser: selectCurrentUser
});


export default connect(mapStateToProps)(PersonalInfoPage);