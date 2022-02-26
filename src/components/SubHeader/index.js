import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';

import { MainContainer,
        StoriesIcon,
        NewStoryIcon,
        IconContainer,
        StoriesUserContainer,
        StoriesUser,
        Button,
} from './styles';

const SubHeader = () =>{
    return(
        <MainContainer>
            <IconContainer>  
            <LinearGradient start={[0.5, 0.3]}
                  end={[0.2, 0.9]}
                  colors={['#000', '#000']}
                  style={{borderRadius: 36, padding: 1.8}}>
                  <StoriesIcon source={{uri: "https://i.imgur.com/gLh9qCE.jpg"}} style={{borderWidth: 3.5, borderColor: "black"}}/>
                <NewStoryIcon>
                    <Icons name="md-add-circle" size={22} color="#0893ee" style={{margin:-4, marginLeft: -2}}/>                           
                </NewStoryIcon>
                </LinearGradient>
                <StoriesUserContainer>
                  <StoriesUser numberOfLines={1}>Seu story</StoriesUser>  
                </StoriesUserContainer>
                        
            </IconContainer>

            <IconContainer>
            <LinearGradient start={[0.5, 0.3]}
                  end={[0.2, 0.9]}
                  colors={['#c62d8f', '#f99d4b']}
                  style={{borderRadius: 36, padding: 1.8}}>
                  <StoriesIcon source={{uri: "https://i.imgur.com/gLh9qCE.jpg"}} style={{borderWidth: 3.5, borderColor: "black"}}/>
            </LinearGradient>
            <StoriesUserContainer>
                  <StoriesUser numberOfLines={1}>arrudonimous.js</StoriesUser>  
            </StoriesUserContainer>
            </IconContainer>       
        </MainContainer>
    );
}

export default SubHeader;