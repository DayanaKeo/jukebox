import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from '@/lib/tw';
import { useRouter } from 'expo-router';
import { profilImages } from '../lib/imageMap';

export type Profil = {
  id: string;
  nom: string;
  pseudo: string;
  photo: string;
  feed: string[];
};

export default function ProfilCard({ id, nom, pseudo, photo }: Profil) {
  const router = useRouter();

  const photoSource = profilImages[photo] || profilImages['Profil-default.png'];

  return (
    <TouchableOpacity
      style={tw`items-center mb-4`}
      onPress={() => router.push(`/profil/${id}`)}
    >
      <Image
        source={photoSource}
        style={tw`w-20 h-20 rounded-full mb-2`}
      />
      <Text style={tw`text-white font-bold text-sm`}>{nom}</Text>
      <Text style={tw`text-gray-400 text-xs`}>{pseudo}</Text>
    </TouchableOpacity>
  );
}
