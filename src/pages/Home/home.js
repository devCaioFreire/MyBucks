import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import DimensionsStyle from '../../services/dimensions';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns'
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth'
import TransactionsList from '../../services/TransactionsList';
import { Background, Header, Container, Name, Balance, Movements, Title, List } from './styles'

export default function Home() {

  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setBalance(snapshot.val().balance);
      });

      await firebase.database().ref('transactions')
        .child(uid).on('value', (snapshot) => {
          setTransactions([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              date: childItem.val().date,
              type: childItem.val().type,
              balance: childItem.val().value,
              description: childItem.val().description,
            };
            setTransactions(oldArray => [...oldArray, list].reverse());
          })
        })

    }

    loadList();
  }, []);


  function handleDel(data) {
    Alert.alert(
      'Warning',
      `Do you wish erase ${data.type} || Value: ${data.balance.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} ?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Continue',
          onPress: () => handleDelOk(data)
        }
      ]
    )
  }

  async function handleDelOk(data) {
    await firebase.database().ref('transactions')
      .child(uid).child(data.key).remove()
      .then(async () => {
        let CurrentBalance = balance;
        data.type === 'Expense' ? CurrentBalance += parseFloat(data.value) : CurrentBalance -= parseFloat(data.balance);

        await firebase.database().ref('users')
          .child(uid)
          .child('balance').set(CurrentBalance);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <Background style={{ paddingTop: DimensionsStyle.safeAreaTopHeight }}>
      <Header>
        <Container>
          <Name>{user && user.name} {user && user.lastName}</Name>
          <Balance>R$ {balance.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Balance>
        </Container>
      </Header>

      <Movements>
        <FontAwesome name="cart-arrow-down" size={28} color="#8781F2"></FontAwesome>
        <Title>Last Transactions</Title>
      </Movements>

      <List
        showsVerticalScrollIndicator={false}
        data={transactions}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<TransactionsList data={item} deletItem={handleDel} />)}
      />
    </Background>
  );
}