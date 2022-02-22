import React from 'react'
import { MainContainer, HeaderTitle, IconContainer, Button } from './styles';
import Icons from 'react-native-vector-icons/Ionicons'

// ios-heart-outline
// ios-add-circle-outline
// ios-send-outline

const Header = () =>{
    return(
    <MainContainer>
        <HeaderTitle>Instagram</HeaderTitle>
        <IconContainer>
        <Button className="btn"><Icons name="ios-heart-outline" size={28} color='white'/></Button>
        <Button className="btn"><Icons name="ios-add-circle-outline" size={28} color='white'/></Button>
        <Button className="btn"><Icons name="ios-send-outline" size={28} color='white'/></Button>
        </IconContainer>
    </MainContainer>
    );
}

export default Header;