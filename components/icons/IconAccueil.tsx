import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

import AccueilIcon from '../../assets/images/icons/nav/accueil.svg';
import AccueilClickIcon from '../../assets/images/icons/nav/accueil-click.svg';

type Props = {
  onPress?: () => void;
  isActive?: boolean;
  size?: number;
};

console.log('AccueilIcon:', typeof AccueilIcon); // ← doit afficher 'function'
console.log('AccueilClickIcon:', typeof AccueilClickIcon);

export default function IconAccueil({ onPress, isActive = false, size = 28 }: Props) {
  const IconComponent: React.FC<SvgProps> = isActive ? AccueilClickIcon : AccueilIcon;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <IconComponent width={size} height={size} />
    </TouchableOpacity>
  );
}
