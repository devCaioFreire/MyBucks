import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';

export default function Picker({ onChange }) {
    return (
        <PickerView style={{}}>
            <RNPickerSelect
                style={{
                    inputIOS: {
                        height: 50,
                        padding: 5,
                        fontSize: 20,
                        color: '#D9D9D9'
                    }
                }}
                placeholder={{
                    label: 'Choose the type',
                    color: '#222',
                    value: null,
                }}
                onValueChange={(type) => onChange(type)}
                items={[
                    { label: 'Income', value: 'Income', color: '#222' },
                    { label: 'Expense', value: 'Expense', color: '#222' },
                ]}
            />
        </PickerView>
    )
}