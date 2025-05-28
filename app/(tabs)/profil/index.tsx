import React from 'react';
import CompteScreen from '@/components/Profil/CompteScreen';
import HeaderPage from '@/components/HeaderPage';
import { View } from 'react-native';
import tw from '@/lib/tw';

export default function MonProfilPage() {
  return (
    <View style={tw`flex-1`}>
      <HeaderPage title="Comptes" />
      <CompteScreen />
    </View>
  );
}