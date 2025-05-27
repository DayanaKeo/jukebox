import { useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, Image } from 'react-native';
import profils from '../data/profils.json';
import tw from '@/lib/tw';
import HeaderPage from '../../components/HeaderPage';

const profilImages: Record<string, any> = {
  'Profil-1.png': require('@/assets/images/profils/Profil-1.png'),
  'Profil-2.png': require('@/assets/images/profils/Profil-2.png'),
  'Profil-3.png': require('@/assets/images/profils/Profil-3.png'),
  'Profil-4.png': require('@/assets/images/profils/Profil-4.png'),
  'Profil-5.png': require('@/assets/images/profils/Profil-5.png'),
  'Profil-6.png': require('@/assets/images/profils/Profil-6.png'),
  'Profil-7.png': require('@/assets/images/profils/Profil-7.png'),
  'Profil-8.png': require('@/assets/images/profils/Profil-8.png'),
  'Profil-9.png': require('@/assets/images/profils/Profil-9.png'),
  'Profil-10.png': require('@/assets/images/profils/Profil-10.png'),
  'Profil-default.png': require('@/assets/images/profils/Profil-default.png'),
};

export default function ProfilPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const profil = profils.find(p => p.id === id);

  if (!profil) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-black`}>
        <Text style={tw`text-white`}>Profil introuvable</Text>
      </View>
    );
  }

  const photoSource = profilImages[profil.photo] || profilImages['Profil-default.png'];

  return (
    <View style={tw`flex-1 bg-black px-4 pt-8`}>
      <HeaderPage title={profil.nom} />
      <View style={tw`items-center mt-4`}>
        <Image source={photoSource} style={tw`w-24 h-24 rounded-full`} />
        <Text style={tw`text-white text-lg font-bold`}>{profil.nom}</Text>
        <Text style={tw`text-gray-400`}>{profil.pseudo}</Text>
      </View>
      <FlatList
        data={profil.feed}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={tw`text-white mt-2 underline`}>{item}</Text>
        )}
        contentContainerStyle={tw`mt-6`}
      />
    </View>
  );
}