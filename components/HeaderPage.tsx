import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from '@/lib/tw';

type Props = {
  title: string;
  iconName?: string; // ex: 'chatbubble-outline'
};

export default function HeaderPage({ title, iconName }: Props) {
  return (
    <View style={tw`w-full bg-black py-4 px-4 flex-row justify-between items-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>{title}</Text>
      {iconName && <Ionicons name={iconName as any} size={24} color="white" />}
    </View>
  );
}