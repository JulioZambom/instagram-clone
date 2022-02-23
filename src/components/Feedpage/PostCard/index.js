import React, { useEffect, useState } from "react";
import Icons from "react-native-vector-icons/Ionicons";

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
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [hasClickedFirst, setHasClickedFirst] = useState(false);

  useEffect(() => {
    if (hasClickedFirst) {
      setTimeout(() => {
        setHasClickedFirst(false);
      }, 1000);
    }
  }, [hasClickedFirst]);

  function toggleIsSaved() {
    setIsSaved((prevState) => !prevState);
  }

  function toggleIsLiked() {
    setIsLiked((prevState) => !prevState);
  }

  function handleLikePost() {
    setHasClickedFirst(true);

    if (hasClickedFirst) {
      setIsLiked(true);
    }
  }

  return (
    <MainContainer>
      <PostHeader>
        <ProfilePic source={{ uri: profilepic }}></ProfilePic>
        <User>{user}</User>
      </PostHeader>
      <DoubleClick activeOpacity={1} onPress={() => handleLikePost()} isImageButton>
        <Image source={{ uri: image }} />
      </DoubleClick>
      <PostSubHeader>
        <IconsLeft>
          <Button onPress={() => toggleIsLiked()}>
            {isLiked ? (
              <Icons name="heart" size={28} color="red" />
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
