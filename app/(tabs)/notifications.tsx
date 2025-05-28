// app/(tabs)/notifications.tsx
import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import tw from '@/lib/tw';
import notifications from '../data/notifications.json';

interface Notification {
  id: string;
  avatar: string;
  text: string;
  time: string;
}

export default function NotificationsScreen() {
  // tell TS this is an array of Notification
  const notifs: Notification[] = notifications;

  return (
    <View style={tw`flex-1 bg-black px-4 pt-4`}>
      <FlatList
        data={notifs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={tw`flex-row items-center py-2 border-b border-gray-700`}>
            <Image source={{ uri: item.avatar }} style={tw`w-8 h-8 rounded-full mr-3`} />
            <View style={tw`flex-1`}>
              <Text style={tw`text-white`}>{item.text}</Text>
              <Text style={tw`text-gray-500 text-xs`}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
