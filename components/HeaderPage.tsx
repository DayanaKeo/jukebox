import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from '@/lib/tw';
import { useRouter } from 'expo-router';

type Props = {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightIcon?: React.ReactNode;
};

export default function HeaderPage({
  title,
  showBack = false,
  onBack,
  rightIcon,
}: Props) {
  const router = useRouter();
  return (
    <View style={tw`flex-row items-center justify-center px-4 pt-4 pb-2 mt-6 mb-2 bg-black`}>
      <View style={tw`flex-row items-center`}>
        {showBack && (
          <TouchableOpacity
            onPress={onBack ?? (() => router.back())}
            style={tw`mr-3 p-1`}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
        <Text style={tw`text-white text-xl font-bold`}>{title}</Text>
      </View>
      {rightIcon && (
        <View style={tw`p-1`}>
          {rightIcon}
        </View>
      )}
    </View>
  );
}
