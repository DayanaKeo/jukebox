import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import tw from '@/lib/tw';
import profils from '@/app/data/profils.json';
import { profilImages } from '@/lib/imageMap';
import HeaderPage from '@/components/HeaderPage';
import { Ionicons } from '@expo/vector-icons';

export default function ProfilPage() {
  // Récupère l'id dans l'URL
  const { id } = useLocalSearchParams<{ id: string }>();
  // Trouve le profil ou fallback
  const profil = profils.find(p => p.id === id) || profils[0];
  const photoSource = profilImages[profil.photo] || profilImages['Profil-default.png'];

  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Header dynamique */}
      <HeaderPage title={profil.nom} iconName="person-circle" />

      {/* Section profil */}
      <View style={tw`items-center mt-4`}>  
        <Image source={photoSource} style={tw`w-24 h-24 rounded-full`} />
        <Text style={tw`text-white text-2xl font-bold mt-2`}>{profil.nom}</Text>
        <Text style={tw`text-gray-300`}>{profil.pseudo}</Text>
        <Text style={tw`text-white text-sm mt-1`}>Abonnés à 10 personnes</Text>
      </View>

      {/* Sous-menu (onglets) */}
      <View style={tw`flex-row justify-around border-b border-gray-700 py-3 mt-4`}>  
        <Ionicons name="apps" size={24} color="white" />
        <Ionicons name="repeat" size={24} color="white" />
        <Ionicons name="heart" size={24} color="white" />
        <Ionicons name="bookmark" size={24} color="white" />
      </View>

      {/* Galerie feed */}
      <FlatList
        data={profil.feed.map((url, idx) => ({ id: idx.toString(), url }))}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={tw`w-1/3 aspect-[4/5] p-0.5`}>  
            <Image
              source={{ uri: item.url }}
              style={tw`w-full h-full rounded-sm`}
              resizeMode="cover"
            />
            <View style={tw`absolute bottom-1 left-1 flex-row items-center space-x-1`}>  
              <Ionicons name="eye" size={12} color="white" />
              <Text style={tw`text-white text-xs`}>--</Text>
            </View>
          </View>
        )}
        contentContainerStyle={tw`pb-20 mt-2`}
      />
    </View>
  );
}
