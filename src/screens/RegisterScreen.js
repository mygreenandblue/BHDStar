import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';

const RegisterScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [dobLabel, setDobLabel] = useState('Date of Birth');

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>

                </View>

                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Register
                </Text>

                <InputField
                    label={'Full Name'}
                    icon={
                        <Ionicons
                            name="person-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 6, alignSelf: 'center' }}
                        />
                    }
                />

                <InputField
                    label={'Email ID'}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{ marginRight: 6, alignSelf: 'center' }}
                        />
                    }
                    keyboardType="email-address"
                />

                <InputField
                    label={'Phone'}
                    icon={
                        <MaterialIcons
                            name="phone"
                            size={20}
                            color="#666"
                            style={{ marginRight: 6, alignSelf: 'center' }}
                        />
                    }
                    keyboardType="number"
                />

                <InputField
                    label={'Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 6, alignSelf: 'center' }}
                        />
                    }
                    inputType="password"
                />

                <InputField
                    label={'Confirm Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 6, alignSelf: 'center' }}
                        />
                    }
                    inputType="password"
                />

                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginBottom: 30,
                    }}>
                    <Ionicons
                        name="calendar-outline"
                        size={20}
                        color="#666"
                        style={{ marginRight: 6, alignSelf: 'center' }}
                    />
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text style={{ color: '#666', marginLeft: 5, marginTop: 5 }}>
                            {dobLabel}
                        </Text>
                    </TouchableOpacity>
                </View>

                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode={'date'}
                    maximumDate={new Date('2005-01-01')}
                    minimumDate={new Date('1980-01-01')}
                    onConfirm={date => {
                        setOpen(false);
                        setDate(date);
                        setDobLabel(date.toDateString());
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                />

                <InputField
                    label={'Gender'}
                />

                <InputField
                    label={'Address'}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Already registered? </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: 'green', fontWeight: '500' }}> Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 50 }}></View>
            </ScrollView>

            <View style={{ position: 'absolute', bottom: -30, width:'100%' }}>
                <CustomButton label={'Register'} color={'green'} onPress={() => { }} />
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;
