import styled from "styled-components";

export const Container = styled.SafeAreaView`
flex: 1;
background: #0f0128;
width: 100%;
height: 100%;
align-items: center
`;

export const Header = styled.View`
width: 100%;
height: 150px;
margin-top: -50px;
margin-bottom: 50px
background: #240061;
align-items: center;
flex-direction: row;
`;

export const Name = styled.Text`
font-size: 30px;
text-align: center;
margin-top: 40px;
color: #FFF;
`;

export const NewLink = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #8781F2;
width: 90%;
height: 50px;
border-radius: 10px;
margin-bottom: 20px;
margin-vertical: 430px;
flex-direction: row;
`;

export const NewText = styled.Text`
color: #FFF;
font-size: 22px;
letter-spacing: 1px
font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #6700f7;
width: 90%;
height: 50px;
border-radius: 10px;
margin-bottom: 20px;
flex-direction: row;
`;

export const LogoutText = styled.Text`
color: #FFF;
font-size: 22px;
letter-spacing: 1px
font-weight: bold;
`;