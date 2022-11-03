import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

export default function InputField({
    label,
    icon,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction,
    value,
    onChangeText,
    rightIcon,
    secureTextEntry
}) {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    // marginBottom: 12
                }}>
                {icon}
                {inputType == 'password' ? (
                    <TextInput
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0 }}
                        secureTextEntry={secureTextEntry}
                        value={value}
                        onChangeText={onChangeText}
                    />

                ) : (
                    <TextInput
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0 }}
                    />
                )}
                <TouchableOpacity onPress={fieldButtonFunction}
                    style={{ padding: 12, alignSelf: 'flex-end' }}>
                    <Ionicons name={rightIcon} size={22} color="#232323" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{ padding: 12, alignSelf: 'flex-end' }}>
                <Text style={{ color: 'green', fontWeight: '500' }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    );
}
