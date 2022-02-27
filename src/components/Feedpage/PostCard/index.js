import React, { useEffect, useState, useRef } from "react";
import { View } from 'react-native'
import Icons from "react-native-vector-icons/Ionicons";
import * as Animatable from 'react-native-animatable';



import {
  MainContainer,
  User,
  Image,
  Description,
  Likes,
  ProfilePic,
  PostHeader,
  PostSubHeader,
  IconsLeft,
  Button,
  DescContainer,
  DoubleClick,
} from "./styles";

const PostCard = ({
  postcard: { user, profilepic, image, likes, description },
}) => {
  const AnimatedIcon = Animatable.createAnimatableComponent(Icons);
  const LikeRef = useRef();
  const [isHeartVisible, setIsHeartVisible] = useState("transparent");

  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [hasClickedFirst, setHasClickedFirst] = useState(false);

  useEffect(() => {
    if (hasClickedFirst) {
      setTimeout(() => {
        setHasClickedFirst(false);
      }, 800);
    }
  }, [hasClickedFirst]);

  function toggleIsSaved() {
    setIsSaved((prevState) => !prevState);
  }

  let teste = 1;

  function toggleIsLiked() {
    setIsLiked((prevState) => !prevState);
  }

  function handleLikePost() {
    setHasClickedFirst(true);

      if(isHeartVisible === "transparent"){
        if (hasClickedFirst) {
          setIsLiked(true);
          setTimeout(() => {
            setIsHeartVisible("white");
            LikeRef.current.bounceIn(900);
            setTimeout(() => {
              LikeRef.current.zoomOut(300);
              setTimeout(() => {
                setIsHeartVisible("transparent");
              }, 0);
            }, 1300);
          }, 0);  
      }
    }
 }
      

  return (
    <MainContainer>
      <PostHeader>
        <ProfilePic source={{ uri: profilepic }}></ProfilePic>
        <User>{user}</User>
      </PostHeader>
      <DoubleClick activeOpacity={1} onPress={() => handleLikePost()}>
          <Image source={{ uri: image }} />
          <View style={{position: 'absolute',top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <AnimatedIcon 
            useNativeDriver
            ref={LikeRef}
            name="heart" 
            size={100}
            color= {isHeartVisible}/> 
          </View>  
      </DoubleClick>
      <PostSubHeader>
        <IconsLeft>
          <Button onPress={() => toggleIsLiked()}>
            {isLiked ? (
              <Icons name="heart" size={28} color="#ed4958" />
            ) : (
              <Icons name="ios-heart-outline" size={28} color="white" />
            )}
          </Button>
          <Button>
            <Icons name="ios-chatbubbles-outline" size={28} color="white" />
          </Button>
          <Button>
            <Icons name="ios-send-outline" size={28} color="white" />
          </Button>
        </IconsLeft>
        <Button onPress={() => toggleIsSaved()}>
          {isSaved ? (
            <Icons name="bookmark" size={28} color="white" />
          ) : (
            <Icons name="ios-bookmark-outline" size={28} color="white" />
          )}
        </Button>
      </PostSubHeader>
      <Likes>{likes} curtidas</Likes>
      {description ? (
        <DescContainer>
          <Description>
            <User>{user} </User>
            {description}
          </Description>
        </DescContainer>
      ) : (
        <Description>{description}</Description>
      )}
    </MainContainer>
  );
};

export default PostCard;
