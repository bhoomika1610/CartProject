import {Dimensions, Platform} from 'react-native';
import {FontFamily, Palette} from 'styles';
export const BottomTabBarStyles = {
  tabBarOptions: {
    tabBarActiveTintColor: Palette.primaryBlueColor,
    tabBarInactiveTintColor: Palette.gray,
    tabBarStyle: {height: Platform.OS == 'ios' ? 80 : 70},
    tabBarLabelStyle: {
      fontFamily: FontFamily.Regular,
    },
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2,
  },
  bottomBarButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS == 'ios' ? 0 : 2,
    paddingBottom: Platform.OS == 'ios' ? 0 : 20,
  },
};
