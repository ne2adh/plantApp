import React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';

import Navegation from './navegation';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import store from './redux/stores';

const MyTheme = {
	...DefaultTheme,
	colors: {
	  ...DefaultTheme.colors,
	  background: 'rgb(255, 255, 255)',
	},
  };

const App = ()  => {
  return (
    <>
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer theme={MyTheme}>
					<Navegation />
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
    </>
  );
};


export default App;
