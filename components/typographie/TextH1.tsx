import React from 'react';
import { Text, TextProps } from 'react-native';
import tw from '../../lib/tw';
import { colors } from './colors';

export default function TextH1(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        tw`text-3xl font-bold`,
        {
          fontFamily: 'GeneralSans-Bold',
          color: colors.primary,
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
}
