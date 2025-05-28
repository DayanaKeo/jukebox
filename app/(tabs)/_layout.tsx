// app/(tabs)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import IconAccueil from '@/components/icons/IconAccueil';
import IconMusic   from '@/components/icons/IconMusic';
import IconCreer   from '@/components/icons/IconCreer';
import IconReception from '@/components/icons/IconReception';
import SwitchProfilModal from '@/components/Profil/SwitchProfilModal';
import IconNotifs from '@/components/icons/IconNotifs';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarBackground: TabBarBackground,
          tabBarButton: HapticTab,
          tabBarStyle: Platform.select({
            ios: { position: 'absolute' },
            default: { backgroundColor: 'black', borderTopWidth: 0 },
          }),
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarInactiveTintColor: 'gray',
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
      <Tabs.Screen name="notifications" options={{ title:'Alerts',     tabBarIcon: ({focused}) => <IconNotifs  isActive={focused}/>} }/>

        <Tabs.Screen
          name="profil/index"
          options={{
            title: 'Compte',
            tabBarIcon: ({ focused }) => (
              <IconAccueil
                isActive={focused}
                onPress={() => setModalVisible(true)}
              />
            ),
          }}
        />
      </Tabs>

      {/* Modal de changement de profil (hors-Tabs) */}
      <SwitchProfilModal
        visible={modalVisible}
        onClose={()       => setModalVisible(false)}
        onSelect={profil => {
          setModalVisible(false);
          // reste dans tabs → ProfilDetail sous Tab
          // expo-router appellera app/(tabs)/profil/[id].tsx
          // via router.push
          import('expo-router').then(({ router }) =>
            router.push(`/profil/${profil.id}`)
          );
        }}
      />
    </>
  );
}
