import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function AccountInfoScreen(navigation) {

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{
        padding: 12,
        height: 60, justifyContent: 'center',
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='close-outline' size={24} color={'white'} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{}}>
        <View style={{ flex: 1 }}>
          <View style={{ width: '100%', height: 0.5, backgroundColor: '#c2c2c2', opacity: 0.3 }}></View>
          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            height: 60
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='list-outline' size={20} color={'white'} />
              <Text>Details</Text>
            </View>
            <Ionicons name='chevron-forward-outline' size={20} color={'white'} />
          </TouchableOpacity>
          <View style={{ width: '100%', height: 0.5, backgroundColor: '#c2c2c2', opacity: 0.3 }}></View>
          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            height: 60
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='person-outline' size={20} color={'white'} />
              <Text>Edit/Update</Text>
            </View>
            <Ionicons name='chevron-forward-outline' size={20} color={'white'} />
          </TouchableOpacity>
          <View style={{ width: '100%', height: 0.5, backgroundColor: '#c2c2c2', opacity: 0.3 }}></View>
          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            height: 60
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='lock-closed-outline' size={20} color={'white'} />
              <Text>Change Password</Text>
            </View>
            <Ionicons name='chevron-forward-outline' size={20} color={'white'} />
          </TouchableOpacity>
          <View style={{ width: '100%', height: 0.5, backgroundColor: '#c2c2c2', opacity: 0.3 }}></View>
          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            height: 60
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='timer-outline' size={20} color={'white'} />
              <Text>Payment History</Text>
            </View>
            <Ionicons name='chevron-forward-outline' size={20} color={'white'} />
          </TouchableOpacity>
          <View style={{ width: '100%', height: 0.5, backgroundColor: '#c2c2c2', opacity: 0.3 }}></View>
          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            height: 60
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='list-outline' size={20} color={'white'} />
              <Text>Log Out</Text>
            </View>
            <Ionicons name='log-out-outline' size={20} color={'white'} />
          </TouchableOpacity>
          <View style={{ width: '100%', height: 0.5, backgroundColor: '#c2c2c2', opacity: 0.3 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}