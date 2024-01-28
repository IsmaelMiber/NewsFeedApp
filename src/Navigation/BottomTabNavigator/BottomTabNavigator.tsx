import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home/Home';
import Settings from '../../Screens/Settings/Settings';
import * as Icon from 'iconsax-react-native';
import {screenOptions} from '../options';
import useLocalization from '../../hooks/useLocalization';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

function homeTabBarIcon({color, size}: TabBarIconProps) {
  return <Icon.Home size={size} color={color} />;
}

function settingsTabBarIcon({color, size}: TabBarIconProps) {
  return <Icon.Setting2 size={size} color={color} />;
}

export default function BottomTabNavigator() {
  const {localization} = useLocalization();
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: homeTabBarIcon,
          tabBarLabel: localization['home.tab'],
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: settingsTabBarIcon,
          tabBarLabel: localization['settings.tab'],
        }}
      />
    </Tab.Navigator>
  );
}
