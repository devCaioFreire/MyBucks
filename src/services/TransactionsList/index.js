import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Type, IconView, TypeText, BalanceText, DescriptionText, DateText } from './styles'

export default function TransactionsList({ data, deletItem }) {
    return (
        <TouchableWithoutFeedback onLongPress={() => deletItem(data)}>
            <Container>
                <Type>
                    <IconView type={data.type}>
                        <Ionicons
                            name={data.type === 'Income' ? 'ios-arrow-up-outline' : 'ios-arrow-down-outline'}
                            size={24}
                            color="#FFF"
                            style={{ marginLeft: -10 }}
                        />
                        <TypeText>{data.type}</TypeText>
                    </IconView>
                </Type>

                <DateText>
                    {data.date}
                </DateText>

                <BalanceText>
                    R$ {data.balance.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                </BalanceText>

                <DescriptionText>
                    {data.description}
                </DescriptionText>

            </Container>
        </TouchableWithoutFeedback>

    );
}