import React, {useCallback} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {Article} from '../../../../Types/Article';
import styles from './ArticleCard.styles';
import images from '../../../../constants/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../Types/Navigation';

type Props = {
  article: Article;
};

export default function ArticleCard({article}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPress = useCallback(() => {
    navigation.navigate('ArticleDetails', {article});
  }, [navigation, article]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        src={article.urlToImage}
        defaultSource={images.newsImagePlaceholder}
        resizeMode="cover"
        style={styles.img}
      />
      <Text style={styles.title}>{article.title}</Text>
    </TouchableOpacity>
  );
}
