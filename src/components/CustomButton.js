import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CustomButton({ label, onPress, color }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: color,
                padding: 20,
                borderRadius: 10,
                marginBottom: 30,
                borderWidth: label == 'Login' ? 0 : 1,
                borderColor: '#f2f2f2'
            }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#fff',
                }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}
