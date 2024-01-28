import {Text} from 'react-native';
import React from 'react';
import useLocalization from '../../../../hooks/useLocalization';

export default function EmptyList() {
  const {localization} = useLocalization();
  return <Text>{localization['empty.list']}</Text>;
}
