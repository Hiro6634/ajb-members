import React from "react";

import { ReactComponent as Logo } from "../../assets/ajb.svg"; 
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header.styles"; 


const Header = () => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo viewBox='0 0 200 200'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/personal-info'>INFO</OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;
