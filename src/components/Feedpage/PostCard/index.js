import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import DoubleClick from 'react-native-double-click';
import Icons from 'react-native-vector-icons/Ionicons';


import { MainContainer, User, Image, Description, Likes, ProfilePic, PostHeader, PostSubHeader, IconsLeft, Button } from './styles';

const PostCard = ({ postcard: { user, profilepic, image, likes, description }}) => {
    const [isSaved, setIsSaved] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    function toggleIsSaved() {
        setIsSaved((prevState) => !prevState);
    }

    function toggleIsLiked() {
        setIsLiked((prevState) => !prevState);
    }

    function handleLikePost() {
        setIsLiked(true);
    }

    const [hasClickedFirst, setHasClickedFirst] = useState(false);

    useEffect(() => {
        if (hasClickedFirst) {
            setTimeout(() => {
                setHasClickedFirst(false);
            }, 1000);
        }
    }, [hasClickedFirst]);

    return(
        <MainContainer>
            <PostHeader>
                <ProfilePic source={{ uri: profilepic }}></ProfilePic>
                <User>{user}</User>
            </PostHeader>
                <Button onPress={}>
                    <Image source={{ uri: image }}  />
                </Button>
            <PostSubHeader>
                <IconsLeft>
                    <Button onPress={() => toggleIsLiked()}>
                        {isLiked ? (
                            <Icons name='heart' size={28} color="red"/>
                        ): (
                            <Icons name='ios-heart-outline' size={28} color="white"/>
                        )}
                    </Button>
                    <Button 
                        onDoublePress={() => { console.log('double clicked') }}
                    >
                        <Icons name='ios-chatbubbles-outline' size={28} color="white"/>
                    </Button>
                    <Button><Icons name='ios-send-outline' size={28} color="white"/></Button>
                </IconsLeft>
                <Button onPress={() => toggleIsSaved()} >
                    {isSaved ? (
                        <Icons name='bookmark' size={28} color="white"/>

                    ): (
                        <Icons name='ios-bookmark-outline' size={28} color="white"/>
                    )}
                </Button>
            </PostSubHeader>
                <Likes>{likes} curtidas</Likes>
                <Description>{description}</Description>
        </MainContainer>
    );
}

export default PostCard;