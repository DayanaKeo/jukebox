import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

import ReceptionSvg from '../../assets/images/icons/nav/reception.svg';
import ReceptionClickSvg from '../../assets/images/icons/nav/reception-click.svg';

type Props = {
  onPress?: () => void;
  isActive?: boolean;
  size?: number;
};

console.log('ReceptionSvg:', typeof ReceptionSvg); 
console.log('ReceptionClickSvg:', typeof ReceptionClickSvg);

export default function IconReception({ onPress, isActive = false, size = 28 }: Props) {
  const IconComponent = isActive ? ReceptionClickSvg : ReceptionSvg;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <IconComponent width={size} height={size} />
    </TouchableOpacity>
  );
}
