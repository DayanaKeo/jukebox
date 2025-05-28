import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import tw from '@/lib/tw';
import HeaderPage from '@/components/HeaderPage';
import events from '../data/events.json';

export default function EventsScreen() {
  return (
    <View style={tw`flex-1 bg-black`}>
      <HeaderPage title="Événements" />
      <FlatList
        data={events}
        keyExtractor={e=>e.id}
        renderItem={({item})=>(
          <View style={tw`px-4 py-3 border-b border-gray-700`}>
            <Text style={tw`text-white font-semibold`}>{item.title}</Text>
            <Text style={tw`text-gray-500`}>{item.date}</Text>
            <TouchableOpacity onPress={()=>Linking.openURL(item.spotifyUrl)}>
              <Text style={tw`text-blue-400 mt-1`}>Écouter sur Spotify</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
