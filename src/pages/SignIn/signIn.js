import React, { useState, useContext } from 'react';
import { ImageBackground, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Background, Keyboard, Icon, InputView, Input, Btn, TxtBtn, Link, LinkTxt } from './styles';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { SignIn, loadingAuth } = useContext(AuthContext);

  function Login() {
    SignIn(email, password);
  }

  return (
    <Background>
      <Keyboard behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <ImageBackground
          source={{ uri: 'https://wallpapercave.com/wp/wp9457821.jpg' }}
          style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

          <Icon
            source={require('../../img/coins3.png')}
          />

          <InputView>
            <Input
              placeholder='Email'
              autoCorrect={false}
              autoCapitalize='none'
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </InputView>

          <InputView>
            <Input
              placeholder='Password'
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </InputView>

          <Btn onPress={Login} activeOpacity={0.5}>
            {
              loadingAuth ? (
                <ActivityIndicator size={30} color='#FFF' />
              ) : (
                <TxtBtn>Login</TxtBtn>
              )
            }

          </Btn>

          <Link onPress={() => navigation.navigate('SignUp')} activeOpacity={0.5}>
            <LinkTxt>Create your account here!</LinkTxt>
          </Link>

        </ImageBackground>
      </Keyboard>
    </Background>
  );
}