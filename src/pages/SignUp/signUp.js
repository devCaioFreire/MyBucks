import React, { useContext, useState } from 'react';
import { View, Text, ImageBackground, Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Background, Keyboard, Icon, InputView, Input, Btn, TxtBtn } from '../SignIn/styles';

export default function SignUp() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { SignUp, loadingAuth } = useContext(AuthContext)

    function handleSignUp() {
        SignUp(name, lastName, email, password)
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
                            placeholder='Name'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </InputView>

                    <InputView>
                        <Input
                            placeholder='Last Name'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        />
                    </InputView>

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

                    <Btn onPress={handleSignUp} activeOpacity={0.5}>
                        {
                            loadingAuth ? (
                                <ActivityIndicator size={30} color='#FFF' />
                            ) : (
                                <TxtBtn>Register</TxtBtn>
                            )
                        }
                    </Btn>

                </ImageBackground>
            </Keyboard>
        </Background>
    );
}