import { View, FlatList, Dimensions } from 'react-native';
import tw from '../lib/tw';
import videos from '../app/data/home-videos.json';
import VideoCard from '../components/CarteVideo';

const { height } = Dimensions.get('window');

export default function AccueilScroll() {
  return (
    <View style={tw`flex-1 bg-black`}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoCard
            videoUrl={item.videoUrl}
            title={item.title}
            platform={item.platform}
            thumbnail={item.thumbnail}
          />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
      />
    </View>
  );
}
