import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarStyles} from './BottomTabBar.styled';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart, Home, About} from 'mainscreens';
import Screens from 'screensname';
import {Icon, IconNames} from 'icons';
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Products = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.About}
        component={About}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const CustomTabBarButtonSquare = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{}}>
      <View
        style={{
          borderColor: props.accessibilityState.selected ? '#1DCBF7' : 'white',
          borderTopWidth: 2,
        }}></View>
      <View style={styles.buttonContainer}>
        <View style={styles.bottomBarButton}>{props.children}</View>
      </View>
    </TouchableOpacity>
  );
};

const BottomTabBar = () => {
  return (
    <BottomTab.Navigator screenOptions={styles.tabBarOptions}>
      <BottomTab.Screen
        name={Screens.Products}
        component={Products}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              iconName={IconNames.HomeIcon}
              height={28}
              width={28}
              style={{
                color: focused ? '#1DCBF7' : '#949494',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButtonSquare {...props} />,
        }}
      />
      <BottomTab.Screen
        name={Screens.Cart}
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon
                iconName={IconNames.CartActiveIcon}
                height={28}
                width={28}
              />
            ) : (
              <Icon iconName={IconNames.CartIcon} height={28} width={28} />
            ),
          tabBarButton: props => <CustomTabBarButtonSquare {...props} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create(BottomTabBarStyles);
export default BottomTabBar;
