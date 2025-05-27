import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from '@/lib/tw';

export type Profil = {
  id: string;
  nom: string;
  pseudo: string;
  photo: string;
  feed: string[];
};

export default function ProfilCard({ nom, pseudo, photo }: Profil) {
  return (
    <TouchableOpacity style={tw`items-center mb-4`}>
      <Image
        source={{ uri: photo }}
        style={tw`w-20 h-20 rounded-full mb-2`}
      />
      <Text style={tw`text-white font-bold text-sm`}>{nom}</Text>
      <Text style={tw`text-gray-400 text-xs`}>{pseudo}</Text>
    </TouchableOpacity>
  );
}
