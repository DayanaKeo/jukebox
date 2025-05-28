import React from 'react';
import ProfilPage from '@/components/Profil/ProfilPage';
import HeaderPage from '@/components/HeaderPage';
import { View } from 'react-native';
import tw from '@/lib/tw';
import { useLocalSearchParams } from 'expo-router';

export default function ProfilDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={tw`flex-1`}>
      <HeaderPage title={`Profil • ${id}`} showBack />
      <ProfilPage />
    </View>
  );
}