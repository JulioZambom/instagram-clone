import styled from "styled-components/native";

export const MainContainer = styled.View`
  top: 0;
`;

export const User = styled.Text`
  color: white;
  font-weight: bold;
  margin-left: 10px;
  /* flex: 1; */
`;

export const Image = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Likes = styled.Text`
  color: white;
  margin-left: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: white;
  margin-top: 3px;
  margin-bottom: 15px;
  margin-left: 16px;
  flex: 1;
  margin-right: 8px;
`;

export const ProfilePic = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-left: 7px;
`;

export const PostHeader = styled.View`
  border-top-width: 0.25px;
  border-top-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 7px;
  margin-bottom: 8px;
  padding-top: 12px;
`;

export const PostSubHeader = styled.View`
  margin-top: 2px;
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconsLeft = styled.View`
  flex-direction: row;
  margin-left: 13px;
`;

export const Button = styled.TouchableHighlight`
  margin-right: 12px;
`;

export const DoubleClick = styled.TouchableOpacity`
  
`;

export const DescContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
