import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../components/BannerSlider';
import { nowShowing, comingSoon, sliderData } from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
    const [filmTab, setFilmTab] = useState(1);

    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />;
    };

    const onSelectSwitch = value => {
        setFilmTab(value);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    alignItems: 'center'
                }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <ImageBackground
                        source={require('../assets/images/user-profile.jpg')}
                        style={{ width: 35, height: 35 }}
                        imageStyle={{ borderRadius: 25 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, marginLeft: 8, color: 'white', fontWeight: '500' }}>
                    Hello, Đạt
                </Text>
            </View>
            <ScrollView style={{}}>
                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#C6C6C6',
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        alignItems: 'center',
                        marginBottom: 12,
                    }}>
                    <Feather
                        name="search"
                        size={20}
                        color="#C6C6C6"
                        style={{ marginRight: 5 }}
                    />
                    <TextInput placeholder="Search" placeholderTextColor="grey" />
                </View>

                <Carousel
                    ref={c => {
                        this._carousel = c;
                    }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                />

                <View style={{ marginVertical: 20 }}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="Now Showing"
                        option2="Coming Soon"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {filmTab == 1 &&
                    nowShowing.map(item => (
                        <ListItem
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            onPress1={() =>
                                navigation.navigate('FilmDetail', {
                                    title: item.title,
                                    id: item.id,
                                    image: item.poster,
                                    subTitle: item.subtitle
                                })
                            }
                            onPress2={() =>
                                navigation.navigate('Booking', {
                                    title: item.title,
                                    id: item.id,
                                })
                            }
                        />
                    ))}
                {filmTab == 2 &&
                    comingSoon.map(item => (
                        <ListItem
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            price={item.price}
                            onPress1={() =>
                                navigation.navigate('FilmDetail', {
                                    title: item.title,
                                    id: item.id,
                                    image: item.poster,
                                    subTitle: item.subtitle
                                })
                            }
                            onPress2={() =>
                                navigation.navigate('FilmDetail', {
                                    title: item.title,
                                    id: item.id,
                                })
                            }
                        />
                    ))}
            </ScrollView>
        </SafeAreaView>
    );
}
