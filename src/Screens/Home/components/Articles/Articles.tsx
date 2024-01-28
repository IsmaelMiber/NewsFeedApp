import {
  View,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  FlatListProps,
} from 'react-native';
import React, {useCallback} from 'react';
import {Article, Articles as ArticlesType} from '../../../../Types/Article';
import ArticleCard from '../ArticleCard/ArticleCard';
import ArticlesSeparator from '../ArticlesSeparator/ArticlesSeparator';
import ArticleCardStyles from '../ArticleCard/ArticleCard.styles';
import ArticlesSeparatorStyles from '../ArticlesSeparator/ArticlesSeparator.styles';
import EmptyList from '../EmptyList/EmptyList';
import styles from './Articles.styles';

type Props = {
  articles: ArticlesType;
  refreshing: boolean;
  onRefresh: FlatListProps<Article>['onRefresh'];
};

export default function Articles({articles, refreshing, onRefresh}: Props) {
  const renderItem: ListRenderItem<Article> = useCallback(
    ({item}: ListRenderItemInfo<Article>) => {
      return <ArticleCard article={item} />;
    },
    [],
  );
  const getItemLayout = useCallback<FlatListProps<Article>['getItemLayout']>(
    (_, index) => {
      const ITEM_HEIGHT =
        ArticleCardStyles.container.height +
        ArticlesSeparatorStyles.separator.height;
      return {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index};
    },
    [],
  );

  const keyExtractor = useCallback<FlatListProps<Article>['keyExtractor']>(
    article => {
      return article.title;
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        ItemSeparatorComponent={ArticlesSeparator}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        ListEmptyComponent={refreshing ? null : EmptyList}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}
