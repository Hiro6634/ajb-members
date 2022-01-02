import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import { ReactComponent as Logo } from '../../assets/ajb.svg';
//import logo from '../../assets/ajb.svg';
import logo from '../../assets/ajb.png';

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";

//import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src={logo} alt={"logo"} className='mlogo'/>
        </Link>
        <div className='options'>
            <div className='option' to='/info'>Info</div>
            {
                currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>Salir</div>
                :
                    <Link className='option' to='/signin'>Ingresar</Link>
            }
        </div>
    </div>
);
//<Logo className='logo-container' />
//<img src={logo} alt="logo" className='logo-container'/>

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)( Header);