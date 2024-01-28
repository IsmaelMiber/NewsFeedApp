import {TextInput, View} from 'react-native';
import React from 'react';
import Articles from './components/Articles/Articles';
import styles from './Home.styles';
import useGetArticles from './components/Articles/hooks/useGetArticles';
import useLocalization from '../../hooks/useLocalization';

export default function Home() {
  const {articles, query, onChangeText, refreshing, onRefresh} =
    useGetArticles();
  const {localization} = useLocalization();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={localization['search.placeholder']}
        value={query}
        onChangeText={onChangeText}
        style={styles.searchInput}
      />
      <Articles
        articles={articles}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}
