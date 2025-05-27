import { View, Text } from 'react-native';
import tw from '@/lib/tw';
import HeaderPage from '@/components/HeaderPage';

export default function Profil() {
  return (
    <View style={tw`flex-1 bg-black px-4 pt-8`}>
      <HeaderPage title="Mon profil" />
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-white text-base`}>Bienvenue sur la page Profil</Text>
      </View>
    </View>
  );
}