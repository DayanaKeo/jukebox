import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';


export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={tw`bg-white px-6 pt-10 pb-20`}>
      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-3xl font-bold text-gray-900`}>Explorer</Text>
      </View>

      <Image
        source={{ uri: 'https://via.placeholder.com/300x200.png?text=Découverte' }}
        style={tw`w-full h-48 rounded-xl mb-6`}
        resizeMode="cover"
      />

      <Text style={tw`text-base text-center text-gray-700 mb-4`}>
        Bienvenue sur la page d'exploration de Juke Box 🎶
      </Text>
      <Text style={tw`text-base text-center text-gray-700`}>
        Ici, tu pourras découvrir des artistes émergents, des playlists, des interviews exclusives
        et des lives inédits !
      </Text>
    </ScrollView>
  );
}
