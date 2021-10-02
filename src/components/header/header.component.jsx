import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import { ReactComponent as Logo } from "../../assets/ajb.svg"; 
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentMember } from "../../redux/member/member.selectors";
import DrawerToggle from "../drawer-toggle/drawer-toggle.component";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header.styles"; 
import SideBar from '../sidebar/sidebar.component';
import { selectSideBarHidden } from "../../redux/sidebar/sidebar.selector";
import { toggleSideBarHidden } from "../../redux/sidebar/sidebar.actions"; 

const Header = ({currentMember, hidden} ) =>{
    console.log("HEADER: CurrentMember", currentMember);
    console.log("HIDDEN:", hidden);
    return(
    <HeaderContainer>
        <DrawerToggle clicked={()=>{
            console.log("DrawerToggle Pressed");
            toggleSideBarHidden();
            console.log("HIDDEN:", hidden);
        } }/>
        <OptionsContainer>
            <OptionLink to='/personal-info'>INFO</OptionLink>
           {
               currentMember 
               ? (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> )
               : (<OptionLink to='/signin'>SIGN IN</OptionLink>)
           } 
        </OptionsContainer>
       {    hidden ? null:<SideBar/>  } 
    </HeaderContainer>
)} ;

const mapStateToProps = createStructuredSelector ({
    currentMember: selectCurrentMember,
    hidden: selectSideBarHidden
});

export default connect(mapStateToProps)(Header);
