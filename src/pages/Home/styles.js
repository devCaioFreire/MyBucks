import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background: #0f0128;
`;

export const Header = styled.View`
background: #240061;
padding-top: 80px;
margin-top: -50px;
`;

export const Container = styled.View`
margin-left: 15px;
margin-bottom: 25px
`;

export const Name = styled.Text`
font-size: 22px;
color: #FFF;
font-style: italic;
`;

export const Balance = styled.Text`
margin-top: 10px;
font-size: 30px;
color: #FFF;
font-weight: bold;
`;

export const Movements = styled.View`
margin-left: 20px;
margin-top: 30px;
margin-bottom: 10px;
flex-direction: row;
align-items: center;
`;

export const Title = styled.Text`
color: #8781F2;
margin-left: 15px;
font-size: 16px;
font-weight: bold;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 30px;
    background-color: #6700f7;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
`;