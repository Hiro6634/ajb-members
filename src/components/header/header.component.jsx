import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import { ReactComponent as Logo } from '../../assets/link.svg';
import logo from '../../assets/ajb.png';

import './header.styles.scss';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/'>
        <img src={logo} alt="logo" className='logo-container'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/info'>Info</Link>
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