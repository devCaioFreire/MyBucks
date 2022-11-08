import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Container, Name, Header, NewLink, NewText, Logout, LogoutText } from './styles'
import { AuthContext } from '../../contexts/auth'
import DimensionsStyle from '../../services/dimensions';

export default function Profile() {

    const { user, SignOut } = useContext(AuthContext);
    const navigation = useNavigation();
    return (
        <Container style={{ paddingTop: DimensionsStyle.safeAreaTopHeight }}>
            <Header>
                <MaterialIcons name="person" color={'#8781F2'} size={45} style={{ marginTop: 40, marginRight: 15, marginStart: 25 }} />
                <Name>{user && user.name} {user && user.lastName}</Name>
            </Header>

            <NewLink onPress={() => navigation.navigate('Register')} activeOpacity={0.5}>
                <MaterialIcons name="account-balance-wallet" color={'#FFF'} size={30} style={{ marginRight: 20 }}></MaterialIcons>
                <NewText>Register expenses</NewText>

            </NewLink>
            <Logout onPress={() => SignOut()} activeOpacity={0.5}>
                <MaterialIcons name="exit-to-app" color={'#FFF'} size={30} style={{ marginRight: 20, marginLeft: -30 }}></MaterialIcons>
                <LogoutText>Log Out</LogoutText>
            </Logout>
        </Container >
    );
} 