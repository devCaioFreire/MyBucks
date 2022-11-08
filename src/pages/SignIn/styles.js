import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color: #000;
`;

export const Keyboard = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justfy-content: center;
`;

export const Icon = styled.Image`
width: 120px;
height: 120px;
margin-bottom: 30px
`;

export const InputView = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.8)'
})`
background: rgba(0,0,0,0.50);
width: 90%;
font-size: 17px;
color: #FFF;
margin-bottom: 15px;
padding: 15px;
border-radius: 10px;
`;

export const Btn = styled.TouchableOpacity`
background-color: rgba(0,0,0,0.70);
width: 90%;
justfy-content: center;
alignItems: center;
padding: 15px;
border-radius: 10px;
`;

export const TxtBtn = styled.Text`
color: rgba(255,255,255,1);
font-size: 20px;
font-weight: bold;
letter-spacing: 2px
`;

export const Link = styled.TouchableOpacity`
margin-top: 20px;
margin-bottom: 15px;
`;

export const LinkTxt = styled.Text`
color: #FFF;
font-size: 17px
`;


