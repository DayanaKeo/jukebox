import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import tw from '@/lib/tw';
import HeaderPage from '../HeaderPage';
import { Ionicons } from '@expo/vector-icons';
import profils from '../../app/data/profils.json';
import { profilImages } from '@/lib/imageMap';
import { useGlobalSearchParams } from 'expo-router';

const { id } = useGlobalSearchParams();
const profil = profils.find(p => p.id === id) || profils[0];

const feedMock = [
  { id: '1', image: require('../../assets/images/profils/Profil-1.png'), views: '24.9k' },
  { id: '2', image: require('../../assets/images/profils/Profil-1.png'), views: '76.8k' },
  { id: '3', image: require('../../assets/images/profils/Profil-1.png'), views: '92.7k' },
  { id: '4', image: require('../../assets/images/profils/Profil-1.png'), views: '2.8k' },
  { id: '5', image: require('../../assets/images/profils/Profil-1.png'), views: '130.1k' },
];

export default function CompteScreen() {
  const photoSource = profilImages[profil?.photo ?? 'Profil-default.png'];

  return (
    <View style={tw`flex-1 bg-black`}>
      <View style={tw`bg-gradient-to-b from-[#2A0A7E] to-black p-4`}>  
        <View style={tw`items-center`}>
          <Image
            source={photoSource}
            style={tw`w-24 h-24 rounded-full`}
          />
          <Text style={tw`text-white text-xl font-bold mt-2`}>{profil?.nom}</Text>
          <Text style={tw`text-gray-300`}>{profil?.pseudo}</Text>
          <Text style={tw`text-white text-sm mt-1`}>Abonnés à 10 personnes</Text>

          <View style={tw`flex-row gap-2 mt-2`}>
            <TouchableOpacity style={tw`border border-white rounded-full px-3 py-1`}>
              <Text style={tw`text-white text-xs`}>modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`border border-white rounded-full px-3 py-1`}>
              <Text style={tw`text-white text-xs`}>partager profil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={tw`flex-row justify-around border-b border-gray-700 py-3`}>
        <Ionicons name="apps" size={22} color="white" />
        <Ionicons name="repeat" size={22} color="white" />
        <Ionicons name="heart" size={22} color="white" />
        <Ionicons name="bookmark" size={22} color="white" />
      </View>

      <FlatList
        data={feedMock}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={tw`w-1/3 aspect-[2/3] p-0.5`}>
            <Image source={item.image} style={tw`w-full h-full rounded-sm`} resizeMode="cover" />
            <View style={tw`absolute bottom-1 left-1 flex-row items-center gap-1`}>
              <Ionicons name="eye" size={12} color="white" />
              <Text style={tw`text-white text-xs`}>{item.views}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={tw`pb-20`}
      />
    </View>
  );
}
