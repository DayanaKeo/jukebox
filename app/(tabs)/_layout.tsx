import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import IconAccueil from '@/components/icons/IconAccueil';
import IconMusic from '@/components/icons/IconMusic';
import IconCreer from '@/components/icons/IconCreer';
import IconReception from '@/components/icons/IconReception';
// import SwitchProfilModal from '@/components/Profil/SwitchProfilModal';
import profils from '../data/profils.json';

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarBackground: TabBarBackground,
          tabBarButton: HapticTab,
          tabBarStyle: Platform.select({
            ios: { position: 'absolute' },
            default: { backgroundColor: 'black', borderTopWidth: 0 },
          }),
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Accueil', tabBarIcon: ({ focused }) => <IconAccueil isActive={focused} /> }} />
        <Tabs.Screen name="music" options={{ title: 'Music', tabBarIcon: ({ focused }) => <IconMusic isActive={focused} /> }} />
        <Tabs.Screen name="creer" options={{ title: 'Créer', tabBarIcon: ({ focused }) => <IconCreer isActive={focused} /> }} />
        <Tabs.Screen name="reception" options={{ title: 'Réception', tabBarIcon: ({ focused }) => <IconReception isActive={focused} /> }} />
        <Tabs.Screen name="profil/index" options={{ title: 'Compte', tabBarIcon: ({ focused }) => (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              source={{ uri: profils[0].photo }}
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                borderWidth: focused ? 2 : 0,
                borderColor: 'white',
              }}
            />
          </TouchableOpacity>
        ) }} />
      </Tabs>
  );
}