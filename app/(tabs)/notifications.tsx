// app/(tabs)/notifications.tsx
import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import tw from '@/lib/tw';
import notifications from '../data/notifications.json';
import HeaderPage from '@/components/HeaderPage';
import { Ionicons } from '@expo/vector-icons';

interface Notification {
  id: string;
  avatar: string;
  text: string;
  time: string;
}
export default function NotificationsScreen() {
  return (
    <View style={tw`flex-1 bg-black`}>
      <HeaderPage
        title="Notifications"
        rightIcon={
          <TouchableOpacity>
            <Ionicons name="chatbubble" size={24} color="white" />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={notifications}
        keyExtractor={n=>n.id}
        renderItem={({item})=>(
          <View style={tw`flex-row items-center px-4 py-2 border-b border-gray-700`}>
            <Image source={{uri:item.avatar}} style={tw`w-8 h-8 rounded-full mr-3`} />
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
