import {View, Text} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {languages} from '../../constants/languages';
import useLocalization from '../../hooks/useLocalization';
import styles from './Settings.styles';

export default function Settings() {
  const {language, setLanguage, localization} = useLocalization();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{localization['select.language']} </Text>
      <Dropdown
        data={languages}
        labelField="label"
        valueField="value"
        onChange={setLanguage}
        placeholder={localization['select.language']}
        value={language}
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
      />
    </View>
  );
}
