import React from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import profils from '../../app/data/profils.json';
import tw from '@/lib/tw';
import { Profil } from '../ProfilCard';
import { useRouter } from 'expo-router';


const router = useRouter();

export default function SwitchProfilModal({ visible, onClose, onSelect }: {
  visible: boolean;
  
  onClose: () => void;
  onSelect: (profil: Profil) => void;
}) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={tw`flex-1 bg-black/80 justify-center items-center`}>
        <View style={tw`bg-black rounded-xl p-6 w-11/12`}>
          <Text style={tw`text-white text-lg font-bold mb-4`}>Choisir un profil</Text>
          <FlatList
            data={profils.slice(0, 5)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                onClose();
                router.push(`/profil/${item.id}`);
                }}
                style={tw`flex-row items-center mb-3`}
              >
                <Image source={{ uri: item.photo }} style={tw`w-10 h-10 rounded-full mr-3`} />
                <Text style={tw`text-white font-semibold`}>{item.nom}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose} style={tw`mt-4`}>
            <Text style={tw`text-gray-400 text-center`}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}