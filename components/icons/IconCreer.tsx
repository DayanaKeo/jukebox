import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

import IconCreerSvg from '../../assets/images/icons/nav/creer.svg';
import IconCreerClick from '../../assets/images/icons/nav/creer-click.svg';

type Props = {
  onPress?: () => void;
  isActive?: boolean;
  size?: number;
};

console.log('IconCreer:', typeof IconCreerSvg); 
console.log('IconCreerClick:', typeof IconCreerClick);

export default function IconCreer({ onPress, isActive = false, size = 28 }: Props) {
  const IconComponent = isActive ? IconCreerClick : IconCreerSvg;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <IconComponent width={size} height={size} />
    </TouchableOpacity>
  );
}
