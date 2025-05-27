import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import tw from '../lib/tw';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ResizeMode, Video } from 'expo-av';
import IconAccueil from './icons/IconAccueil';

type Props = {
  videoUrl: string;
  title: string;
  platform: string;
  thumbnail: string;
};

const { height, width } = Dimensions.get('window');


export default function VideoCard({ videoUrl, title, platform, thumbnail }: Props) {
    const [showVideo, setShowVideo] = useState(false);
    console.log('AccueilIcon =', IconAccueil);

    return (
    <View style={[tw`relative`, { height, width }]}>
      {showVideo ? (
        <Video
          source={{ uri: videoUrl }}
          style={tw`absolute w-full h-full`}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
        />
      ) : (
        <TouchableOpacity
          onPress={() => setShowVideo(true)}
          activeOpacity={1}
          style={tw`absolute w-full h-full`}
        >
          <Image
            source={{ uri: thumbnail }}
            style={tw`w-full h-full`}
            resizeMode="cover"
          />
        </TouchableOpacity>
      )}

      {/* Texte en bas à gauche */}
      <View style={tw`absolute bottom-20 left-4 w-3/4`}>
        <Text style={tw`text-white text-lg font-bold`}>{title}</Text>
        <Text style={tw`text-white text-sm`}>{platform}</Text>
      </View>

      {/* Icônes à droite */}
      <View style={[tw`absolute bottom-24 right-4 items-center`, { gap: 16 }]}>
        <TouchableOpacity>
          <Ionicons name="heart" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-social-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
