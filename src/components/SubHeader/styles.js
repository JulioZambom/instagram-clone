import styled from 'styled-components/native'

export const MainContainer = styled.View`
    width: 100%;
    height: 100px;
    align-items: center;
    padding: 8px;
    padding-top: 20%;
    margin-bottom: 10px;
    flex-direction: row;
    background-color: black;
`;

export const StoriesIcon = styled.Image`
    width: 72px;
    height: 72px;
    border-radius: 36px;
    border-width: 4px;
    border-color: black;
`;

export const NewStoryIcon = styled.View`
    background-color: white;
    position: absolute;
    bottom: 2px;
    right: 2px;
    border-radius: 24px;
    border-width: 3px;
`;

export const StoriesUserContainer = styled.View`
    width: 82px;
    align-items: center;
    justify-content: center;
    padding-bottom: 3px;
`;

export const StoriesUser = styled.Text`
    color: white;
    margin-top: 3px;
    font-size: 12px;
`;

export const IconContainer = styled.View`
    margin: 0px 4px;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
 
`;

