import styled from "styled-components/native";

export const Container = styled.View`
padding: 10px;
margin-left: 10px;
`;

export const Type = styled.View`
flex-direction: row;
`;

export const IconView = styled.View`
background: ${props => props.type === 'Income' ? '#049301' : '#C62C36'};
flex-direction: row;
align-items: center;
margin-bottom: 5px;
border-radius: 5px;
padding: 5px;
padding-left: 15px;
padding-right: 15px;
`;

export const TypeText = styled.Text`
font-size: 18px;
color: #fff;
margin-left: 10px
font-weight: bold;
`;

export const BalanceText = styled.Text`
margin-left: 2px;
font-size: 18px;
margin-bottom: 5px
font-weight: bold;
color: #FFF;
`;

export const DescriptionText = styled.Text`
margin-left: 2px;
font-size: 18px;
color: #FFF;
margin-bottom: 30px
`;

export const DateText = styled.Text`
margin-left: 2px;
font-size: 18px;
color: #a9a9a9;
margin-bottom: 5px
`;





