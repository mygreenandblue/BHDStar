import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ListItem({ photo, title, subTitle, isFree, price, onPress1, onPress2 }) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
        }}>
            <TouchableOpacity onPress={onPress1} style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image
                    source={photo}
                    style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
                />
                <View style={{ width: windowWidth - 220 }}>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: 14,
                        }}>
                        {subTitle}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: 'white',
                            fontSize: 16,
                            textTransform: 'uppercase',
                        }}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress2} style={{
                backgroundColor: '#0aada8',
                padding: 10,
                width: 100,
                borderRadius: 10,
            }}>
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 14,
                }}>
                    {isFree == 'Yes' && 'Details'}
                    {isFree == 'No' && 'Booking'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
