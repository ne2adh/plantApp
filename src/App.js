import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navegation from './navegation';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import store from './redux/stores';

const App = ()  => {
  return (
    <>
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Navegation />
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
    </>
  );
};


export default App;
