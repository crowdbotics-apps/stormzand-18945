import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList79270Navigator from '../features/NotificationList79270/navigator';
import Settings79269Navigator from '../features/Settings79269/navigator';
import Settings79261Navigator from '../features/Settings79261/navigator';
import UserProfile79259Navigator from '../features/UserProfile79259/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
