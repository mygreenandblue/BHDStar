import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet, View, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = 0;
const MAX_HEIGHT = 220;

const FilmDetailScreen = ({ navigation, route }) => {

  const navTitleView = useRef(null);
  const [numLines, setNumLines] = useState(3);

  return (
    <View style={{ flex: 1 }}>
      <Animatable.View style={styles.navTitleView} ref={navTitleView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <FontAwesome name='arrow-left' size={24} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{route.params?.title}</Text>
      </Animatable.View>
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        fadeOutForeground
        renderHeader={() => (
          <Image source={route.params?.image} style={styles.image} />
        )}
      >
        <View style={{ flex: 1 }}>
          <TriggeringView
            style={styles.section}
            onHide={() => navTitleView.current.fadeInUp(200)}
            onDisplay={() => navTitleView.current.fadeOut(100)}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ color: 'white', fontSize: 28, fontWeight: '500' }}>{route.params?.title}</Text>
                <Text style={{ color: 'grey', fontSize: 16, padding: 6 }}>{route.params?.subTitle}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <FontAwesome name="star" size={16} color="green" />
                  <FontAwesome name="star" size={16} color="green" />
                  <FontAwesome name="star" size={16} color="green" />
                  <FontAwesome name="star" size={16} color="green" />
                  <FontAwesome name="star" size={16} color="green" />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="clock-o" size={16} color="grey" />
                <Text style={{ marginLeft: 8, color: 'grey' }}>82 phút</Text>
              </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Description</Text>
            <View>
              <Text numberOfLines={12} style={{ color: 'grey' }}>You asked, Font Awesome delivers with 41 shiny new icons in version 4.7. Want to request new icons? Here's how. Need vectors or want to use on the desktop? Check the cheatsheet.
                You asked, Font Awesome delivers with 41 shiny new icons in version 4.7. Want to request new icons? Here's how. Need vectors or want to use on the desktop? Check the cheatsheet.
                You asked, Font Awesome delivers with 41 shiny new icons in version 4.7. Want to request new icons? Here's how. Need vectors or want to use on the desktop? Check the cheatsheet.</Text>
            </View>
          </TriggeringView>
          <View style={styles.section}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', width: '50%' }}>Released Date</Text>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 8 }}>11/11/2022</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', width: '50%' }}>Rating</Text>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 8 }}>All Customer</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', width: '50%' }}>Language</Text>
              <Text numberOfLines={2} style={{ fontSize: 18, color: 'white', marginLeft: 8 }}>Phụ đề tiếng Việt</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', width: '50%' }}>Screen</Text>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 8 }}></Text>
            </View>

          </View>
          <View style={styles.section}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', width: '50%' }}>Released Date</Text>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 8 }}>11/11/2022</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', width: '50%' }}>Rating</Text>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 8 }}>All Customer</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', width: '50%' }}>Language</Text>
              <Text numberOfLines={2} style={{ fontSize: 18, color: 'white', marginLeft: 8 }}>Phụ đề tiếng Việt</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', width: '50%' }}>Screen</Text>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 8 }}></Text>
            </View>
          </View>
        </View>
      </ImageHeaderScrollView>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', height: 60 }}>
        <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FilmDetailScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 20,
    color: 'white',
    paddingRight: 8
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'black',
    paddingHorizontal: 12
  },
  navTitleView: {
    height: 80,
    alignItems: 'center',
    opacity: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    padding: 12
  },
  navTitle: {
    color: 'white',
    fontSize: 24,
    backgroundColor: 'transparent',
    marginLeft: 20
  },
  sectionLarge: {
    minHeight: 300,
  },
});