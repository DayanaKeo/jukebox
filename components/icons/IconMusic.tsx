import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

import MusicSvg from '../../assets/images/icons/nav/music.svg';
import MusicClickSvg from '../../assets/images/icons/nav/music-click.svg';

type Props = {
  onPress?: () => void;
  isActive?: boolean;
  size?: number;
};

console.log('MusicSvg:', typeof MusicSvg); 
console.log('MusicClickSvg:', typeof MusicClickSvg);

export default function IconMusic({ onPress, isActive = false, size = 28 }: Props) {
  const IconComponent = isActive ? MusicClickSvg : MusicSvg;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <IconComponent width={size} height={size} />
    </TouchableOpacity>
  );
}
