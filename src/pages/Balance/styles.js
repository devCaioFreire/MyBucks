import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background: #0f0128;
`;

export const Header = styled.View`
width: 100%;
height: 150px;
background: #240061;
align-items: center;
flex-direction: row;
`;

export const Title = styled.Text`
font-size: 30px;
text-align: center;
margin-top: 40px;
color: #FFF;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#D9D9D9'
})`
height: 50px;
width: 90%;
background-color: #8781F2;
border-radius: 10px;
margin-bottom: 20px;

font-size: 20px;
padding-horizontal: 10px;
color: #FFF;
`;

export const InputDescription = styled.TextInput.attrs({
    placeholderTextColor: '#D9D9D9'
})`
height: 50px;
width: 90%;
background-color: #8781F2;
border-radius: 10px;
margin-bottom: 20px;
font-size: 20px;
padding-horizontal: 10px;
color: #FFF;
`;

export const SubmitBtn = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #6700f7;
width: 90%;
height: 50px;
border-radius: 10px;
`;

export const SubmitTxt = styled.Text`
color: #FFF;
font-size: 22px;
letter-spacing: 1px
font-weight: bold;
`;