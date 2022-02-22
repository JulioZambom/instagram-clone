import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import { MainContainer, Button } from './styles';

const Tabs = () => {
    return(
        <MainContainer>
            <Button><Icons name="ios-home-outline" size={28} color="white"/></Button>
            <Button><Icons name="ios-search-outline" size={28} color="white"/></Button>
            <Button><Icons name="ios-play-outline" size={28} color="white"/></Button>
            <Button><Icons name="ios-pricetag-outline" size={28} color="white"/></Button>
            <Button><Icons name="ios-person-outline" size={28} color="white"/></Button>
        </MainContainer>
    );
}

export default Tabs;