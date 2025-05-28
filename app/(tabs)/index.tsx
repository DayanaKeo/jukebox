import HeaderPage from '@/components/HeaderPage';
import tw from '@/lib/tw';
import AccueilScroll from '@/pages/Accueil';
import React from 'react';
import { View } from 'react-native';

export default function HomeScreen() {
   return (
    <View style={tw`flex-1`}>
      <HeaderPage title="" />
      <AccueilScroll />
    </View>
  );
}
