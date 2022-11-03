import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { useTogglePasswordVisibility } from '../components/handlePasswordVisibility';

const LoginScreen = ({navigation, route}) => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [password, setPassword] = useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }} >
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>

                </View>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Login
                </Text>

                <InputField
                    label={'Email ID'}
                    icon={
                        <Ionicons
                            name="mail-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 6, alignSelf: 'center' }}
                        />
                    }
                    keyboardType="email-address"
                />

                <InputField
                    label={'Password'}
                    icon={
                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 6, alignSelf: 'center' }}
                        />
                    }
                    inputType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    fieldButtonLabel={"Forgot password?"}
                    fieldButtonFunction={handlePasswordVisibility}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    rightIcon={rightIcon}
                    secureTextEntry={passwordVisibility}
                />

                <CustomButton label={"Login"} color={'green'}  onPress={() => navigation.navigate('Home')}/>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Don't have Account?</Text>
                </View>
                <CustomButton label={"Register"} color={'#00092c'}  onPress={() => navigation.navigate('Register')}/>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
