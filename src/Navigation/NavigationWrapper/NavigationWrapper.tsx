import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticleDetails from '../../Screens/ArticleDetails/ArticleDetails';
import {screenOptions} from '../options';
import {RootStackParamList} from '../../Types/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationWrapper() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={screenOptions}>
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
        <Stack.Screen
          name="ArticleDetails"
          component={ArticleDetails}
          initialParams={{
            article: undefined,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
