import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings79340Navigator from '../features/Settings79340/navigator';
import Settings79332Navigator from '../features/Settings79332/navigator';
import UserProfile79330Navigator from '../features/UserProfile79330/navigator';
import UserProfile79299Navigator from '../features/UserProfile79299/navigator';
import Tutorial79298Navigator from '../features/Tutorial79298/navigator';
import NotificationList79270Navigator from '../features/NotificationList79270/navigator';
import Settings79269Navigator from '../features/Settings79269/navigator';
import Settings79261Navigator from '../features/Settings79261/navigator';
import UserProfile79259Navigator from '../features/UserProfile79259/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings79340: { screen: Settings79340Navigator },
Settings79332: { screen: Settings79332Navigator },
UserProfile79330: { screen: UserProfile79330Navigator },
UserProfile79299: { screen: UserProfile79299Navigator },
Tutorial79298: { screen: Tutorial79298Navigator },
NotificationList79270: { screen: NotificationList79270Navigator },
Settings79269: { screen: Settings79269Navigator },
Settings79261: { screen: Settings79261Navigator },
UserProfile79259: { screen: UserProfile79259Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
