import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from 'screensname';
import {Provider} from 'react-redux';
import store from 'store';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import {BottomTabBar} from 'components';

let persistor = persistStore(store);

const RootStack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName={'Main'}
            screenOptions={{
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: 'black',
                shadowColor: 'transparent',
              },
            }}>
            <RootStack.Screen
              name={Screens.Main}
              children={() => {
                return <BottomTabBar />;
              }}
              options={{headerShown: false}}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
