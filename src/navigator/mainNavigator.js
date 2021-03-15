import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps214907Navigator from '../features/Maps214907/navigator';
import Settings214885Navigator from '../features/Settings214885/navigator';
import Settings214870Navigator from '../features/Settings214870/navigator';
import NotificationList214869Navigator from '../features/NotificationList214869/navigator';
import Maps214868Navigator from '../features/Maps214868/navigator';
import BlankScreen0214867Navigator from '../features/BlankScreen0214867/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps214907: { screen: Maps214907Navigator },
Settings214885: { screen: Settings214885Navigator },
Settings214870: { screen: Settings214870Navigator },
NotificationList214869: { screen: NotificationList214869Navigator },
Maps214868: { screen: Maps214868Navigator },
BlankScreen0214867: { screen: BlankScreen0214867Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
