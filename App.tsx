import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavigationWrapper from './src/Navigation/NavigationWrapper/NavigationWrapper';
import LanguageProvider from './src/providers/LanguageProvider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <LanguageProvider>
        <NavigationWrapper />
      </LanguageProvider>
    </SafeAreaView>
  );
}

export default App;
