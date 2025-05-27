// import React from 'react';
// import { View, FlatList } from 'react-native';
// import tw from '@/lib/tw';
// import HeaderPage from '@/components/HeaderPage';
// import ProfilCard, { Profil } from '../Profil/ProfilCard';
// import profils from '../../app/data/profils.json';

// export default function ProfilList() {
//   const renderItem = ({ item }: { item: Profil }) => <ProfilCard {...item} />;

//   return (
//     <View style={tw`flex-1 bg-black pt-8 px-4`}>
//       <HeaderPage title="Comptes" iconName="people" />
//       <FlatList
//         data={profils}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         columnWrapperStyle={tw`justify-between mt-4`}
//         contentContainerStyle={tw`pb-10`}
//       />
//     </View>
//   );
// }