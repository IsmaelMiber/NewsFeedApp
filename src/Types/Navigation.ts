import {Article} from './Article';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  ArticleDetails: {article: Article};
  BottomTabs: undefined;
};
