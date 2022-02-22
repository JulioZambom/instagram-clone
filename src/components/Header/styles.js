import styled from 'styled-components/native'

export const MainContainer = styled.View`
    flex-direction: row;
    padding: 7px 15px;
    width: 100%;
    height: 56px;
    background-color: black;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 0.25px;
    border-bottom-color: #3d3d3d;
`

export const HeaderTitle = styled.Text`
    font-size: 20px;
    color: white;  
`

export const IconContainer= styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
    margin-left: 24px;
`

