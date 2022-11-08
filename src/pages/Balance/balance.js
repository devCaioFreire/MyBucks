import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native'
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth'
import { Background, Header, Title, Input, InputDescription, SubmitBtn, SubmitTxt } from './styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Picker from '../../services/Picker';
import DimensionsStyle from '../../services/dimensions';

export default function Balance() {

  const navigation = useNavigation('');
  const [date, setDate] = useState('')
  const [value, setValue] = useState('');
  const [type, setType] = useState(null);
  const [description, setDescription] = useState('');
  const { user: usuario } = useContext(AuthContext)

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(value)) || type === null || description === '') {
      alert('Fill all fields');
    }

    Alert.alert(
      'Confirm data',
      `
      Value: ${parseFloat(value)}
      Type: ${type}
      Description: ${description}
      `,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Continue',
          onPress: () => handleAdd()
        }
      ]
    )

  }

  async function handleAdd() {
    let uid = usuario.uid;
    let key = await firebase.database().ref('transactions').child(uid).push().key;

    await firebase.database().ref('transactions').child(uid).child(key).set({
      value: parseFloat(value),
      type: type,
      description: description,
      date: format(new Date(), 'dd/MM/yyyy')
    })

    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let balance = parseFloat(snapshot.val().balance);

      type === 'Expense' ? balance -= parseFloat(value) : balance += parseFloat(value);
      user.child('balance').set(balance);

    });

    Keyboard.dismiss();
    setValue('');
    setDescription('');
    navigation.navigate('Home');

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>

        <Header style={{ marginBottom: DimensionsStyle.safeAreaBottomHeight }}>
          <MaterialCommunityIcons name="bank-plus" size={45} color="#8781F2" style={{ marginTop: 40, marginRight: 15, marginStart: 25 }} />
          <Title>Register</Title>
        </Header>

        <SafeAreaView style={{ paddingTop: DimensionsStyle.safeAreaTopHeight, alignItems: 'center' }}>

          <Input
            placeholder='Desired value'
            keyboardType='numeric'
            returnKeyType='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(text) => setValue(text)}
          />

          <Picker onChange={setType} type={type} />

          <InputDescription
            placeholder='Any description'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <SubmitBtn onPress={handleSubmit} activeOpacity={0.5}>
            <SubmitTxt>Register</SubmitTxt>
          </SubmitBtn>

        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}