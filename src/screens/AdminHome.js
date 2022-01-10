import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Categories from '../components/home/Categories';
import SearchBar from '../components/home/SearchBar';
import HeaderTab from '../components/home/HeaderTab'
import ReataurantItem from '../components/home/RestaurantItem';
import Home from './Home';
import AddFood from './AddFood';
const SignedIn = ({navigation}) => {
  return (
    <View >
      <HeaderTab />
      <View style={{paddingHorizontal:20}}>
        <SearchBar />
      </View>
      {/* <View>
        <Home />
      </View> */}
      <TouchableOpacity  onPress={() => navigation.navigate('AddFood')}>
      <View style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column-reverse'}}>
        <View
          style={{
            backgroundColor: '#f44336',
            width: 50,
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 7,
            right: 150,
          }}>
          <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
        </View>
      </View>
        </TouchableOpacity>
    </View>
  );
};

export default SignedIn;

const styles = StyleSheet.create({

});
