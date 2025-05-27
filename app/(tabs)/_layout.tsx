import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, TouchableOpacity, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import IconAccueil from '@/components/icons/IconAccueil';
import IconMusic from '@/components/icons/IconMusic';
import IconCreer from '@/components/icons/IconCreer';
import IconReception from '@/components/icons/IconReception';
import profils from '../data/profils.json';
import { useRouter } from 'expo-router';
import SwitchProfilModal from '@/components/Profil/SwitchProfilModal';
// import { Profil } from '@/components/Profil/ProfilCard';

interface Profil {
  id: string;
  nom: string;
  pseudo: string;
  photo: string;
  feed: string[];
}
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleSelectProfil = (profil: Profil) => {
    setModalVisible(false);
    router.push(`./profil/${profil.id}`);
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {
              backgroundColor: 'black',
              borderTopWidth: 0,
            },
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Accueil',
            tabBarIcon: ({ focused }) => <IconAccueil isActive={focused} />,
          }}
        />
        <Tabs.Screen
          name="music"
          options={{
            title: 'Music',
            tabBarIcon: ({ focused }) => <IconMusic isActive={focused} />,
          }}
        />
        <Tabs.Screen
          name="creer"
          options={{
            title: 'Créer',
            tabBarIcon: ({ focused }) => <IconCreer isActive={focused} />,
          }}
        />
        <Tabs.Screen
          name="reception"
          options={{
            title: 'Réception',
            tabBarIcon: ({ focused }) => <IconReception isActive={focused} />,
          }}
        />
        <Tabs.Screen
          name="profil/index"
          options={{
            title: 'Compte',
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image
                  source={{ uri: profils[0].photo }}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 9999,
                    borderWidth: focused ? 2 : 0,
                    borderColor: 'white',
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>

      <SwitchProfilModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleSelectProfil}
      />
    </>
  );
}
