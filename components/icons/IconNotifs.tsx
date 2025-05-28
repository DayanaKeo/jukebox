import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

import NotifsIcon from '../../assets/images/icons/notification.svg';
import NotifsClickIcon from '../../assets/images/icons/notification-click.svg';

type Props = {
  onPress?: () => void;
  isActive?: boolean;
  size?: number;
};

console.log('NotifsIcon:', typeof NotifsIcon); // ← doit afficher 'function'
console.log('NotifsClickIcon:', typeof NotifsClickIcon);

export default function IconNotifs({ onPress, isActive = false, size = 28 }: Props) {
  const IconComponent: React.FC<SvgProps> = isActive ? NotifsClickIcon : NotifsIcon;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <IconComponent width={size} height={size} />
    </TouchableOpacity>
  );
}
