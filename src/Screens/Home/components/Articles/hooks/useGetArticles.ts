import {useCallback, useEffect, useState} from 'react';
import {Article, Articles} from '../../../../../Types/Article';
import {getTopHeadlines} from '../../../../../API/News';
import {TextInputProps} from 'react-native';
import useLocalization from '../../../../../hooks/useLocalization';

export default function useGetArticles() {
  const [articles, setArticles] = useState<Articles>([]);
  const [refreshing, setRefreshing] = useState(true);
  const [query, setQuery] = useState('');
  const {language} = useLocalization();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  const onChangeText = useCallback<TextInputProps['onChangeText']>(
    text => {
      setQuery(text);
      onRefresh();
    },
    [onRefresh],
  );

  useEffect(() => {
    if (refreshing || language.value) {
      getTopHeadlines.abort();
      getTopHeadlines({q: query, country: language.value}).then(data => {
        if (data) {
          const filteredArticles = data.articles.filter(
            (article: Article) => article.title !== '[Removed]',
          );
          setArticles(filteredArticles);
          setRefreshing(false);
        } else {
          setRefreshing(false);
        }
      });
    }
  }, [refreshing, query, language.value]);

  return {articles, query, onChangeText, refreshing, onRefresh};
}
