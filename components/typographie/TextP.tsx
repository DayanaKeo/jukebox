import React from 'react';
import { Text, TextProps } from 'react-native';
import tw from '../../lib/tw';
import { colors } from './colors';

export default function TextP(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        tw`text-base`,
        {
          fontFamily: 'DMSans-Bold',
          color: colors.text,
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
}
