import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'

import { MainContainer,
     Logo,
     IconContainer,
     Button 
} from './styles';
import logo from '../../assets/logo.png';

// ios-heart-outline
// ios-add-circle-outline
// ios-send-outline

const Header = () =>{
    return(
    <MainContainer>
        <Logo source={logo} resizeMode='contain'/>
        <IconContainer>
        <Button className="btn"><Icons name="ios-heart-outline" size={28} color='white'/></Button>
        <Button className="btn"><Icons name="ios-add-circle-outline" size={28} color='white'/></Button>
        <Button className="btn"><Icons name="ios-send-outline" size={28} color='white'/></Button>
        </IconContainer>
    </MainContainer>
    );
}

export default Header;