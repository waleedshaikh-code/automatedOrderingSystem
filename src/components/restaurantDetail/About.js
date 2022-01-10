import React from 'react';
import {View, Text, Image,ScrollView} from 'react-native';


const yelpRestaurant = {
  name: 'Hyderabadi Biryani Center',
  image: 'https://hamariweb.com/recipes/images/recipeimages/3464.jpg',
  price: "PKR:",
  reviews: "1500",
  rating:'4.5',
  categories: [{title:"Biryani"},{title:"Hyderabadi Biryani"}],
};

const {name,image,price,reviews,rating,categories} =yelpRestaurant;

const formattedCategories = categories.map(cat => cat.title).join(' • ');

const description = `${formattedCategories} ${  price ? ' • ' + price : ''
} • 🎫 • ${rating} ⭐ (${reviews}+)`;


export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = props => (
  <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
);

const RestaurantName = props => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}>
    {props.title}
  </Text>
);

const RestaurantDescription = props => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}>
    {props.description}
  </Text>
);
