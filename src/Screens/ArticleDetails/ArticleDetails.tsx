import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Types/Navigation';
import {ArrowLeft2 as ArrowLeft} from 'iconsax-react-native';
import styles from './ArticleDetails.styles';
import images from '../../constants/images';

type Props = NativeStackScreenProps<RootStackParamList, 'ArticleDetails'>;

export default function ArticleDetails({route, navigation}: Props) {
  const {article} = route.params || {};

  if (!article) return null;
  const publishedAt = new Date(article.publishedAt);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <ArrowLeft size={22} />
      </TouchableOpacity>
      <Text style={styles.title}>{article.title}</Text>
      <View style={styles.row}>
        <Text style={styles.publishedAt}>
          {`Published at: ${publishedAt.getDay()}/${publishedAt.getDate()}/${publishedAt.getFullYear()}`}
        </Text>
        {article.author ? (
          <Text style={styles.author}>{`By: ${article.author}`}</Text>
        ) : null}
      </View>
      <Image
        defaultSource={images.newsImagePlaceholder}
        src={article.urlToImage}
        style={styles.img}
        resizeMode="cover"
      />
      <Text style={styles.desc}>{article.description}</Text>
    </View>
  );
}
